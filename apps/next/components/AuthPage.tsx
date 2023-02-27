import { useRouter } from "next/router";
import React, { type ReactNode, useEffect, useState } from "react";

import { useUser } from "app/provider/context/UserContextProvider";
import { Colors } from "app/constants/Colors";
import LoadingSpinner from "app/components/UI/LoadingSpinner";

const AuthPage: React.FC<{ children: ReactNode }> = ({ children }) => {
	// state
	const [loading, setLoading] = useState<boolean>(true);

	// context
	const { isInit, user, token } = useUser();

	// router
	const router = useRouter();

	/*
		dependencies: [isAuth, isInit, user]
		description: useEffect hook that will redirect to dashboard if user
		is authenticated. if user isn't authenticated and user context is already
		initialized 'loading' to false
	*/
	useEffect(() => {
		if (user && token) {
			router.replace("/dashboard");
		} else {
			if (isInit) {
				setLoading(false);
			}
		}
	}, [isInit, user, token]); // eslint-disable-line

	if (loading) {
		return <LoadingSpinner color={Colors.green} size="large" />;
	}

	return <>{children}</>;
};

export default AuthPage;
