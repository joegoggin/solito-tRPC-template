import { H3, useSx, View } from "dripsy";
import React from "react";

import { useStatus } from "app/provider/context/StatusContextProvider";

/*
	props: ()
	description: Reusable component that renders messages (error messages or success messages) based 
	on the status provided from the status context. 
*/
const StatusMessages: React.FC = () => {
	// context
	const { error, success } = useStatus();

	// styles
	const sx = useSx();

	const styles = {
		container: sx({
			width: ["60%", "70%", "80%"],
			alignSelf: "center",
		}),
		error: sx({
			textAlign: "center",
			color: "red",
		}),
		success: sx({
			textAlign: "center",
			color: "green",
		}),
	};

	return (
		<View sx={styles.container}>
			{error && <H3 sx={styles.error}>Error: {error}</H3>}
			{success && <H3 sx={styles.success}>{success}</H3>}
		</View>
	);
};

export default StatusMessages;
