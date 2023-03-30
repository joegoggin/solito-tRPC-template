import { H1, useSx, View } from "dripsy";
import React, { useState } from "react";

import { handleChangeText } from "app/utils/handleChangeText";
import Layout from "app/components/UI/Layout";
import Form from "app/components/UI/Form";
import CustomTextInput from "app/components/UI/CustomTextInput";
import Button from "app/components/UI/Button";
import { api } from "app/utils/trpc";
import { onError } from "app/utils/onError";
import { useStatus } from "app/provider/context/StatusContextProvider";
import { useUser } from "app/provider/context/UserContextProvider";
import StatusMessages from "app/components/UI/StatusMessages";
import { useColors } from "app/provider/context/ColorsContextProvider";

const SignInScreen: React.FC = () => {
	// state
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");

	// context
	const { setLoading, setError } = useStatus();
	const { setUserData } = useUser();
	const { colors } = useColors();

	// mutations
	const signIn = api.auth.signIn.useMutation({
		onError: onError(setError),
	});

	// event handlers
	const handleSignIn = async () => {
		setLoading(true);

		try {
			const { userId, token } = await signIn.mutateAsync({
				email,
				password,
			});

			if (userId && token) {
				setUserData(userId, token);
			}
		} catch {
			setLoading(false);
		}
	};

	// styles
	const sx = useSx();

	const styles = {
		container: sx({
			justifyContent: "center",
			alignItems: "center",
		}),
		title: sx({
			marginBottom: 30,
		}),
		email: sx({
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
			<View sx={styles.container}>
				<H1>Sign In</H1>
				<Form onSubmit={handleSignIn}>
					<StatusMessages />
					<CustomTextInput
						style={styles.email}
						placeholder="Email"
						value={email}
						onChangeText={handleChangeText(setEmail)}
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
							onPress={handleSignIn}
							color={colors.blueDark}
						>
							Sign In
						</Button>
					</View>
				</Form>
			</View>
		</Layout>
	);
};

export default SignInScreen;
