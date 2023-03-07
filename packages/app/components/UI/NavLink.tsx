import { Link } from "solito/link";
import { SxProp, Text, useSx, View } from "dripsy";
import React, { ReactElement } from "react";

export type NavLinkProps = {
	label: string;
	route: string;
	isActive: boolean;
	icon: () => ReactElement;
	style?: SxProp;
};

/*
	props: (label: string, route: string, isActive: boolean, icon: () => ReactElement, style?: SxProp)
	description: A reusable component that renders a Link with an icon and label that is intended to be used
	in the Navigation that only exists on web
*/
const NavLink: React.FC<NavLinkProps> = ({ label, route, isActive, icon }) => {
	// styles
	const sx = useSx();

	const styles = {
		container: {
			marginBottom: 3,
		},
		linkContainer: sx({
			flexDirection: "row",
			alignItems: "center",
		}),
		text: {
			...sx({
				color: isActive ? "green" : "white",
				fontSize: 20,
			}),
			marginLeft: 2,
		},
	};

	return (
		<View sx={styles.container}>
			<Link href={route}>
				<View sx={styles.linkContainer}>
					{icon()}
					<Text sx={styles.text}>{label}</Text>
				</View>
			</Link>
		</View>
	);
};

export default NavLink;
