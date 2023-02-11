import { type ReactNode } from "react";
import { SxProp, Text, useSx } from "dripsy";
import { Pressable } from "react-native";

export interface ButtonProps {
	color: string;
	onPress: () => void;
	children: ReactNode;
	style?: SxProp;
	title?: string;
}

const Button: React.FC<ButtonProps> = ({
	color,
	onPress,
	children,
	style,
	title,
}) => {
	// styles
	const sx = useSx();

	const styles = {
		button: sx({
			backgroundColor: color,
			justifyContent: "center",
			alignItems: "center",
			paddingX: [20, 30],
			paddingY: [10, 20],
			borderRadius: 10,
		}),
		text: sx({
			color: color === "white" ? "brown" : "white",
			fontSize: 20,
			textAlign: "center",
		}),
	};

	return (
		<Pressable style={[styles.button, style]} onPress={onPress}>
			<Text sx={styles.text}>{title ? title : children}</Text>
		</Pressable>
	);
};

export default Button;
