import Layout from "app/components/UI/Layout";
import { H1 } from "dripsy";
import React from "react";

interface SignInScreenProps {}

const SignInScreen: React.FC<SignInScreenProps> = () => {
	return (
		<Layout>
			<H1>Sign In</H1>
		</Layout>
	);
};

export default SignInScreen;
