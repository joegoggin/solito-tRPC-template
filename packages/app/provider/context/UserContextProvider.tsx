import {
	createContext,
	useContext,
	useEffect,
	useState,
	type ReactNode,
} from "react";

import {
	clearLocalUserData,
	getLocalUserData,
	storeUserDataLocally,
} from "app/utils/localstorage";
import { User } from "server/models/User";
import { api } from "app/utils/trpc";
import { useStatus } from "./StatusContextProvider";
import { setAuthToken } from "../trpc/TRPCProvider";

interface UserContext {
	user: Partial<User> | null;
	token: string | null;
	isInit: boolean;
	setUser: (user: User) => void;
	setUserData: (userId: string, token: string) => void;
	clearUserData: () => void;
}

const UserCtx = createContext<UserContext>({
	user: null,
	token: null,
	isInit: false,
	setUser: () => {},
	setUserData: () => {},
	clearUserData: () => {},
});

export const useUser = () => useContext(UserCtx);

const UserContextProvider: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	// state
	const [user, setUser] = useState<Partial<User> | null>(null);
	const [token, setToken] = useState<string | null>(null);
	const [userId, setUserId] = useState<string | null>(null);
	const [isInit, setIsInit] = useState<boolean>(false);

	// context
	const { setLoading } = useStatus();

	// queries
	const { data, error } = api.user.getUser.useQuery({ id: userId });

	// functions
	const setUserData = (userId: string, token: string) => {
		setUserId(userId);
		setToken(token);
		setAuthToken(token);
		storeUserDataLocally(userId, token);
	};

	const clearUserData = () => {
		setUserId(null);
		setToken(null);
		setUser(null);
		clearLocalUserData();
	};

	// effects
	useEffect(() => {
		const init = async () => {
			try {
				setLoading(true);

				const userData = await getLocalUserData();

				if (userData.userId && userData.token) {
					setUserId(userData.userId);
					setToken(userData.token);
					setAuthToken(userData.token);
				} else {
					setIsInit(true);
				}
			} catch (error) {
				console.log(error);
			}

			setLoading(false);
		};

		init();
	}, []); // eslint-disable-line

	useEffect(() => {
		if (data) {
			setUser(data as Partial<User>);
			setIsInit(true);
		}
	}, [data]);

	useEffect(() => {
		if (error?.data?.httpStatus === 404) {
			clearUserData();
			setIsInit(true);
		}
	}, [error]);

	return (
		<UserCtx.Provider
			value={{
				user,
				token,
				isInit,
				setUser,
				setUserData,
				clearUserData,
			}}
		>
			{children}
		</UserCtx.Provider>
	);
};

export default UserContextProvider;
