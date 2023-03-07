import { AiOutlineClose } from "react-icons/ai";
import React from "react";

import { IconProps } from "app/types/IconProps";

/*
	props: (size: string, color: string)
	description: Reusable component that renders a close icon from "react-icons" on Web.
*/
const CloseIcon: React.FC<IconProps> = ({ size, color }) => {
	return <AiOutlineClose size={size} color={color} />;
};

export default CloseIcon;
