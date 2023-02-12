export const handleChangeText =
	(setState: (state: any) => void) => (enteredText: string) => {
		setState(enteredText);
	};
