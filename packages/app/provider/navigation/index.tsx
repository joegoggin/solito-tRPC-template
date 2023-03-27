import * as Linking from "expo-linking";
import { LinkingOptions, NavigationContainer } from "@react-navigation/native";
import { useMemo, type ReactNode } from "react";

interface Screens {
	[key: string]: string;
}

type NavigationConfig = {
	auth: { screens: Screens };
};

export function NavigationProvider({ children }: { children: ReactNode }) {
	return (
		<NavigationContainer
			linking={useMemo(
				() =>
					({
						prefixes: [Linking.createURL("/")],
						config: {
							screens: {
								auth: {
									screens: {
										home: "",
										signIn: "sign-in",
										signUp: "sign-up",
									},
								},
								main: {
									screens: {
										dashboard: "dashboard",
										admin: "admin",
										settings: "settings",
									},
								},
							},
						},
					} as LinkingOptions<NavigationConfig>),
				[]
			)}
		>
			{children}
		</NavigationContainer>
	);
}
