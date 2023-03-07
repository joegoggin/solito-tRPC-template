import { DripsyProvider, makeTheme, Theme } from "dripsy";
import { useEffect, useState } from "react";
import { useColors } from "./context/ColorsContextProvider";

export function Dripsy({ children }: { children: React.ReactNode }) {
	// context
	const { colors } = useColors();

	const [theme, setTheme] = useState<Theme>(
		makeTheme({
			colors: {
				blueDark: colors.blueDark,
				white: colors.white,
				brown: colors.brown,
				green: colors.green,
				greenLight: colors.greenLight,
				red: colors.red,
			},
			text: {
				h1: {
					color: "brown",
					textAlign: "center",
				},
				h2: {
					color: "green",
				},
				h3: {
					color: "brown",
				},
				p: {
					fontSize: 16,
					color: "brown",
				},
			},
		})
	);

	useEffect(() => {
		setTheme((prev) => {
			return {
				...prev,
				colors: {
					blueDark: colors.blueDark,
					white: colors.white,
					brown: colors.brown,
					green: colors.green,
					greenLight: colors.greenLight,
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
