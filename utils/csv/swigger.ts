interface Entrada {
	video: string;
	nombre: string;
	tecnicas: string[];
	certificaciones: string[];
}

export const parseTextToObjectsSWIGGER = (csv: string) => {
	const lines = splitCSVRows(csv);
	const headerIndex = lines.findIndex((line) =>
		line.includes("Vulnerabilidad"),
	);
	if (headerIndex === -1) throw new Error("No se encontró encabezado válido");

	const dataLines = lines.slice(headerIndex + 1);

	const result: Entrada[] = [];
	let current: Entrada | null = null;

	for (const line of dataLines) {
		const cells: string[] = [];
		let cell = "";
		let insideQuotes = false;

		for (let i = 0; i < line.length; i++) {
			const char = line[i];
			const nextChar = line[i + 1];

			if (char === '"' && insideQuotes && nextChar === '"') {
				cell += '"';
				i++;
			} else if (char === '"') {
				insideQuotes = !insideQuotes;
			} else if (char === "," && !insideQuotes) {
				cells.push(cell.trim());
				cell = "";
			} else {
				cell += char;
			}
		}
		cells.push(cell.trim());

		const [vulnerabilidad, tecnica, writeup, certificaciones] = cells;

		if (vulnerabilidad) {
			current = {
				video: writeup || "",
				nombre: vulnerabilidad,
				tecnicas: [],
				certificaciones: [],
			};
			if (tecnica) current.tecnicas.push(tecnica);
			if (certificaciones) current.certificaciones.push(certificaciones);
			result.push(current);
		} else if (current) {
			if (tecnica) current.tecnicas.push(tecnica);
			if (certificaciones) current.certificaciones.push(certificaciones);
		}
	}

	return result.map((entry) => ({
		video: entry.video,
		nombre: entry.nombre,
		tecnicas: entry.tecnicas.join("\n"),
		certificaciones: entry.certificaciones.join("\n"),
	}));
};

function splitCSVRows(csv: string): string[] {
	const lines = csv.trim().split(/\r?\n/);
	const rows: string[] = [];

	let buffer = "";
	let insideQuotes = false;

	for (const line of lines) {
		const quoteCount = (line.match(/"/g) || []).length;

		if (insideQuotes) {
			buffer += `\n${line}`;
			if (quoteCount % 2 !== 0) {
				rows.push(buffer);
				buffer = "";
				insideQuotes = false;
			}
		} else {
			if (quoteCount % 2 !== 0) {
				buffer = line;
				insideQuotes = true;
			} else {
				rows.push(line);
			}
		}
	}

	if (buffer) rows.push(buffer); // Agrega cualquier línea restante
	return rows;
}
