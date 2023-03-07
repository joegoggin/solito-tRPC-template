import { IoMdSettings } from "react-icons/io";
import React from "react";

import { IconProps } from "app/types/IconProps";

/*
    props: (size: string, color: string)
    description: Reusable component that renders a settings icon from 'react-icons' on Web.
*/
const SettingsIcon: React.FC<IconProps> = ({ size, color }) => {
	return <IoMdSettings size={size} color={color} />;
};

export default SettingsIcon;
