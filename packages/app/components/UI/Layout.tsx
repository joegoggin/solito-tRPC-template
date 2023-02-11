import { useSx, View } from "dripsy";
import React, { type ReactNode } from "react";

interface LayoutProps {
	children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	const sx = useSx();

	const styles = {
		container: sx({
			flex: 1,
			justifyContent: "center",
			alignItems: "center",
			backgroundColor: "white",
			p: 16,
		}),
	};

	return <View sx={styles.container}>{children}</View>;
};

export default Layout;
