import { type FormEvent, useContext, useEffect, useRef, useState } from "react";
import { MachinesContext } from "../../context/MachineContent";
import { useDevice } from "../../hooks/useDevice";
import { filterExact, sortHight, storagesKeys } from "../../utils/definition";
import { handlerOverflowVertical } from "../../utils/domMethods";
import { getStorage, removeStorage, setStorage } from "../../utils/storage";
import { AdvancedFilter } from "../AdvancedFilter";
import { Icon } from "../Icon/";
import type { IFilter } from "./types";

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
		<section className="w-full">
			<form
				className="grid grid-cols-1 bg-gray-800 rounded-[0.5rem]"
				autoComplete="off"
				onSubmit={onSubmit}
			>
				<div
					id="machinesButtonFilter"
					onClick={filterOnClick}
					className="w-full flex justify-center items-center bg-red-800 rounded-tl-[0.5rem] rounded-bl-[0.5rem] cursor-pointer"
				>
					<Icon src="/filter.svg" dimension={dimension} />
				</div>

				<div className="w-full flex justify-center items-center">
					<Icon src="/search.svg" dimension={dimension} />
				</div>

				<input
					type="text"
					className="text-[1.2rem] py-[0.75rem] px-[0.25rem] border-0 outline-none bg-transparent text-white placeholder-gray-400"
					id="machinesButtonSearch"
					aria-autocomplete="none"
					autoComplete="off"
					ref={inputFilter}
					placeholder={inputPlaceHolder}
				/>

				<button
					type="button"
					className="rounded-tr-[0.5rem] rounded-br-[0.5rem] bg-red-800 text-white border-0 outline-none text-[1.1rem] py-[0.5rem] px-0 cursor-pointer"
				>
					Search
				</button>
			</form>

			{showAdvancedFilter && <AdvancedFilter callback={filterOnClick} />}
		</section>
	);
};

export { Filter };
