import { useEffect, useState } from "react";
import { optionsFilters, storagesKeys } from "../../utils/definition";
import { getStorage, setStorage } from "../../utils/storage";
import { Icon } from "../Icon";
import type { IAdvancedFilter } from "./types";

const AdvancedFilter: React.FC<IAdvancedFilter> = ({ callback }) => {
	const dimensionIcon = 17;
	const [checks, setChecks] = useState<Array<number>>([]);

	const defineFigure = (index: number) => {
		const isCheck = checks.filter((data: number) => index === data).length > 0;
		return isCheck ? "squareCheck" : "square";
	};

	const buttonActions = {
		click: () => {
			if (checks.length === 0) {
				localStorage.clear();
			} else {
				setStorage(storagesKeys.filterOption, checks);
			}
			callback();
		},
		clear: () => {
			localStorage.clear();
			callback();
		},
		all: () => {
			setStorage(
				storagesKeys.filterOption,
				optionsFilters.map((data) => data.id),
			);
			callback();
		},
	};

	const handlerOptionClick = (index: number) => {
		if (checks.includes(index)) {
			setChecks(checks.filter((data: number) => index !== data));
		} else {
			setChecks([...checks, index]);
		}
	};

	useEffect(() => {
		try {
			setChecks(getStorage(storagesKeys.filterOption));
		} catch (error) {}
	}, []);

	return (
		<div className="rounded-lg mt-4 mb-0 p-4 bg-[#242525] flex flex-col">
			<div className="mt-1 flex flex-col lg:flex-row justify-start gap-4">
				{optionsFilters.map((option, index) => (
					<div
						className="flex flex-row gap-2 items-center justify-start"
						key={`${option}-${index + 1}`}
					>
						<p className="capitalize">
							<p>{option.title}</p>
						</p>{" "}
						<Icon
							click={() => handlerOptionClick(option.id)}
							id={`advancedFilterOption${option.id}`}
							src={`/${defineFigure(option.id)}.svg`}
							dimension={dimensionIcon}
						/>
					</div>
				))}
			</div>

			<div className="flex gap-2 mt-4 justify-end">
				<button
					type="button"
					className="w-24 rounded-lg text-white border-0 outline-none text-lg py-2 bg-[#b01214] hover:bg-[#8a0f11] cursor-pointer"
					id="advancedFilterButtonClear"
					onClick={buttonActions.clear}
				>
					Clear
				</button>

				<button
					type="button"
					className="w-24 rounded-lg text-white border-0 outline-none text-lg py-2 bg-[#b01214] hover:bg-[#8a0f11] cursor-pointer"
					id="advancedFilterButtonAll"
					onClick={buttonActions.all}
				>
					Mark All
				</button>

				<button
					type="button"
					className="w-24 rounded-lg text-white border-0 outline-none text-lg py-2 bg-[#b01214] hover:bg-[#8a0f11] cursor-pointer"
					id="advancedFilterButtonApply"
					onClick={buttonActions.click}
				>
					Apply
				</button>
			</div>
		</div>
	);
};

export { AdvancedFilter };
