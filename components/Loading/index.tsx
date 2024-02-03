import { useEffect } from "react";
import { storagesKeys } from "../../utils/definition";
import { removeStorage } from "../../utils/storage";
import { CircleRed, CircleWhite, Container, Spinner } from "./styles";
import { ILoading } from "./types";

const Loading: React.FC<ILoading> = () => {
	useEffect(() => {
		removeStorage(storagesKeys.paramSearchOption);
	}, []);

	return (
		<Container>
			<Spinner>
				<CircleRed />
				<CircleWhite />
			</Spinner>
		</Container>
	);
};

export { Loading };
