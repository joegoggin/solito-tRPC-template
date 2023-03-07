import { FaLock } from "react-icons/fa";
import React from "react";

import { IconProps } from "app/types/IconProps";

/*
    props: (size: string, color: string)
    description: Reusable component that renders a lock icon from 'react-icons' on Web.
*/
const LockIcon: React.FC<IconProps> = ({ size, color }) => {
	return <FaLock size={size} color={color} />;
};

export default LockIcon;
