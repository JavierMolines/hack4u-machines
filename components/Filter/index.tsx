import { type FormEvent, useContext, useEffect, useRef, useState } from "react";
import { MachinesContext } from "../../context/MachineContent";
import { filterExact, sortHight, storagesKeys } from "../../utils/definition";
import { handlerOverflowVertical } from "../../utils/domMethods";
import { getStorage, removeStorage, setStorage } from "../../utils/storage";
import { AdvancedFilter } from "../AdvancedFilter";
import { Icon } from "../Icon/";
import type { IFilter } from "./types";

const Filter: React.FC<IFilter> = ({ callbackShowMachines }) => {
	const dimension: number = 25;
	const contextMachine = useContext(MachinesContext);
	const inputFilter = useRef<HTMLInputElement>(null);
	const [showAdvancedFilter, setShowAdvancedFilter] = useState<boolean>(false);
	const [totalSearchOption, setTotalSearchOption] = useState(0);

	const refreshSearchOption = () => {
		try {
			setTotalSearchOption(getStorage(storagesKeys.filterOption).length);
		} catch (error) {}
	};

	const generateCountSelectOptions = () => {
		if (totalSearchOption === 0) return <></>;

		return (
			<span className="absolute bottom-1 right-0 text-[#ffd700] text-center text-[15px] p-0">
				{totalSearchOption}
			</span>
		);
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
				autoComplete="off"
				onSubmit={onSubmit}
				className="grid grid-cols-2 lg:grid-cols-[5%_80%_15%] bg-[var(--colorGrayDark)]"
			>
				<div
					id="machinesButtonFilter"
					onClick={filterOnClick}
					className="order-0 flex justify-center cursor-pointer rounded-l-lg col-span-1 bg-[var(--colorRedDark)] hover:bg-[#8a0f11] text-white text-center p-2"
				>
					<Icon src="/filter.svg" dimension={dimension} />
				</div>

				<div className="order-3 lg:order-2 col-span-2 lg:col-span-1 grid grid-cols-[10%_1fr] lg:grid-cols-[6%_1fr]">
					<div className="bg-transparent flex justify-center col-span-1 bg-blue-500 text-white text-center p-2 relative">
						<Icon src="/search.svg" dimension={dimension} />
						{generateCountSelectOptions()}
					</div>

					<input
						type="text"
						id="machinesButtonSearch"
						aria-autocomplete="none"
						autoComplete="off"
						ref={inputFilter}
						placeholder="Filter for anything you want: (Ex: HackTheBox Medium Active Directory OSEP Kerberos)"
						className="text-lg outline-none bg-transparent col-span-1 bg-green-500 text-white p-2"
					/>
				</div>

				<button
					type="submit"
					className="order-2 lg:order-6 rounded-r-lg col-span-1 bg-[var(--colorRedDark)] hover:bg-[#8a0f11] text-white text-lg p-2"
				>
					Search
				</button>
			</form>

			{showAdvancedFilter && <AdvancedFilter callback={filterOnClick} />}
		</section>
	);
};

export { Filter };
