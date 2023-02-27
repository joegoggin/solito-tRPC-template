import React from "react";

import { RoleEnum } from "server/models/enums/Role";
import AdminOnlyScreen from "app/screens/admin/AdminOnlyScreen";
import PrivatePage from "next-app/components/PrivatePage";

const AdminOnlyPage: React.FC = () => {
	return (
		<PrivatePage role={RoleEnum.enum.Admin}>
			<AdminOnlyScreen />
		</PrivatePage>
	);
};

export default AdminOnlyPage;
