/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { optionsFilters } from "../utils/definition";

const useShortcuts = () => {
	const handlerExecute = (id: string) => document.getElementById(id);
	const executeFocus = (id: string) => handlerExecute(id)?.focus();
	const executeClick = (id: string) => handlerExecute(id)?.click();

	const handlerFocus = (currentValue: number) => {
		const blocks = document.querySelectorAll(".machineItem");
		const getSS = sessionStorage.getItem("shortcutTarget");
		const targetStorage = Number(getSS);
		let newTarget = targetStorage + currentValue;

		if (newTarget > blocks.length - 1) {
			newTarget = blocks.length - 1;
		}

		if (newTarget <= 0) {
			newTarget = 0;
		}

		const targets = {
			current: newTarget,
			prev: targetStorage,
		};

		const prevBlock = handlerExecute(blocks[targets.prev]?.id);
		prevBlock?.style.setProperty("border-top", "1px solid transparent");
		prevBlock?.style.setProperty("border-bottom", "1px solid #808080");
		prevBlock?.style.setProperty("border-right", "1px solid transparent");
		prevBlock?.style.setProperty("border-left", "1px solid transparent");
		const currentBlock = handlerExecute(blocks[targets.current]?.id);
		currentBlock?.style.setProperty("border", "1px solid gold");
		currentBlock?.scrollIntoView();
		sessionStorage.setItem("shortcutTarget", targets.current.toString());
	};

	const mappingShiftOptions: any = {
		q: () => executeClick(`advancedFilterOption${optionsFilters[0].id}`),
		w: () => executeClick(`advancedFilterOption${optionsFilters[1].id}`),
		e: () => executeClick(`advancedFilterOption${optionsFilters[2].id}`),
	};

	const mappingCtrlOptions: any = {
		y: () => {
			const blocks = document.querySelectorAll(".machineItem");
			const getSS = sessionStorage.getItem("shortcutTarget");
			const currentTarget = `${blocks[Number(getSS)]?.id}youtube`;
			executeClick(currentTarget);
		},
		s: () => {
			window.scrollTo(0, 0);
			executeFocus("machinesButtonSearch");
		},
		d: () => {
			window.scrollTo(0, 0);
			executeClick("machinesButtonFilter");
		},
		"1": () => executeClick("advancedFilterButtonClear"),
		"2": () => executeClick("advancedFilterButtonAll"),
		"3": () => executeClick("advancedFilterButtonApply"),
		",": () => handlerFocus(1),
		".": () => handlerFocus(-1),
		enter: () => {
			const blocks = document.querySelectorAll(".machineItem");
			const getSS = sessionStorage.getItem("shortcutTarget");
			const currentTarget = `${blocks[Number(getSS)]?.id}button`;
			const block = handlerExecute(currentTarget);
			block?.click();
			block?.scrollIntoView();
		},
	};

	const handleKeyPress = (event: any) => {
		if (event.shiftKey) {
			handlerShiftEvent(event);
		}

		if (event.ctrlKey || event.metaKey) {
			handlerCtrlEvent(event);
		}
	};

	const handlerEventExecute = (event: any, mappingOption: any) => {
		const mappingValidOptions = Object.keys(mappingOption);
		const key = event.key.toLowerCase();
		if (!mappingValidOptions.includes(key)) return;
		event.preventDefault();
		mappingOption[key]();
	};

	const handlerCtrlEvent = (event: any) => {
		handlerEventExecute(event, mappingCtrlOptions);
	};

	const handlerShiftEvent = (event: any) => {
		handlerEventExecute(event, mappingShiftOptions);
	};

	useEffect(() => {
		document.addEventListener("keydown", handleKeyPress);
		sessionStorage.setItem("shortcutTarget", "-1");
		return () => {
			document.removeEventListener("keydown", handleKeyPress);
		};
	}, []);

	return {};
};

export { useShortcuts };
