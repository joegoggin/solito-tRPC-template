import { H2, Text, useSx, View } from "dripsy";
import { Platform } from "react-native";
import React, { useEffect } from "react";

import { type Option } from "app/types/Option";
import { type OptionType } from "app/constants/optionType";
import { useSettings } from "app/provider/context/SettingsContextProvider";
import CustomPicker from "./picker/CustomPicker";

type SettingProps = {
	title: string;
	description: string;
	options: Option[];
	optionType: OptionType;
	value: any;
	setValue: (value: any) => void;
};

/*
	props: (title: string, description: string, options: Option[], optionType: OptionType, value: any, setValue(value: any) => void)
	description: A reuseable component that renders a styled title and a CustomPicker
*/
const Setting: React.FC<SettingProps> = ({
	title,
	description,
	options,
	optionType,
	value,
	setValue,
}) => {
	// context
	const { updateSettings, isInit } = useSettings();

	// effects
	useEffect(() => {
		if (isInit) {
			updateSettings();
		}
	}, [value, isInit]); // eslint-disable-line

	// styles
	const sx = useSx();

	const styles = {
		container: sx({
			alignItems: "center",
			marginBottom: 20,
		}),
		pickerContainer: sx({
			flexDirection: ["column", "column", "row"],
			alignItems: "center",
			justifyContent: "center",
			width: "80%",
		}),
		settingText: sx({
			fontSize: 18,
			marginRight: 10,
			marginBottom: [10, 10, 0],
			color: "brown",
		}),
	};

	return (
		<View sx={styles.container}>
			<H2>{title}</H2>
			<View sx={styles.pickerContainer}>
				<Text sx={styles.settingText}>{description}</Text>
				<CustomPicker
					style={Platform.OS === "android" && sx({ width: "40%" })}
					title={title}
					options={options}
					type={optionType}
					value={value}
					setValue={setValue}
				/>
			</View>
		</View>
	);
};

export default Setting;
