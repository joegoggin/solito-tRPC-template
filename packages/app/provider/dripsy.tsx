import { DripsyProvider, makeTheme } from "dripsy";

import { Colors } from "app/constants/Colors";

const theme = makeTheme({
	// https://www.dripsy.xyz/usage/theming/create
	colors: {
		blueDark: Colors.blueDark,
		blueLight: Colors.blueLight,
		white: Colors.white,
		brown: Colors.brown,
		green: Colors.green,
	},
	text: {
		h1: {
			color: Colors.green,
		},
		h3: {
			color: Colors.brown,
		},
		p: {
			fontSize: 16,
			color: Colors.brown,
		},
	},
});

export function Dripsy({ children }: { children: React.ReactNode }) {
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
