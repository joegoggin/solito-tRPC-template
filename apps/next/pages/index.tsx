import React from "react";

import HomeScreen from "app/screens/HomeScreen";
import AuthPage from "../components/AuthPage";

const HomePage: React.FC = () => {
	return (
		<AuthPage>
			<HomeScreen />
		</AuthPage>
	);
};

export default HomePage;
