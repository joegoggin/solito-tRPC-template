import { useSx, View, H1, H3 } from "dripsy";

import { api } from "app/utils/trpc";
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
		container: sx({
			justifyContent: "center",
			alignItems: "center",
		}),
		title: sx({
			color: "primary",
			textAlign: "center",
		}),
		message: sx({
			color: "dark",
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
			<View sx={styles.container}>
				<H1 sx={styles.title}>Solito App with tRPC Template</H1>
				<H3 sx={styles.message}>{data?.message}</H3>
				<View sx={styles.buttons}>
					<Button
						color={colors.primary}
						onPress={handleSignUpNavigation}
					>
						Sign Up
					</Button>
					<Button
						color={colors.dark}
						onPress={handleSignInNavigation}
					>
						Sign In
					</Button>
				</View>
			</View>
		</Layout>
	);
};

export default HomeScreen;
