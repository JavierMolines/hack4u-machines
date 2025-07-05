export const parseTextToObjectsVULN = (text: string) => {
	const lines = text.split("\n");
	const rows = [];
	let current = "";
	let insideQuotes = false;

	for (const line of lines) {
		const quoteCount = (line.match(/"/g) || []).length;
		current += (current ? "\n" : "") + line;

		if (quoteCount % 2 !== 0) {
			insideQuotes = !insideQuotes;
		}

		if (!insideQuotes) {
			rows.push(current);
			current = "";
		}
	}

	function parseRow(row: any) {
		const result = [];
		let field = "";
		let inQuotes = false;

		for (let i = 0; i < row.length; i++) {
			const char = row[i];

			if (char === '"') {
				inQuotes = !inQuotes;
				continue;
			}

			if (char === "," && !inQuotes) {
				result.push(field);
				field = "";
			} else {
				field += char;
			}
		}
		result.push(field);

		return result.map((value, index) => {
			const clean = value.trim().replace(/^"|"$/g, "");
			// Solo técnicas y certificaciones mantienen los \n
			if (index === 3 || index === 4) return clean;
			return clean.replace(/\n/g, " ");
		});
	}

	const output = rows.map((row) => {
		const data = parseRow(row);

		// Detectamos si hay una versión con `:` en el nombre
		let nombre = data[0];
		let version = "";
		if (nombre.includes(":")) {
			const [n, v] = nombre.split(":").map((s) => s.trim());
			nombre = n;
			version = v;
		}

		return {
			nombre,
			version,
			sistema: data[1],
			dificultad: data[2],
			tecnicas: data[3],
			certificaciones: data[4],
			link_vulnhub: data[5],
			link_youtube: data[6],
			disponible: data[7],
		};
	});

	return output;
};
