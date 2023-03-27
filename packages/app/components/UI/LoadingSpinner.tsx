import { useSx, ActivityIndicator, View, H1 } from "dripsy";
import React from "react";

import Layout from "./Layout";

type LoadingSpinnerProps = {
	color: string;
	size: "small" | "large";
};

/*
	props: (color: string, size: "small" | "large")
	description: Reusable component that renders a custom styled loading spinner.
*/
const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ color, size }) => {
	// styles
	const sx = useSx();

	const styles = {
		loading: sx({
			flex: 1,
			flexDirection: "row",
			justifyContent: "center",
			alignItems: "center",
		}),
		loadingAnimation: sx({
			marginRight: 20,
		}),
		loadingText: sx({
			fontSize: 40,
			fontWeight: "bold",
		}),
	};
	return (
		<Layout>
			<View sx={styles.loading}>
				<ActivityIndicator
					sx={styles.loadingAnimation}
					color={color}
					size={size}
				/>
				<H1 sx={styles.loadingText}>Loading . . .</H1>
			</View>
		</Layout>
	);
};

export default LoadingSpinner;
