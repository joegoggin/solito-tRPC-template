export const onError =
	(setError: (error: string | null) => void) =>
	(error: { message: string }) => {
		setError(error.message);
	};
