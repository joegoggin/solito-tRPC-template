import React from "react";

import SignUpScreen from "app/screens/auth/SignUpScreen";
import AuthPage from "next-app/components/AuthPage";

const signUpPage: React.FC = () => {
	return (
		<AuthPage>
			<SignUpScreen />
		</AuthPage>
	);
};

export default signUpPage;
