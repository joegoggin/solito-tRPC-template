import React from "react";

import SettingsScreen from "app/screens/SettingsScreen";
import PrivatePage from "next-app/components/PrivatePage";

const SettingsPage: React.FC = () => {
	return (
		<PrivatePage role="All">
			<SettingsScreen />
		</PrivatePage>
	);
};

export default SettingsPage;
