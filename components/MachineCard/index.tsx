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
	const iconArrowName = compress ? "arrowDown" : "arrowRight";
	const dataTech = {
		left: techCollection.slice(0, totalTechCollection),
		right: techCollection.slice(totalTechCollection),
	};

	const platformRender = () => {
		if (platform === mapInfo.vuln) {
			return (
				<Link target={ip} className="text-[#66ccff] hover:text-[#1ab2ff]">
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
						<li className="list-item" key={`${technique} ${index}`}>
							<span style={{ color: "#e6e600" }}>{technique}</span>
						</li>
					);
				}
			}
		}

		return (
			<li className="list-item" key={`${technique} ${index}`}>
				<span>{technique}</span>
			</li>
		);
	};

	const renderDifficult = () => {
		if (state === "") {
			return <></>;
		}

		const customClass = platform === mapInfo.challenge ? "col-span-2" : "";

		return (
			<div className={`flex items-center justify-start gap-1 ${customClass}`}>
				<Icon id={iconByState(state)} dimension={dimensionIcon} />
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
				<Icon id={iconByPlatform(os)} dimension={dimensionIcon} />
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
					<ul className="block list-disc my-4 mx-0 pl-10 [unicode-bidi:isolate]">
						{[...dataTech.right, ...dataTech.left].map((technique, index) =>
							generateLabelSkill(technique, index),
						)}
					</ul>
				) : (
					<div className="grid grid-cols-[48%_48%] justify-between">
						<ul className="block list-disc my-4 mx-0 pl-10 [unicode-bidi:isolate]">
							{dataTech.left.map((technique, index) =>
								generateLabelSkill(technique, index),
							)}
						</ul>
						<ul className="block list-disc my-4 mx-0 pl-10 [unicode-bidi:isolate]">
							{dataTech.right.map((technique, index) =>
								generateLabelSkill(technique, index),
							)}
						</ul>
					</div>
				)}

				<div className="border-l-4 border-[var(--colorRedLight)] my-4 p-2 w-full bg-[var(--colorGrayLight)] rounded">
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

	const classHandler = {
		[mapInfo.swigger]: "grid-cols-[70%_30%] lg:grid-cols-[30%_25%_15%_15%_5%]",
		[mapInfo.challenge]:
			"grid-cols-[50%_50%] lg:grid-cols-[20%_10%_10%_10%_15%_15%_5%]",
		default:
			"grid-cols-[33%_33%_33%] lg:grid-cols-[20%_10%_10%_10%_15%_15%_5%]",
	};

	const gridByPlatform = classHandler[platform] ?? classHandler.default;

	return (
		<header
			className="text-base border-b border-gray-500 border-t-transparent border-r-transparent border-l-transparent machineItem"
			id={identifier}
		>
			<div
				className={`py-4 grid ${gridByPlatform} gap-y-4 lg:gap-0 justify-between`}
			>
				<Link
					id={`${identifier}youtube`}
					target={video}
					className="text-[var(--colorRedLight)] hover:text-[var(--colorRedDark)]"
				>
					<div className="flex items-center justify-start gap-1">
						{!isMobile && <Icon id="link" dimension={dimensionIcon} />}
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
					<Icon id={iconArrowName} dimension={dimension} />
				</div>
			</div>

			{tabContentExpand()}
		</header>
	);
};

export { MachineCard };
