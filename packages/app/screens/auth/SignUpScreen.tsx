import { H1, useSx, View } from "dripsy";
import React, { useState } from "react";

import { handleChangeText } from "app/utils/handleChangeText";
import { Colors } from "app/constants/Colors";
import { api } from "app/utils/trpc";
import { useStatus } from "app/provider/context/StatusContextProvider";
import { onError } from "app/utils/onError";
import { useUser } from "app/provider/context/UserContextProvider";
import { RoleEnum } from "server/models/enums/Role";
import { capitalize } from "app/utils/capitalize";
import Button from "app/components/UI/Button";
import StatusMessages from "app/components/UI/StatusMessages";
import CustomTextInput from "app/components/UI/CustomTextInput";
import Form from "app/components/UI/Form";
import Layout from "app/components/UI/Layout";

const SignUpScreen: React.FC = () => {
	// state
	const [fName, setFName] = useState<string>("");
	const [lName, setLName] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [confirm, setConfirm] = useState<string>("");

	// context
	const { setLoading, setError } = useStatus();
	const { setUserData } = useUser();

	// mutation
	const createUser = api.user.createUser.useMutation({
		onError: onError(setError),
	});
	const signIn = api.auth.signIn.useMutation({
		onError: onError(setError),
	});

	// event handlers
	const handleSignUp = async () => {
		setLoading(true);

		try {
			const { user } = await createUser.mutateAsync({
				fName: capitalize(fName),
				lName: capitalize(lName),
				email,
				password,
				confirm,
				role: RoleEnum.enum.User,
				settings: { isDarkTheme: false },
			});

			if (user) {
				const { userId, token } = await signIn.mutateAsync({
					email,
					password,
				});

				if (userId && token) {
					setUserData(userId, token);
				}
			}
		} catch {
			setLoading(false);
		}
	};

	// styles
	const sx = useSx();

	const styles = {
		containter: sx({
			justifyContent: "center",
			alignItems: "center",
		}),
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
			width: "45%",
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
			<View sx={styles.containter}>
				<H1>Sign Up</H1>
				<StatusMessages />
				<Form onSubmit={handleSignUp}>
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
							placeholder="Email"
							value={email}
							onChangeText={handleChangeText(setEmail)}
						/>
						<CustomTextInput
							style={styles.input}
							placeholder="Password"
							value={password}
							onChangeText={handleChangeText(setPassword)}
							isPassword={true}
						/>
						<CustomTextInput
							placeholder="Confirm Password"
							value={confirm}
							onChangeText={handleChangeText(setConfirm)}
							isPassword={true}
						/>
					</View>
					<View style={styles.buttonContainer}>
						<Button
							style={styles.button}
							onPress={handleSignUp}
							color={Colors.blueDark}
						>
							Sign Up
						</Button>
					</View>
				</Form>
			</View>
		</Layout>
	);
};

export default SignUpScreen;
