import { useSx, View, H1, H3 } from "dripsy";

import { api } from "app/utils/trpc";
import { Colors } from "app/constants/Colors";
import { useRouter } from "solito/router";
import Button from "app/components/UI/Button";
import Layout from "app/components/UI/Layout";
import { useColors } from "app/provider/context/ColorsContextProvider";

const HomeScreen: React.FC = () => {
	// context
	const { colors } = useColors();

	// queries
	const { data } = api.hello.sayHi.useQuery();

	// router
	const router = useRouter();

	// event handlers
	const handleSignUpNavigation = () => {
		router.push("/sign-up");
	};

	const handleSignInNavigation = () => {
		router.push("/sign-in");
	};

	// styles
	const sx = useSx();

	const styles = {
		title: sx({
			color: "green",
			textAlign: "center",
		}),
		message: sx({
			color: "brown",
			textAlign: "center",
		}),
		buttons: sx({
			flexDirection: "row",
			alignItems: "center",
			justifyContent: "space-evenly",
			width: ["100%", "100%", "50%"],
			marginTop: 50,
		}),
	};

	return (
		<Layout>
			<H1 sx={styles.title}>Solito App with tRPC Template</H1>
			<H3 sx={styles.message}>{data?.message}</H3>
			<View sx={styles.buttons}>
				<Button
					color={colors.blueDark}
					onPress={handleSignUpNavigation}
				>
					Sign Up
				</Button>
				<Button
					color={colors.blueLight}
					onPress={handleSignInNavigation}
				>
					Sign In
				</Button>
			</View>
		</Layout>
	);
};

export default HomeScreen;
