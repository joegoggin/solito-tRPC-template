import { hash, compare } from "bcrypt";

/*
	params: (password: string)
	return type: string
	description: Util function that takes in a regular string and returns hashed password
	safe for storage in DB.
*/
export const hashPassword = async (password: string) => {
	const hashedPassword = await hash(password, 12);

	return hashedPassword;
};

/*
	params: (password: string, hashedPassword: string)
	return type: boolean - (true: password is valid, false: password is invalid)
	description: Util function that compares a string and a hashed password and returns
	a boolean based off of the results of the comparison
*/
export const verifyPassword = async (
	password: string,
	hashedPassword: string
) => {
	const isValid = await compare(password, hashedPassword);

	return isValid;
};
