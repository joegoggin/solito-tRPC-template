import { Colors } from "app/provider/context/ColorsContextProvider";

export const getDefaultTabScreenOptions = (colors: Colors) => {
	return {
		headerStyle: { backgroundColor: colors.green },
		headerTintColor: colors.white,
		tabBarStyle: {
			backgroundColor: colors.brown,
			height: "10%",
		},
		tabBarItemStyle: {
			padding: 10,
		},
		tabBarActiveTintColor: colors.green,
	};
};
