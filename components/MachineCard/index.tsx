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

import {
	CardLabel,
	CertificationsContainer,
	Container,
	ContainerExpand,
	TechniquesContainer,
	TextWithIcon,
} from "./styles";

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
			<TextWithIcon>
				<Icon src={`/${iconByState(state)}.svg`} dimension={dimensionIcon} />
				<p>{state}</p>
			</TextWithIcon>
		);
	};

	const renderOperativeSystem = () => {
		if (os === "") {
			return <></>;
		}
		return (
			<TextWithIcon>
				<Icon src={`/${iconByPlatform(os)}.svg`} dimension={dimensionIcon} />
				<p>{os}</p>
			</TextWithIcon>
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
					<TechniquesContainer>
						<ul>
							{dataTech.left.map((technique, index) =>
								generateLabelSkill(technique, index),
							)}
						</ul>
						<ul>
							{dataTech.right.map((technique, index) =>
								generateLabelSkill(technique, index),
							)}
						</ul>
					</TechniquesContainer>
				)}

				<CertificationsContainer>
					<span>{certCollection.join(" ")}</span>
				</CertificationsContainer>
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
		<Container className="machineItem" id={identifier}>
			<CardLabel platform={platform}>
				<Link
					id={`${identifier}youtube`}
					target={video}
					color="var(--colorRedLight)"
				>
					<TextWithIcon>
						{!isMobile && <Icon src={"/link.svg"} dimension={dimensionIcon} />}
						<p>{name}</p>
					</TextWithIcon>
				</Link>

				<TextWithIcon>{platformRender()}</TextWithIcon>

				{renderDifficult()}

				{renderOperativeSystem()}

				{!isMobile && (
					<TextWithIcon>
						<p>Certifications {certCollection.length}</p>
					</TextWithIcon>
				)}

				<TextWithIcon>
					<p>Skills used {techCollection.length}</p>
				</TextWithIcon>

				<ContainerExpand
					id={`${identifier}button`}
					style={{ cursor: "pointer" }}
					onClick={handlerClick}
				>
					<Icon src={iconArrowName} dimension={dimension} />
				</ContainerExpand>
			</CardLabel>

			{tabContentExpand()}
		</Container>
	);
};

export { MachineCard };
