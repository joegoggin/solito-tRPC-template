import { AiFillCaretDown } from "react-icons/ai";
import React from "react";

import { IconProps } from "app/types/IconProps";

/*
    props: (size: string, color: string)
    description: Reusable component that renders a caret down icon from 'react-icons' on Web.
*/
const CaretDownIcon: React.FC<IconProps> = ({ size, color }) => {
	return <AiFillCaretDown size={size} color={color} />;
};

export default CaretDownIcon;
