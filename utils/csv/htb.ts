interface MaquinaCTF {
	nombre: string;
	ip: string;
	sistema: string;
	dificultad: string;
	tecnicas: string;
	certificaciones: string;
	video: string;
	disponible: string;
}

export const parseTextToObjectsHTB = (text: string): Array<MaquinaCTF> => {
	const lines = text.split("\n");
	const rows = [];
	let currentLine = "";
	let insideQuotes = false;

	for (const line of lines) {
		if (!insideQuotes) {
			currentLine = line;
			// Cuenta comillas dobles (") para ver si inicia o no un bloque multilinea
			const quotesCount = (line.match(/"/g) || []).length;
			if (quotesCount % 2 !== 0) {
				insideQuotes = true;
			} else {
				rows.push(currentLine);
				currentLine = "";
			}
		} else {
			currentLine += `\n${line}`;
			// Contamos las comillas para saber si cerramos
			const quotesCount = (line.match(/"/g) || []).length;
			if (quotesCount % 2 !== 0) {
				insideQuotes = false;
				rows.push(currentLine);
				currentLine = "";
			}
		}
	}

	// Ahora rows tiene cada fila completa, con multilineas dentro de las comillas.

	// Parsear cada fila CSV respetando las comillas para no cortar comas dentro
	function parseCSVRow(row: any) {
		const result = [];
		let field = "";
		let inQuotes = false;

		for (let i = 0; i < row.length; i++) {
			const char = row[i];
			if (char === '"') {
				inQuotes = !inQuotes;
			} else if (char === "," && !inQuotes) {
				result.push(field);
				field = "";
			} else {
				field += char;
			}
		}
		result.push(field);

		return result.map((f, index) => {
			// Quitamos comillas al principio y final
			const clean = f.trim().replace(/^"|"$/g, "");

			// Para los campos técnicas (índice 4) y certificaciones (índice 5) mantenemos \n
			if (index === 4 || index === 5) {
				return clean; // dejamos los saltos de línea intactos
				// biome-ignore lint/style/noUselessElse: <explanation>
			} else {
				// Para el resto reemplazamos saltos por espacio para que quede limpio
				return clean.replace(/\n/g, " ");
			}
		});
	}

	const keysMappper = [
		"nombre",
		"ip",
		"sistema",
		"dificultad",
		"tecnicas",
		"certificaciones",
		"video",
		"disponible",
	];

	const values = rows.map((row: any) => {
		const parsed = parseCSVRow(row);
		const obj: any = {};
		keysMappper.forEach((key, i) => {
			obj[key] = parsed[i];
		});
		return obj;
	});

	return values;
};
