import { Platform } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

/*
	params: (id: string, token: string)
	return type: boolean
	description: A Util function that takes in an id and token and then stores
	them on user's device locally.
*/
export const storeUserDataLocally = async (id: string, token: string) => {
	if (Platform.OS === "web") {
		localStorage.setItem("token", token);
		localStorage.setItem("userId", id);
	} else {
		try {
			await AsyncStorage.setItem("token", token);
			await AsyncStorage.setItem("userId", id);
		} catch (error) {
			console.log(error);
			return false;
		}
	}

	return true;
};

/*
	params: ()
	return type: { token: string | null, userId: string | null }
	description: A Util function that checks local storage for a token and an
	id then returns an object with the token and id. the function will
	return an object regardless of if an item is found or not. If an item isn't
	found it's key in the return object will be set to null.
*/
export const getLocalUserData = async () => {
	let token: string | null = null;
	let userId: string | null = null;

	if (Platform.OS === "web") {
		token = localStorage.getItem("token");
		userId = localStorage.getItem("userId");
	} else {
		try {
			token = await AsyncStorage.getItem("token");
			userId = await AsyncStorage.getItem("userId");
		} catch (error) {
			console.log(error);
		}
	}

	return { token, userId };
};

/*
	params: ()
	return type: void
	description: A Util function that removes the token and id from local storage.
*/
export const clearLocalUserData = async () => {
	if (Platform.OS === "web") {
		localStorage.removeItem("token");
		localStorage.removeItem("userId");
	} else {
		try {
			await AsyncStorage.removeItem("token");
			await AsyncStorage.removeItem("userId");
		} catch (error) {
			console.log(error);
			return false;
		}
	}

	return true;
};
