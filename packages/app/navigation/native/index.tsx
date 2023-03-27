import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { useUser } from "app/provider/context/UserContextProvider";
import AuthNavigator from "./AuthNavigator";
import MainNavigator from "./MainNavigator";

const Stack = createNativeStackNavigator<{
	auth: undefined;
	main: undefined;
}>();

const NativeNavigator = () => {
	// context
	const { user, token } = useUser();

	return (
		<Stack.Navigator>
			{!user && !token ? (
				<Stack.Screen
					name="auth"
					component={AuthNavigator}
					options={{ headerShown: false }}
				/>
			) : (
				<Stack.Screen
					name="main"
					component={MainNavigator}
					options={{ headerShown: false }}
				/>
			)}
		</Stack.Navigator>
	);
};

export default NativeNavigator;
