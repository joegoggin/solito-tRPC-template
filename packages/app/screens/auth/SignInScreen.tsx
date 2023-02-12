import { H1, useSx, View } from "dripsy";
import React, { useState } from "react";

import { handleChangeText } from "app/utils/handleChangeText";
import { Colors } from "app/constants/Colors";
import Layout from "app/components/UI/Layout";
import Form from "app/components/UI/Form";
import CustomTextInput from "app/components/UI/CustomTextInput";
import Button from "app/components/UI/Button";

const SignInScreen: React.FC = () => {
	// state
	const [username, setUsername] = useState<string>("");
	const [password, setPassword] = useState<string>("");

	// styles
	const sx = useSx();

	const styles = {
		title: sx({
			marginBottom: 30,
		}),
		username: sx({
			marginBottom: 20,
		}),
		password: sx({
			marginBottom: 60,
		}),
		buttonContainer: sx({
			justifyContent: "center",
			alignItems: "center",
		}),
		button: sx({
			width: "50%",
		}),
	};

	return (
		<Layout>
			<H1>Sign In</H1>
			<Form onSubmit={() => {}}>
				<CustomTextInput
					style={styles.username}
					placeholder="Username"
					value={username}
					onChangeText={handleChangeText(setUsername)}
				/>
				<CustomTextInput
					style={styles.password}
					placeholder="Password"
					value={password}
					onChangeText={handleChangeText(setPassword)}
					isPassword={true}
				/>
				<View style={styles.buttonContainer}>
					<Button
						style={styles.button}
						onPress={() => {}}
						color={Colors.blueDark}
					>
						Sign In
					</Button>
				</View>
			</Form>
		</Layout>
	);
};

export default SignInScreen;
