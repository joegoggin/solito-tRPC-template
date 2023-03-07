export const NavBarLinks = {
	Dashboard: "Dashboard",
	Settings: "Settings",
	AdminOnly: "AdminOnly",
} as const;

export type NavBarLink = typeof NavBarLinks[keyof typeof NavBarLinks];
