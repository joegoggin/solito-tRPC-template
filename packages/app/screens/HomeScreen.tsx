import { Text, useSx, View, H1, P, Row, A, H3 } from "dripsy";
import { TextLink } from "solito/link";
import { MotiLink } from "solito/moti";
import { api } from "app/utils/trpc";

const HomeScreen: React.FC = () => {
	const { data } = api.hello.sayHi.useQuery();

	// styles
	const sx = useSx();

	const styles = {
		container: sx({
			flex: 1,
			justifyContent: "center",
			alignItems: "center",
			p: 16,
		}),
	};

	return (
		<View sx={styles.container}>
			<H1>Solito App with tRPC Template</H1>
			<H3>{data?.message}</H3>
		</View>
	);
};

export default HomeScreen;
