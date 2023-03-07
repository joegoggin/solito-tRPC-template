import { MdDashboard } from "react-icons/md";
import React from "react";

import { type IconProps } from "app/types/IconProps";

/*
	props: (size: string, color: string)
	description: Reusable component that renders a dashboard icon from "react-icons" on Web.
*/
const DashboardIcon: React.FC<IconProps> = ({ size, color }) => {
	return <MdDashboard size={size} color={color} />;
};

export default DashboardIcon;
