const handlerOverflowVertical = (state: boolean) => {
	document.body.style.overflowY = state ? "hidden" : "visible";
};

export { handlerOverflowVertical };
