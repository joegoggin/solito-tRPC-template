import { type SxProp } from "dripsy";
import { TextInput, TextStyle, StyleSheet, Platform } from "react-native";
import React, { useState } from "react";

import { useColors } from "app/provider/context/ColorsContextProvider";
import { useSettings } from "app/provider/context/SettingsContextProvider";

export type CustomInputProps = {
	placeholder: string;
	value: string;
	onChangeText: (enteredText: string) => void;
	style?: SxProp;
	color?: string;
	inputColor?: string;
	isPassword?: boolean;
	autoFocus?: boolean;
};

/*
	props: (placeholder: string, value: string, onChangeText: (enteredText) => void, style?: SxProp, isPassword?: boolean)
	description: Reuseable component that renders a custom styled <TextInput>.
*/
const CustomTextInput: React.FC<CustomInputProps> = ({
	placeholder,
	value,
	onChangeText,
	style,
	color,
	inputColor,
	isPassword = false,
	autoFocus = false,
}) => {
	// state
	const [isFocused, setIsFocused] = useState(false);

	// context
	const { colors } = useColors();
	const { isDarkTheme } = useSettings();

	// set defaults
	color = color ? color : colors.primary;
	inputColor = inputColor ? inputColor : colors.dark;

	// styles
	const styles = StyleSheet.create({
		input: {
			borderBottomWidth: 1,
			borderColor: inputColor,
			color: inputColor,
			fontSize: 16,
			paddingHorizontal: 4,
			paddingVertical: 8,
		},
		focused: {
			borderBottomWidth: 2,
			borderColor: color,
			color: color,
			fontSize: 20,
		},
	});

	return (
		<TextInput
			style={[
				styles.input,
				isFocused && styles.focused,
				style as TextStyle,
			]}
			placeholder={placeholder}
			placeholderTextColor={isFocused ? color : colors.dark}
			value={value}
			onChangeText={onChangeText}
			autoCapitalize="none"
			autoCorrect={false}
			secureTextEntry={isPassword}
			onFocus={() => setIsFocused(true)}
			onBlur={() => setIsFocused(false)}
			autoFocus={autoFocus}
		/>
	);
};

export default CustomTextInput;
