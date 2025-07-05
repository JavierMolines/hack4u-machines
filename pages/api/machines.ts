import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { mapInfo, urlMachines } from "../../utils/definition";
import { getParseState } from "../../utils/methods";
import { parseTextToObjectsHTB } from "../../utils/csv/htb";
import { parseTextToObjectsVULN } from "../../utils/csv/vulnhub";
import { parseTextToObjectsSWIGGER } from "../../utils/csv/swigger";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	const newData: any = [];
	const regExpVideo = /https:\/\/www.youtube.com/i;
	const totalMachines = {
		htb: 0,
		vuln: 0,
		swigger: 0,
		challenge: 0,
	};

	for (const machine of urlMachines) {
		const response = await axios.get(machine.url);
		const csv = response.data;

		if (machine.platform === mapInfo.htb) {
			const content = parseTextToObjectsHTB(csv);

			for (const element of content) {
				if (!regExpVideo.test(element.video)) {
					continue;
				}

				const dataMachine = {
					platform: machine.platform,
					name: element.nombre,
					os: element.sistema,
					state: getParseState(element.dificultad),
					techniques: element.tecnicas,
					certification: element.certificaciones,
					ip: element.ip,
					video: element.video,
				};

				totalMachines.htb++;
				newData.push(dataMachine);
			}
		}

		if (machine.platform === mapInfo.vuln) {
			const content = parseTextToObjectsVULN(csv);

			for (const element of content) {
				if (!regExpVideo.test(element.link_youtube)) {
					continue;
				}

				const dataMachine = {
					platform: machine.platform,
					name: `${element.nombre} ${element.version}`,
					os: element.sistema,
					state: getParseState(element.dificultad),
					techniques: element.tecnicas,
					certification: element.certificaciones,
					ip: element.link_vulnhub,
					video: element.link_youtube,
				};

				totalMachines.vuln++;
				newData.push(dataMachine);
			}
		}

		if (machine.platform === mapInfo.swigger) {
			const content = parseTextToObjectsSWIGGER(csv);

			for (const element of content) {
				if (!regExpVideo.test(element.video)) {
					continue;
				}

				const dataMachine = {
					platform: machine.platform,
					name: element.nombre,
					os: "",
					state: "",
					techniques: element.tecnicas,
					certification: element.certificaciones,
					ip: "",
					video: element.video,
				};

				totalMachines.swigger++;
				newData.push(dataMachine);
			}
		}

		/* (machine.platform === mapInfo.challenge) {
				const video = info.childNodes[4].textContent.trim();

				if (!regExpVideo.test(video)) continue;

				dataMachine.video = video;
				dataMachine.certification = info.childNodes[2].textContent.trim();
				dataMachine.name = info.childNodes[1].textContent.trim();
				dataMachine.state = info.childNodes[5].textContent.trim();
				dataMachine.techniques = info.childNodes[3].textContent
					.trim()
					.replaceAll("\n", "")
					.split(",")
					.join("\n");

				totalMachines.challenge++;
				newData.push(dataMachine);
			}*/
	}

	res.status(200).json({
		newData,
		totalMachines,
	});
}
