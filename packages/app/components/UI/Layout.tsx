import { useColors } from "app/provider/context/ColorsContextProvider";
import { useStatus } from "app/provider/context/StatusContextProvider";
import { Platform } from "react-native";
import {
	ActivityIndicator,
	H1,
	SafeAreaView,
	ScrollView,
	useSx,
	View,
} from "dripsy";
import React, { type ReactNode } from "react";

import NavBar from "app/navigation/web/NavBar";

type LayoutProps = {
	children: ReactNode;
	isScrollable?: boolean;
};

const Layout: React.FC<LayoutProps> = ({ children, isScrollable = true }) => {
	// context
	const { loading } = useStatus();
	const { colors } = useColors();

	// styles
	const sx = useSx();

	const styles = {
		root: sx({
			flex: 1,
			flexDirection: ["column", "column", "row"],
		}),
		layout: sx({
			flex: 1,
			backgroundColor: "white",
		}),
		container: sx({
			flexGrow: 1,
			justifyContent: "center",
		}),
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

	const content = () => (
		<>
			{!loading ? (
				children
			) : (
				<View sx={styles.loading}>
					<ActivityIndicator
						sx={styles.loadingAnimation}
						color={colors.green}
						size="large"
					/>
					<H1 sx={styles.loadingText}>Loading . . .</H1>
				</View>
			)}
		</>
	);

	return (
		<View sx={styles.root}>
			{Platform.OS === "web" && <NavBar />}
			<SafeAreaView sx={styles.layout}>
				{isScrollable ? (
					<ScrollView
						contentContainerStyle={styles.container}
						href={undefined}
						hrefAttrs={undefined}
						stickyHeaderHiddenOnScroll={undefined}
						StickyHeaderComponent={undefined}
						onClick={undefined}
						automaticallyAdjustsScrollIndicatorInsets={undefined}
						accessibilityLabelledBy={undefined}
						accessibilityLanguage={undefined}
						automaticallyAdjustKeyboardInsets={undefined}
					>
						{content()}
					</ScrollView>
				) : (
					<View sx={styles.container}>{content()}</View>
				)}
			</SafeAreaView>
		</View>
	);
};

export default Layout;
