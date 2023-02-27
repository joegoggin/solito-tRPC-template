import { TRPCProvider } from "app/provider/trpc/TRPCProvider";
import StatusContextProvider from "./context/StatusContextProvider";
import UserContextProvider from "./context/UserContextProvider";
import { Dripsy } from "./dripsy";
import { NavigationProvider } from "./navigation";

export function Provider({ children }: { children: React.ReactNode }) {
	return (
		<TRPCProvider>
			<StatusContextProvider>
				<UserContextProvider>
					<NavigationProvider>
						<Dripsy>{children}</Dripsy>
					</NavigationProvider>
				</UserContextProvider>
			</StatusContextProvider>
		</TRPCProvider>
	);
}
