import { useEffect, useState } from "react";

const useDevice = () => {
	const [isMobile, setIsMobile] = useState(false);
	const validScreen = () => {
		try {
			setIsMobile(window.innerWidth < 1024);
		} catch (error) {}
	};

	useEffect(() => {
		validScreen();
	}, [isMobile]);

	useEffect(() => {
		window.addEventListener("resize", validScreen);
		return () => window.removeEventListener("resize", validScreen);
	}, []);

	return { isMobile };
};

export { useDevice };
