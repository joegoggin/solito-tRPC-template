import SignInScreen from "app/screens/auth/SignInScreen";
import AuthPage from "next-app/components/AuthPage";

const SignInPage = () => {
	return (
		<AuthPage>
			<SignInScreen />
		</AuthPage>
	);
};

export default SignInPage;
