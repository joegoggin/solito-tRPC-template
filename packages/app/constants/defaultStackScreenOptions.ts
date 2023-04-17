import { type Colors } from "app/provider/context/ColorsContextProvider";

export const getDefaultStackScreenOptions = (colors: Colors) => {
	return {
		headerStyle: { backgroundColor: colors.dark },
		headerTitleStyle: { color: colors.light },
		headerTintColor: colors.light,
	};
};
