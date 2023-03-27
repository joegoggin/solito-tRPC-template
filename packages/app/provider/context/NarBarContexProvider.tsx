import { createContext, ReactNode, useContext, useState } from "react";

import { NavBarLink } from "app/constants/navBarLink";

type NavBarContext = {
	activeLink: NavBarLink | null;
	showNav: boolean;
	toggleNav: () => void;
	setActiveLink: (link: NavBarLink) => void;
};

const NavBarCtx = createContext<NavBarContext>({
	activeLink: null,
	showNav: false,
	toggleNav: () => {},
	setActiveLink: (route: string) => {},
});

export const useNavBar = () => useContext(NavBarCtx);

const NavBarContextProvider: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	const [activeLink, setActiveLink] = useState<NavBarLink | null>(null);
	const [showNav, setShowNav] = useState<boolean>(false);

	const toggleNav = () => {
		setShowNav(!showNav);
	};

	return (
		<NavBarCtx.Provider
			value={{ activeLink, showNav, toggleNav, setActiveLink }}
		>
			{children}
		</NavBarCtx.Provider>
	);
};

export default NavBarContextProvider;
