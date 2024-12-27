import { useEffect, useState } from "react";
import { useDevice } from "../../hooks/useDevice";
import { iconByPlatform, iconByState } from "../../utils/methods";
import { getStorage } from "../../utils/storage";
import { Icon } from "../Icon";
import { Link } from "../Link";
import type { IMachineCard } from "./types";

import {
	detailMachine,
	highLightFilter,
	mapInfo,
	storagesKeys,
} from "../../utils/definition";

const MachineCard: React.FC<IMachineCard> = ({
	name,
	ip,
	os,
	state,
	platform = "HackTheBox",
	techniques,
	video,
	certification,
}) => {
	const dimension = 20;
	const dimensionIcon = 15;
	const identifier = `machineItem${name}${platform}`;
	const { isMobile } = useDevice();
	const [compress, setCompress] = useState(true);
	const certCollection = certification.split("\n");
	const techCollection = techniques.split("\n");
	const totalTechCollection =
		techCollection.length % 2 === 0
			? techCollection.length / 2
			: (techCollection.length + 1) / 2;
	const handlerClick = () => setCompress(!compress);
	const iconArrowName = `/${compress ? "arrowDown" : "arrowRight"}.svg`;
	const dataTech = {
		left: techCollection.slice(0, totalTechCollection),
		right: techCollection.slice(totalTechCollection),
	};

	const platformRender = () => {
		if (platform === mapInfo.vuln) {
			return (
				<Link target={ip} color="#66ccff">
					{platform}
				</Link>
			);
		}
		return <p>{platform}</p>;
	};

	const generateLabelSkill = (technique: string, index: number) => {
		const options = getStorage(storagesKeys.filterOption);
		const searchInputs = getStorage(storagesKeys.paramSearchOption);

		if (options.includes(highLightFilter)) {
			for (const optionInput of searchInputs) {
				const regExpTmp = new RegExp(optionInput, "ig");
				if (regExpTmp.test(technique)) {
					return (
						<li key={`${technique} ${index}`}>
							<span style={{ color: "#e6e600" }}>{technique}</span>
						</li>
					);
				}
			}
		}

		return (
			<li key={`${technique} ${index}`}>
				<span>{technique}</span>
			</li>
		);
	};

	const renderDifficult = () => {
		if (state === "") {
			return <></>;
		}
		return (
			<div className="flex items-center justify-start gap-1">
				<Icon src={`/${iconByState(state)}.svg`} dimension={dimensionIcon} />
				<p>{state}</p>
			</div>
		);
	};

	const renderOperativeSystem = () => {
		if (os === "") {
			return <></>;
		}
		return (
			<div className="flex items-center justify-start gap-1">
				<Icon src={`/${iconByPlatform(os)}.svg`} dimension={dimensionIcon} />
				<p>{os}</p>
			</div>
		);
	};

	const tabContentExpand = () => {
		if (compress) return <></>;

		return (
			<>
				<p>Skills:</p>
				{isMobile ? (
					<ul>
						{[...dataTech.right, ...dataTech.left].map((technique, index) =>
							generateLabelSkill(technique, index),
						)}
					</ul>
				) : (
					<div className="grid grid-cols-[48%_48%] justify-between">
						<ul className="flex flex-col m-0 p-4">
							{dataTech.left.map((technique, index) =>
								generateLabelSkill(technique, index),
							)}
						</ul>
						<ul>
							{dataTech.right.map((technique, index) =>
								generateLabelSkill(technique, index),
							)}
						</ul>
					</div>
				)}

				<div className="border-l-4 border-red-500 my-4 p-2 w-full bg-gray-200 rounded">
					<span>{certCollection.join(" ")}</span>
				</div>
			</>
		);
	};

	useEffect(() => {
		const filterOption = getStorage(storagesKeys.filterOption);
		if (filterOption.includes(detailMachine)) {
			setCompress(false);
		}
	}, []);

	return (
		<header
			className="text-base border-b border-gray-500 border-t-transparent border-r-transparent border-l-transparent machineItem"
			id={identifier}
		>
			<div className="grid grid-cols-3 justify-between">
				<Link
					id={`${identifier}youtube`}
					target={video}
					color="var(--colorRedLight)"
				>
					<div className="flex items-center justify-start gap-1">
						{!isMobile && <Icon src={"/link.svg"} dimension={dimensionIcon} />}
						<p>{name}</p>
					</div>
				</Link>

				<div className="flex items-center justify-start gap-1">
					{platformRender()}
				</div>

				{renderDifficult()}

				{renderOperativeSystem()}

				{!isMobile && (
					<div className="flex items-center justify-start gap-1">
						<p>Certifications {certCollection.length}</p>
					</div>
				)}

				<div className="flex items-center justify-start gap-1">
					<p>Skills used {techCollection.length}</p>
				</div>

				<div
					className="w-full flex justify-center items-center"
					id={`${identifier}button`}
					style={{ cursor: "pointer" }}
					onClick={handlerClick}
				>
					<Icon src={iconArrowName} dimension={dimension} />
				</div>
			</div>

			{tabContentExpand()}
		</header>
	);
};

export { MachineCard };
