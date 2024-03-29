import React, { useEffect } from "react";

import { H1 } from "dripsy";
import { useNavBar } from "app/provider/context/NarBarContexProvider";
import { NavBarLinks } from "app/constants/navBarLink";
import Layout from "app/components/UI/Layout";

const AdminOnlyScreen: React.FC = () => {
	// context
	const { setActiveLink } = useNavBar();

	// effect
	useEffect(() => {
		setActiveLink(NavBarLinks.AdminOnly);
	}, []); // eslint-disable-line

	return (
		<Layout>
			<H1>This Screen Is For Admins Only!</H1>
		</Layout>
	);
};

export default AdminOnlyScreen;
