import { MaterialIcons } from "@expo/vector-icons";
import React from "react";

import { IconProps } from "app/types/IconProps";

/*
    props: (size: string, color: string)
    description: Reusable component that renders a settings icon from '@expo/vector-icons' on Native.
*/
const SettingsIcon: React.FC<IconProps> = ({ size, color }) => {
	return <MaterialIcons name="settings" size={size} color={color} />;
};

export default SettingsIcon;
