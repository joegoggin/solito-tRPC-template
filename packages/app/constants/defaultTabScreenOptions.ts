import { Colors } from "app/provider/context/ColorsContextProvider";

export const getDefaultTabScreenOptions = (colors: Colors) => {
	return {
		headerStyle: { backgroundColor: colors.primary },
		headerTintColor: colors.light,
		tabBarStyle: {
			backgroundColor: colors.dark,
			height: "10%",
		},
		tabBarItemStyle: {
			padding: 10,
		},
		tabBarActiveTintColor: colors.primary,
	};
};
