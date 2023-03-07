import {
	type ReactNode,
	createContext,
	useContext,
	useState,
	useEffect,
} from "react";
import { useSettings } from "./SettingsContextProvider";

export type Colors = {
	blueDark: string;
	blueLight: string;
	white: string;
	brown: string;
	green: string;
	greenLight: string;
	red: string;
};

type ColorsContext = {
	colors: Colors;
};

const lightTheme: Colors = {
	blueDark: "#064789",
	blueLight: "#427AA1",
	white: "#EBF2FA",
	brown: "#423629",
	green: "#4F5D2F",
	greenLight: "#95C623",
	red: "#D64045",
};

const darkTheme: Colors = {
	blueDark: "#064789",
	blueLight: "#427AA1",
	white: "#423629",
	brown: "#EBF2FA",
	green: "#4F5D2F",
	greenLight: "#95C623",
	red: "#D64045",
};

const ColorsCtx = createContext<ColorsContext>({
	colors: lightTheme,
});

export const useColors = () => useContext(ColorsCtx);

const ColorsContextProvider: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	// state
	const [colors, setColors] = useState<Colors>(lightTheme);

	// context
	const { isDarkTheme } = useSettings();

	useEffect(() => {
		if (isDarkTheme) {
			setColors(darkTheme);
		} else {
			setColors(lightTheme);
		}
	}, [isDarkTheme]);

	return (
		<ColorsCtx.Provider value={{ colors }}>{children}</ColorsCtx.Provider>
	);
};

export default ColorsContextProvider;
