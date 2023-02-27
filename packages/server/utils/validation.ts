/*
	params: (password: string)
	return type: { error: string | null, isValid: boolean } 
	- isValid (true: password is valid, false: password is invalid)
	- error (contains error message, null if no error)
	description: Util function that takes in a string and verifies if
	the string is a valid password. Passwords are required to be at 
	least 8 characters long and must contain at least one capital letter,
	one lower case letter, one number, and one special character.
*/
export const validateNewPassword = (password: string) => {
	const hasCapital = new RegExp("(?=.*?[A-Z])");
	const hasLowerCase = new RegExp("(?=.*?[a-z])");
	const hasDigit = new RegExp("(?=.*?[0-9])");
	const hasSpecial = new RegExp("(?=.*?[#?!@$%^&*-])");

	if (!hasCapital.test(password)) {
		return {
			error: "At least one capital letter required.",
			isValid: false,
		};
	}

	if (!hasLowerCase.test(password)) {
		return {
			error: "At least one lowercase letter required.",
			isValid: false,
		};
	}

	if (!hasDigit.test(password)) {
		return { error: "At least one number required.", isValid: false };
	}

	if (!hasSpecial.test(password)) {
		return {
			error: "At least one special character required. (!, @, #, $, %, ^, &, *, -)",
			isValid: false,
		};
	}

	if (password.length < 8) {
		return {
			error: "Password must be at least 8 characters long.",
			isValid: false,
		};
	}

	return { error: null, isValid: true };
};

/*
	params: (email: string)
	return type: boolean
	description: a Util function that check if an email is valid or not. returns true if email is valid and false if 
	it is invalid.
*/
export const validateEmail = (email: string) => {
	const re = /\S+@\S+\.\S+/;
	return re.test(email);
};
