import React from "react";

import DashboardScreen from "app/screens/DashboardScreen";
import PrivatePage from "next-app/components/PrivatePage";

const DashboardPage: React.FC = () => {
	return (
		<PrivatePage role="All">
			<DashboardScreen />
		</PrivatePage>
	);
};

export default DashboardPage;
