import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink, loggerLink } from "@trpc/client";
import React, { useState } from "react";
import { Platform } from "react-native";
import { API } from "../../../../env";
import { api } from "../../utils/trpc";

export const TRPCProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	let links = [httpBatchLink({ url: API })];

	if (Platform.OS === "web") {
		links.push(loggerLink());
	}

	const [queryClient] = useState(() => new QueryClient());
	const [trpcClient] = useState(() => api.createClient({ links }));

	return (
		<api.Provider client={trpcClient} queryClient={queryClient}>
			<QueryClientProvider client={queryClient}>
				{children}
			</QueryClientProvider>
		</api.Provider>
	);
};
