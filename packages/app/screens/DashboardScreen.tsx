import { H1, Text, useSx, View } from "dripsy";

import { useUser } from "app/provider/context/UserContextProvider";
import Layout from "app/components/UI/Layout";

/*
 ** TODO **
 ** add sign out []
 ** handle routing on native []
 */

const Dashboard: React.FC = () => {
	// context
	const { user } = useUser();

	// styles
	const sx = useSx();

	const styles = {
		textContainer: sx({
			flexDirection: "row",
			alignSelf: "flex-start",
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
			<H1>Welcome {user?.fName}!</H1>
			<View>
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
		</Layout>
	);
};

export default Dashboard;
