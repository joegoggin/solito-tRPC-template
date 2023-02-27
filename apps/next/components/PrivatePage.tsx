import { useRouter } from "next/router";
import React, { type ReactNode, useEffect, useState } from "react";

import { RoleEnum, type Role } from "server/models/enums/Role";
import { useUser } from "app/provider/context/UserContextProvider";
import { Colors } from "app/constants/Colors";
import LoadingSpinner from "app/components/UI/LoadingSpinner";

interface PrivatePageProps {
	role: Role | "All";
	children: ReactNode;
}

const PrivatePage: React.FC<PrivatePageProps> = ({ role, children }) => {
	// state
	const [loading, setLoading] = useState<boolean>(true);

	// context
	const { isInit, user, token } = useUser();

	// router
	const router = useRouter();

	/*
		dependencies: [isAuth, isInit]
		description: useEffect hook that will redirect to sign in page if user
		is not authenticated. if user is authenticated and user context is already
		initialized 'loading' to false.
	*/
	useEffect(() => {
		if (!user && !token && isInit) {
			router.replace("/sign-in");
		} else {
			if (isInit && user?.role) {
				if (role === "All" || user?.role === RoleEnum.enum.Admin) {
					setLoading(false);
					return;
				}
				if (role !== user?.role && user?.role) {
					router.replace("/dashboard");
				} else {
					setLoading(false);
				}
			}
		}
	}, [isInit, user, token, role]); // eslint-disable-line

	if (loading) {
		return <LoadingSpinner color={Colors.green} size="large" />;
	}

	return <>{children}</>;
};

export default PrivatePage;
