import { AntDesign } from "@expo/vector-icons";
import React from "react";

import { IconProps } from "app/types/IconProps";

/*
	props: (size: string, color: string)
	description: Reusable component that renders a close icon from "@expo/vector-icons" on Native.
*/
const CloseIcon: React.FC<IconProps> = ({ size, color }) => {
	return <AntDesign name="close" size={size} color={color} />;
};

export default CloseIcon;
