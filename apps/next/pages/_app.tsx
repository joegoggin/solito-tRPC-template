import "raf/polyfill";

const fixReanimatedIssue = () => {
	// FIXME remove this once this reanimated fix gets released
	// https://github.com/software-mansion/react-native-reanimated/issues/3355
	if (process.browser) {
		// @ts-ignore
		window._frameTimestamp = null;
	}
};

fixReanimatedIssue();

import type { SolitoAppProps } from "solito";
import Head from "next/head";
import React from "react";

import { Provider } from "app/provider";
import "../app.css";

function MyApp({ Component, pageProps }: SolitoAppProps) {
	return (
		<>
			<Head>
				<title>Solito App With tRPC Template</title>
				<meta
					name="description"
					content="A template for a Solito app using tRPC with Next JS and Expo."
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Provider>
				<Component {...pageProps} />
			</Provider>
		</>
	);
}

export default MyApp;
