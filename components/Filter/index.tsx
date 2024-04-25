import { type FormEvent, useContext, useEffect, useRef, useState } from "react";
import { MachinesContext } from "../../context/MachineContent";
import { useDevice } from "../../hooks/useDevice";
import { filterExact, sortHight, storagesKeys } from "../../utils/definition";
import { handlerOverflowVertical } from "../../utils/domMethods";
import { getStorage, removeStorage, setStorage } from "../../utils/storage";
import { AdvancedFilter } from "../AdvancedFilter";
import { Icon } from "../Icon/";
import type { IFilter } from "./types";

import {
	ButtonSearch,
	Container,
	ContainerFilter,
	ContainerMobileIcon,
	ContainerMobileSearch,
	ContainerSearch,
	FilterContainer,
	Input,
} from "./styles";

const Filter: React.FC<IFilter> = ({ callbackShowMachines }) => {
	const dimension: number = 25;
	const inputPlaceHolder =
		"Filter for anything you want: (Ex: HackTheBox Medium Active Directory OSEP Kerberos)";
	const { isMobile } = useDevice();
	const contextMachine = useContext(MachinesContext);
	const inputFilter = useRef<HTMLInputElement>(null);
	const [showAdvancedFilter, setShowAdvancedFilter] = useState<boolean>(false);
	const [totalSearchOption, setTotalSearchOption] = useState(0);

	const refreshSearchOption = () => {
		try {
			setTotalSearchOption(getStorage(storagesKeys.filterOption).length);
		} catch (error) {}
	};

	const filterOnClick = () => {
		setShowAdvancedFilter(!showAdvancedFilter);
		refreshSearchOption();
	};

	const onSubmit = (event: FormEvent) => {
		event.preventDefault();
		sessionStorage.setItem("shortcutTarget", "-1");
		handlerOverflowVertical(false);
		const options = getStorage(storagesKeys.filterOption);
		const input = inputFilter.current?.value.trim() ?? "";

		if (input === "") {
			removeStorage(storagesKeys.paramSearchOption);
			callbackShowMachines([]);
			return;
		}

		const filter = contextMachine.machines.filter((box) => {
			let count = 0;
			const totalMachines = input.split(" ");
			setStorage(storagesKeys.paramSearchOption, totalMachines);
			const filterApproval = totalMachines.length;

			for (const iterator of totalMachines) {
				const innerFilter = options.includes(filterExact)
					? `^${input.trim()}$`
					: `${iterator}`;
				const regExpTmp = new RegExp(innerFilter, "ig");

				if (
					regExpTmp.test(box.name.trim()) ||
					regExpTmp.test(box.os.trim()) ||
					regExpTmp.test(box.techniques.trim()) ||
					regExpTmp.test(box.certification.trim()) ||
					regExpTmp.test(box.state.trim()) ||
					regExpTmp.test(box.platform.trim())
				) {
					count++;
					continue;
				}

				if (count === filterApproval) break;
			}

			if (count === filterApproval) {
				return true;
			}
			return false;
		});

		if (options.includes(sortHight)) {
			callbackShowMachines(
				filter.sort((a, b) => {
					return (
						b.techniques.split("\n").length - a.techniques.split("\n").length
					);
				}),
			);
		} else {
			callbackShowMachines(filter);
		}
	};

	useEffect(() => {
		refreshSearchOption();
	}, []);

	return (
		<Container>
			<FilterContainer autoComplete="off" onSubmit={onSubmit}>
				{isMobile ? (
					<>
						<ContainerMobileIcon>
							<ContainerFilter
								id="machinesButtonFilter"
								onClick={filterOnClick}
							>
								<Icon src="/filter.svg" dimension={dimension} />
							</ContainerFilter>
							<ButtonSearch>Search</ButtonSearch>
						</ContainerMobileIcon>

						<ContainerMobileSearch>
							<ContainerSearch $options={totalSearchOption}>
								<Icon src="/search.svg" dimension={dimension} />
							</ContainerSearch>
							<Input
								id="machinesButtonSearch"
								autoFocus
								type="text"
								aria-autocomplete="none"
								autoComplete="off"
								ref={inputFilter}
								placeholder={inputPlaceHolder}
							/>
						</ContainerMobileSearch>
					</>
				) : (
					<>
						<ContainerFilter id="machinesButtonFilter" onClick={filterOnClick}>
							<Icon src="/filter.svg" dimension={dimension} />
						</ContainerFilter>
						<ContainerSearch $options={totalSearchOption}>
							<Icon src="/search.svg" dimension={dimension} />
						</ContainerSearch>
						<Input
							id="machinesButtonSearch"
							autoFocus
							type="text"
							aria-autocomplete="none"
							autoComplete="off"
							ref={inputFilter}
							placeholder={inputPlaceHolder}
						/>
						<ButtonSearch>Search</ButtonSearch>
					</>
				)}
			</FilterContainer>

			{showAdvancedFilter && <AdvancedFilter callback={filterOnClick} />}
		</Container>
	);
};

export { Filter };
