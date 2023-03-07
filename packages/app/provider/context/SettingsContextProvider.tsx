import { api } from "app/utils/trpc";
import {
	createContext,
	ReactNode,
	useContext,
	useEffect,
	useState,
} from "react";
import { useStatus } from "./StatusContextProvider";
import { useUser } from "./UserContextProvider";
import { User } from "server/models/User";
import { Settings } from "server/models/Settings";

type SettingsContext = {
	isDarkTheme: boolean;
	isInit: boolean;
	setIsDarkTheme: (isDarkTheme: boolean) => void;
	updateSettings: () => void;
	setToDefaults: () => void;
};

const SettingsCtx = createContext<SettingsContext>({
	isDarkTheme: false,
	isInit: false,
	setIsDarkTheme: () => {},
	updateSettings: () => {},
	setToDefaults: () => {},
});

export const useSettings = () => useContext(SettingsCtx);

const SettingsContextProvider: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	// state
	const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);
	const [isInit, setIsInit] = useState<boolean>(false);

	// context
	const { user, setUser } = useUser();
	const { setLoading, setSuccess } = useStatus();

	// mutations
	const updateUser = api.user.updateUser.useMutation();

	// effects
	useEffect(() => {
		if (!user?.settings) {
			updateSettings();
		}
	}, []); // eslint-disable-line

	useEffect(() => {
		setLoading(true);

		setToDefaults();

		if (user) setIsInit(true);

		setLoading(false);
	}, [user?.settings]); // eslint-disable-line

	const updateSettings = async () => {
		setLoading(true);

		if (user) {
			const settings = {
				isDarkTheme,
			};

			if (
				JSON.stringify(user?.settings) === JSON.stringify(settings) ||
				!isInit
			) {
				setLoading(false);
				return;
			}

			try {
				if (user?.id) {
					const isUpdated = await updateUser.mutateAsync({
						userId: user.id,
						data: { settings },
					});

					if (isUpdated) {
						const updatedUser = { ...user, settings } as User;

						setLoading(false);
						setUser(updatedUser);
						setSuccess("Settings Updated!");
					}
				}
			} catch (error) {
				throw error;
			}
		}

		setLoading(false);
	};

	const setToDefaults = () => {
		setIsDarkTheme(false);

		if (user?.settings) {
			const settings = user.settings as Settings;

			if (settings.isDarkTheme) setIsDarkTheme(settings.isDarkTheme);
		}
	};

	return (
		<SettingsCtx.Provider
			value={{
				isDarkTheme,
				isInit,
				setIsDarkTheme,
				updateSettings,
				setToDefaults,
			}}
		>
			{children}
		</SettingsCtx.Provider>
	);
};

export default SettingsContextProvider;
