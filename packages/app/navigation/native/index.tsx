import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Colors } from "app/constants/Colors";

import HomeScreen from "../../screens/HomeScreen";
import AuthNavigation from "./AuthNavigaton";

const Stack = createNativeStackNavigator<{
	auth: undefined;
}>();

export function NativeNavigation() {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="auth"
				component={AuthNavigation}
				options={{ headerShown: false }}
			/>
		</Stack.Navigator>
	);
}
