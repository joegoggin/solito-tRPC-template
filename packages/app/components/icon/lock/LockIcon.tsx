import { FontAwesome } from "@expo/vector-icons";
import React from "react";

import { IconProps } from "app/types/IconProps";

/*
    props: (size: string, color: string)
    description: Reusable component that renders a lock icon from '@expo/vector-icons' on Native.
*/
const LockIcon: React.FC<IconProps> = ({ size, color }) => {
	return <FontAwesome name="lock" size={size} color={color} />;
};

export default LockIcon;
