import React from "react";

import { H1 } from "dripsy";
import Layout from "app/components/UI/Layout";

const AdminOnlyScreen: React.FC = () => {
	return (
		<Layout>
			<H1>This Screen Is For Admins Only!</H1>
		</Layout>
	);
};

export default AdminOnlyScreen;
