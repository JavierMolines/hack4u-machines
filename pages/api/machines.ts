import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	try {
		const MACHINES_URL = process.env.MACHINES_URL ?? "";
		const response = await axios.get(MACHINES_URL);
		const { newData, totalMachines } = response.data;

		res.status(200).json({
			newData,
			totalMachines,
		});
	} catch (error) {
		res.status(500).json({
			msg: "Internal Error",
		});
	}
}
