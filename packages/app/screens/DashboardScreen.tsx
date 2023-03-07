import { H1, Text, useSx, View } from "dripsy";

import { useUser } from "app/provider/context/UserContextProvider";
import { Colors } from "app/constants/Colors";
import Layout from "app/components/UI/Layout";
import Button from "app/components/UI/Button";
import { useColors } from "app/provider/context/ColorsContextProvider";
import { useNavBar } from "app/provider/context/NarBarContexProvider";
import { useEffect } from "react";
import { NavBarLinks } from "app/constants/navBarLink";

const DashboardScreen: React.FC = () => {
	// context
	const { user, clearUserData } = useUser();
	const { colors } = useColors();
	const { setActiveLink } = useNavBar();

	// effects
	useEffect(() => {
		setActiveLink(NavBarLinks.Dashboard);
	}, []); // eslint-disable-line

	// styles
	const sx = useSx();

	const styles = {
		infoContainer: sx({
			marginBottom: 20,
			justifyContent: "center",
			alignItems: "center",
		}),
		textContainer: sx({
			flexDirection: "row",
			marginBottom: 10,
		}),
		key: sx({
			marginRight: 10,
			color: "green",
			fontSize: 16,
			fontWeight: "bold",
		}),
		value: sx({
			color: "brown",
			fontSize: 16,
		}),
	};

	return (
		<Layout>
			<View>
				<H1>Welcome {user?.fName}!</H1>
				<View style={styles.infoContainer}>
					<View sx={styles.textContainer}>
						<Text sx={styles.key}>First Name:</Text>
						<Text sx={styles.value}>{user?.fName}</Text>
					</View>
					<View sx={styles.textContainer}>
						<Text sx={styles.key}>Last Name:</Text>
						<Text sx={styles.value}>{user?.lName}</Text>
					</View>
					<View sx={styles.textContainer}>
						<Text sx={styles.key}>Email:</Text>
						<Text sx={styles.value}>{user?.email}</Text>
					</View>
					<View sx={styles.textContainer}>
						<Text sx={styles.key}>Role:</Text>
						<Text sx={styles.value}>{user?.role}</Text>
					</View>
				</View>
				<Button
					style={{ alignSelf: "center" }}
					color={colors.brown}
					onPress={clearUserData}
				>
					Sign Out
				</Button>
			</View>
		</Layout>
	);
};

export default DashboardScreen;
