import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink, loggerLink } from "@trpc/client";
import { Platform } from "react-native";
import React, { useState } from "react";

import { api } from "app/utils/trpc";
import { API } from "app/env";

export const TRPCProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	let links =
		Platform.OS === "web"
			? [loggerLink(), httpBatchLink({ url: API })]
			: [httpBatchLink({ url: API })];

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
