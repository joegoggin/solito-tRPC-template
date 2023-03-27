import React from "react";

import { RoleEnum } from "server/models/enums/Role";
import { useUser } from "app/provider/context/UserContextProvider";
import { H2, Pressable, useSx, View } from "dripsy";
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavBar } from "app/provider/context/NarBarContexProvider";
import { useColors } from "app/provider/context/ColorsContextProvider";
import NavLink, { type NavLinkProps } from "app/components/UI/NavLink";
import CloseIcon from "app/components/icons/close/CloseIcon";
import DashboardIcon from "app/components/icons/dashboard/DashboardIcon";
import SettingsIcon from "app/components/icons/settings/SettingsIcon";
import { NavBarLink, NavBarLinks } from "app/constants/navBarLink";
import LockIcon from "app/components/icons/lock/LockIcon";

const NavBar: React.FC = () => {
	// context
	const { user, token } = useUser();
	const { showNav, toggleNav, activeLink } = useNavBar();
	const { colors } = useColors();

	// functions
	const getIconColor = (link: NavBarLink) => {
		if (activeLink === link) {
			return colors.green;
		}

		return colors.white;
	};

	// constants
	const iconSize = 25;

	let links: NavLinkProps[] = [];

	switch (user?.role) {
		case RoleEnum.enum.Admin:
			links = [
				{
					label: "Dashboard",
					route: "/dashboard",
					isActive: activeLink === NavBarLinks.Dashboard,
					icon: () => (
						<DashboardIcon
							size={iconSize}
							color={getIconColor(NavBarLinks.Dashboard)}
						/>
					),
				},
				{
					label: "Admin Only",
					route: "/admin",
					isActive: activeLink === NavBarLinks.AdminOnly,
					icon: () => (
						<LockIcon
							size={iconSize}
							color={getIconColor(NavBarLinks.AdminOnly)}
						/>
					),
				},
				{
					label: "Settings",
					route: "/settings",
					isActive: activeLink === NavBarLinks.Settings,
					icon: () => (
						<SettingsIcon
							size={iconSize}
							color={getIconColor(NavBarLinks.Settings)}
						/>
					),
				},
			];
			break;
		case RoleEnum.enum.User:
			links = [
				{
					label: "Dashboard",
					route: "/dashboard",
					isActive: activeLink === NavBarLinks.Dashboard,
					icon: () => (
						<DashboardIcon
							size={iconSize}
							color={getIconColor(NavBarLinks.Dashboard)}
						/>
					),
				},
				{
					label: "Settings",
					route: "/settings",
					isActive: activeLink === NavBarLinks.Settings,
					icon: () => (
						<SettingsIcon
							size={iconSize}
							color={getIconColor(NavBarLinks.Settings)}
						/>
					),
				},
			];
			break;
	}

	// styles
	const sx = useSx();

	const styles = {
		container: sx({
			backgroundColor: "brown",
			width: ["100%", "100%", "25%"],
		}),
		links: sx({
			paddingX: 5,
			marginBottom: [30, 30, 0],
		}),
		title: {
			...sx({
				color: "white",
				textAlign: "center",
			}),
			marginBottom: 4,
		},
		hamburgerButton: {
			...sx({
				backgroundColor: "white",
				paddingTop: 4,
				paddingLeft: 4,
			}),
		},
		closeButton: {
			marginLeft: "auto",
			paddingTop: 4,
			paddingRight: 4,
		},
	};

	return (
		<>
			{user && token && (
				<>
					{showNav ? (
						<View sx={styles.container}>
							<Pressable
								sx={styles.closeButton}
								onPress={toggleNav}
							>
								<CloseIcon size={30} color={colors.white} />
							</Pressable>
							<H2 sx={styles.title}>Milo Workroom</H2>
							<View sx={styles.links}>
								{links.map((link) => (
									<NavLink
										key={link.route}
										label={link.label}
										route={link.route}
										isActive={link.isActive}
										icon={link.icon}
									/>
								))}
							</View>
						</View>
					) : (
						<Pressable
							sx={styles.hamburgerButton}
							onPress={toggleNav}
						>
							<GiHamburgerMenu size={30} color={colors.brown} />
						</Pressable>
					)}
				</>
			)}
		</>
	);
};

export default NavBar;
