import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../../screens/HomeScreen";

const Stack = createNativeStackNavigator<{
	home: undefined;
	"user-detail": {
		id: string;
	};
}>();

export function NativeNavigation() {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="home"
				component={HomeScreen}
				options={{
					title: "Home",
				}}
			/>
		</Stack.Navigator>
	);
}
