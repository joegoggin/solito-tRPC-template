import { type Colors } from "app/provider/context/ColorsContextProvider";

export const getDefaultStackScreenOptions = (colors: Colors) => {
	return {
		headerStyle: { backgroundColor: colors.brown },
		headerTitleStyle: { color: colors.white },
		headerTintColor: colors.white,
	};
};
