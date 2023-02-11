import { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { Colors } from "./Colors";

export const defaultStackScreenOptions: NativeStackNavigationOptions = {
	headerStyle: { backgroundColor: Colors.brown },
	headerTitleStyle: { color: Colors.white },
	headerTintColor: Colors.white,
};
