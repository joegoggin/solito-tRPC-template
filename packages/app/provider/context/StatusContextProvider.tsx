import {
	createContext,
	ReactNode,
	useContext,
	useEffect,
	useState,
} from "react";

type StatusContext = {
	loading: boolean;
	error: string | null;
	success: string | null;
	setLoading: (loading: boolean) => void;
	setError: (error: string | null) => void;
	setSuccess: (success: string | null) => void;
	clearStatus: () => void;
};

const StatusCtx = createContext<StatusContext>({
	loading: false,
	error: null,
	success: null,
	setLoading: (loading: boolean) => {},
	setError: (error: string | null) => {},
	setSuccess: (success: string | null) => {},
	clearStatus: () => {},
});

export const useStatus = () => useContext(StatusCtx);

const StatusContextProvider: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | null>(null);
	const [success, setSuccess] = useState<string | null>(null);

	/*
		dependencies: [loading]
		description: useEffect hook that sets 'error' and 'success' to null if 
		loading is true.
	*/
	useEffect(() => {
		if (loading) {
			setError(null);
			setSuccess(null);
		}
	}, [loading]);

	/*
		dependencies: [error, success]
		description: resets 'error' and 'success' to null 3 seconds after they are
		changed to a string.
	*/
	useEffect(() => {
		if (error || success) {
			const timer = setTimeout(() => {
				setError(null);
				setSuccess(null);
			}, 3000);

			return () => clearTimeout(timer);
		}
	}, [error, success]);

	// functions
	/*
		params: ()
		return type: void
		description: resets 'loading', 'error', and 'success' to their inital values.
	*/
	const clearStatus = () => {
		setLoading(false);
		setError(null);
		setSuccess(null);
	};

	return (
		<StatusCtx.Provider
			value={{
				loading,
				error,
				success,
				setLoading,
				setError,
				setSuccess,
				clearStatus,
			}}
		>
			{children}
		</StatusCtx.Provider>
	);
};

export default StatusContextProvider;
