import {
	createContext,
	useContext,
	useState,
	useEffect,
	type ReactNode,
} from "react";
import { useSettings } from "./SettingsContextProvider";

export type Colors = {
	primary: string;
	light: string;
	dark: string;
	green: string;
	yellow: string;
	red: string;
};

type ColorsContext = {
	colors: Colors;
};

const lightTheme: Colors = {
	primary: "#4F5D2F",
	light: "#EAFFDA",
	dark: "#1A181B",
	green: "#95C623",
	yellow: "#95C623",
	red: "#C33149",
};

const darkTheme: Colors = {
	...lightTheme,
	dark: lightTheme.light,
	light: lightTheme.dark,
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
