import Layout from "app/components/UI/Layout";
import Setting from "app/components/UI/Setting";
import StatusMessages from "app/components/UI/StatusMessages";
import { NavBarLinks } from "app/constants/navBarLink";
import { themeSettingsOptions } from "app/constants/options";
import { OptionTypes } from "app/constants/optionType";
import { useNavBar } from "app/provider/context/NarBarContexProvider";
import { useSettings } from "app/provider/context/SettingsContextProvider";
import { H1, useSx, View } from "dripsy";
import React, { useEffect } from "react";

const SettingsScreen: React.FC = () => {
	// context
	const { isDarkTheme, setIsDarkTheme } = useSettings();
	const { setActiveLink } = useNavBar();

	// effects
	useEffect(() => {
		setActiveLink(NavBarLinks.Settings);
	}, []); // eslint-disable-line

	// styles
	const sx = useSx();

	const styles = {
		container: sx({
			flex: 1,
			padding: 10,
			alignItems: "center",
			width: "100%",
		}),
		settings: sx({
			width: "100%",
			marginBottom: 50,
		}),
	};

	return (
		<Layout>
			<View sx={styles.container}>
				<H1>Settings</H1>
				<StatusMessages />
				<View sx={styles.settings}>
					<Setting
						title="Theme"
						description="Pick a Theme:"
						options={themeSettingsOptions}
						optionType={OptionTypes.Boolean}
						value={isDarkTheme}
						setValue={setIsDarkTheme}
					/>
				</View>
			</View>
		</Layout>
	);
};

export default SettingsScreen;
