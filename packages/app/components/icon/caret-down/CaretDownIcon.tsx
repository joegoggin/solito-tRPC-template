import { AntDesign } from "@expo/vector-icons";
import React from "react";

import { IconProps } from "app/types/IconProps";

/*
    props: (size: string, color: string)
    description: Reusable component that renders a caret down icon from '@expo/vector-icons' on Native.
*/
const CaretDownIcon: React.FC<IconProps> = ({ size, color }) => {
	return <AntDesign name="caretdown" size={size} color={color} />;
};

export default CaretDownIcon;
