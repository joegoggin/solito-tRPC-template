import { MaterialIcons } from "@expo/vector-icons";
import React from "react";

import { type IconProps } from "app/types/IconProps";

/*
	props: (size: string, color: string)
	description: Reusable component that renders a dashboard icon from "@expo/vector-icons" on Native.
*/
const DashboardIcon: React.FC<IconProps> = ({ size, color }) => {
	return <MaterialIcons name="dashboard" size={size} color={color} />;
};

export default DashboardIcon;
