import { Platform } from "react-native";
import { View, useSx, type SxProp } from "dripsy";
import React, { ReactNode } from "react";

import { useKey } from "app/utils/hooks/useKey";

type FormProps = {
	onSubmit: () => void;
	children: ReactNode;
	style?: SxProp;
};

/*
	props: (onSubmit: () => void, style?: SxProp)
	description: Reusable component that renders a custom styled wrapper for Forms.
	will render a <form> for Web and a <View> for Native.
*/
const Form: React.FC<FormProps> = ({ onSubmit, style, children }) => {
	if (Platform.OS === "web") {
		useKey("Enter", onSubmit); // eslint-disable-line
	}

	// styles
	const sx = useSx();

	const styles = {
		form: sx({
			width: ["70%", "60%", "40%"],
			justifyContent: "center",
			marginBottom: [40, 80],
		}),
		htmlForm: {
			width: "100%",
			display: "flex",
			justifyContent: "center",
		},
	};

	return (
		<>
			{Platform.OS !== "web" ? (
				<View sx={{ ...styles.form, ...style }}>{children}</View>
			) : (
				<form style={styles.htmlForm}>
					<View sx={{ ...styles.form, ...style }}>{children}</View>
				</form>
			)}
		</>
	);
};

export default Form;
