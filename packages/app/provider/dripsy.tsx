import { DripsyProvider, makeTheme, Theme } from "dripsy";
import { useEffect, useState } from "react";
import { useColors } from "./context/ColorsContextProvider";

export function Dripsy({ children }: { children: React.ReactNode }) {
	// context
	const { colors } = useColors();

	const [theme, setTheme] = useState<Theme>(
		makeTheme({
			colors: {
				primary: colors.primary,
				light: colors.light,
				dark: colors.dark,
				green: colors.green,
				red: colors.red,
			},
			text: {
				h1: {
					color: "dark",
					textAlign: "center",
				},
				h2: {
					color: "primary",
				},
				h3: {
					color: "dark",
				},
				p: {
					fontSize: 16,
					color: "dark",
				},
			},
		})
	);

	useEffect(() => {
		setTheme((prev) => {
			return {
				...prev,
				colors: {
					primary: colors.primary,
					light: colors.light,
					dark: colors.dark,
					green: colors.green,
					red: colors.red,
				},
			};
		});
	}, [colors]);

	return (
		<DripsyProvider
			theme={theme}
			// this disables SSR, since react-native-web doesn't have support for it (yet)
			ssr
		>
			{children}
		</DripsyProvider>
	);
}
