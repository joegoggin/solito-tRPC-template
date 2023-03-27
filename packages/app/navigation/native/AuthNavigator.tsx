import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { getDefaultStackScreenOptions } from "app/constants/defaultStackScreenOptions";
import { useColors } from "app/provider/context/ColorsContextProvider";
import SignInScreen from "app/screens/auth/SignInScreen";
import SignUpScreen from "app/screens/auth/SignUpScreen";
import HomeScreen from "app/screens/HomeScreen";

const Stack = createNativeStackNavigator<{
	home: undefined;
	signIn: undefined;
	signUp: undefined;
}>();

const AuthNavigator = () => {
	// context
	const { colors } = useColors();

	return (
		<Stack.Navigator>
			<Stack.Screen
				name="home"
				component={HomeScreen}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="signIn"
				component={SignInScreen}
				options={{
					title: "Sign In",
					...getDefaultStackScreenOptions(colors),
				}}
			/>
			<Stack.Screen
				name="signUp"
				component={SignUpScreen}
				options={{
					title: "Sign Up",
					...getDefaultStackScreenOptions(colors),
				}}
			/>
		</Stack.Navigator>
	);
};

export default AuthNavigator;
