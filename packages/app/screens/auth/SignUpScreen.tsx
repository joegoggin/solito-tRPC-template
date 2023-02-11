import Layout from "app/components/UI/Layout";
import { H1 } from "dripsy";
import React from "react";

interface SignUpScreenProps {}

const SignUpScreen: React.FC<SignUpScreenProps> = () => {
	return (
		<Layout>
			<H1>Sign Up</H1>
		</Layout>
	);
};

export default SignUpScreen;
