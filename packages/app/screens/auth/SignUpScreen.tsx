import CustomTextInput from "app/components/UI/CustomTextInput";
import Form from "app/components/UI/Form";
import Layout from "app/components/UI/Layout";
import { handleChangeText } from "app/utils/handleChangeText";
import { H1, useSx, View } from "dripsy";
import React, { useState } from "react";
import { Colors } from "app/constants/Colors";
import Button from "app/components/UI/Button";

const SignUpScreen: React.FC = () => {
	// state
	const [fName, setFName] = useState<string>("");
	const [lName, setLName] = useState<string>("");
	const [username, setUsername] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [confirm, setConfirm] = useState<string>("");

	// styles
	const sx = useSx();

	const styles = {
		title: sx({
			marginBottom: 30,
		}),
		inputContainer: sx({
			marginBottom: 60,
		}),
		input: sx({
			marginBottom: 20,
		}),
		nameContainer: sx({
			flexDirection: "row",
			marginBottom: 20,
		}),
		name: sx({
			width: "40%",
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
			<H1>Sign Up</H1>
			<Form onSubmit={() => {}}>
				<View style={styles.inputContainer}>
					<View sx={styles.nameContainer}>
						<CustomTextInput
							style={{ ...styles.name, marginRight: "10%" }}
							placeholder="First Name"
							value={fName}
							onChangeText={handleChangeText(setFName)}
						/>
						<CustomTextInput
							style={styles.name}
							placeholder="Last Name"
							value={lName}
							onChangeText={handleChangeText(setLName)}
						/>
					</View>
					<CustomTextInput
						style={styles.input}
						placeholder="Username"
						value={username}
						onChangeText={handleChangeText(setUsername)}
					/>
					<CustomTextInput
						style={styles.input}
						placeholder="Password"
						value={password}
						onChangeText={handleChangeText(setPassword)}
					/>
					<CustomTextInput
						placeholder="Confirm Password"
						value={confirm}
						onChangeText={handleChangeText(setConfirm)}
					/>
				</View>
				<View style={styles.buttonContainer}>
					<Button
						style={styles.button}
						onPress={() => {}}
						color={Colors.blueDark}
					>
						Sign Up
					</Button>
				</View>
			</Form>
		</Layout>
	);
};

export default SignUpScreen;
