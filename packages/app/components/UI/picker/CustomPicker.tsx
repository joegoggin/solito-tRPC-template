import { Picker } from "@react-native-picker/picker";
import { H1, SxProp, Text, useSx, View } from "dripsy";
import { Modal, Platform, Pressable } from "react-native";
import React, { useState } from "react";

import { type Option } from "app/types/Option";
import { type OptionType, OptionTypes } from "app/constants/optionType";
import { getOptionLabelByValue } from "app/utils/getOptionLabelByValue";
import { Colors } from "app/constants/Colors";
import Button from "../Button";
import CaretDownIcon from "app/components/icons/caret-down/CaretDownIcon";
import { useColors } from "app/provider/context/ColorsContextProvider";

type CustomPickerProps = {
	title: string;
	value: any;
	options: Option[];
	setValue: (value: any) => void;
	inputColor?: string;
	backgroundColor?: string;
	style?: SxProp;
	type?: OptionType;
	showSelect?: boolean;
};

/*
    props: (value: any, options: Option[], setValue: (value: any) => void, color?: string, style?: SxProp)
    description: Reusable component that renders a custom Picker ('react-native-picker') that is styled 
    specifically for each platform.
*/
const CustomPicker: React.FC<CustomPickerProps> = ({
	title,
	value,
	options,
	setValue,
	inputColor,
	backgroundColor,
	style,
	type = OptionTypes.String,
	showSelect = true,
}) => {
	// state
	const [showPicker, setShowPicker] = useState<boolean>(false);

	// context
	const { colors } = useColors();

	// set defaults
	inputColor = inputColor ? inputColor : colors.green;
	backgroundColor = backgroundColor ? backgroundColor : colors.white;

	// event handlers
	/*
        params: ()
        return type: void
        description: Event handler for press event of both ios select view and
        'Select' on custom picker that toggles showing picker.
    */
	const togglePicker = () => {
		setShowPicker(!showPicker);
	};

	// picker component
	const picker = () => (
		<Picker
			dropdownIconColor={inputColor}
			style={styles.picker}
			selectedValue={value}
			onValueChange={(itemValue: string) => {
				switch (type) {
					case OptionTypes.Number:
						setValue(+itemValue);
						break;
					case OptionTypes.Boolean:
						if (typeof itemValue === "string") {
							const boolValue = itemValue === "true";
							setValue(boolValue);
						} else {
							setValue(itemValue);
						}
						break;
					case OptionTypes.String:
						setValue(itemValue);
						break;
				}
			}}
		>
			{options.map((option) => (
				<Picker.Item
					key={option.value}
					label={option.label}
					value={option.value}
				/>
			))}
		</Picker>
	);

	// styles
	const sx = useSx();

	const styles = {
		picker: {
			...sx({
				backgroundColor: backgroundColor,
				borderColor: inputColor,
				color: inputColor,
			}),
			paddingHorizontal: 2,
			paddingVertical: 10,
			fontSize: 16,
			borderWidth: 2,
			borderRadius: 5,
			width: Platform.OS === "ios" ? "80%" : "100%",
		},
		ios: {
			...sx({
				backgroundColor: "white",
				borderColor: inputColor,
				color: inputColor,
			}),
			flexDirection: "row",
			alignItems: "center",
			justifyContent: "space-between",
			borderWidth: 2,
			paddingHorizontal: 2,
			paddingVertical: 10,
		},
		iosText: {
			...sx({
				color: inputColor,
			}),
			fontSize: 16,
		},

		iosModalContainer: sx({
			flex: 1,
			justifyContent: "center",
			alignItems: "center",
			backgroundColor: "white",
		}),
		android: {
			...sx({
				borderColor: inputColor,
			}),
			overflow: "hidden",
			borderWidth: 2,
			paddingLeft: 2,
			borderRadius: 5,
		},
	};
	return (
		<>
			{/* Web */}
			{Platform.OS === "web" && <View sx={style}>{picker()}</View>}

			{/* Android */}
			{Platform.OS === "android" && (
				<View sx={{ ...styles.android, ...style }}>{picker()}</View>
			)}

			{/* ios */}
			{Platform.OS === "ios" && (
				<>
					{!showPicker ? (
						<Pressable onPress={togglePicker}>
							<View sx={{ ...styles.ios, ...style }}>
								<Text style={styles.iosText}>
									{getOptionLabelByValue(value, options)}
								</Text>
								<CaretDownIcon size={12} color={inputColor} />
							</View>
						</Pressable>
					) : (
						<Modal animationType="slide">
							<View style={styles.iosModalContainer}>
								<H1 sx={{ marginBottom: 20 }}>{title}:</H1>
								{picker()}
								{showSelect && (
									<Button
										style={{ marginTop: 20, width: "80%" }}
										color={inputColor}
										onPress={togglePicker}
									>
										Select
									</Button>
								)}
							</View>
						</Modal>
					)}
				</>
			)}
		</>
	);
};

export default CustomPicker;
