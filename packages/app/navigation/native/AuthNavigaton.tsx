import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { defaultStackScreenOptions } from "app/constants/defaultStackScreenOptions";
import SignInScreen from "app/screens/auth/SignInScreen";
import SignUpScreen from "app/screens/auth/SignUpScreen";
import HomeScreen from "../../../../apps/next/pages";

const Stack = createNativeStackNavigator<{
	home: undefined;
	signIn: undefined;
	signUp: undefined;
}>();

const AuthNavigation = () => {
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
				options={{ title: "Sign In", ...defaultStackScreenOptions }}
			/>
			<Stack.Screen
				name="signUp"
				component={SignUpScreen}
				options={{ title: "Sign Up", ...defaultStackScreenOptions }}
			/>
		</Stack.Navigator>
	);
};

export default AuthNavigation;
