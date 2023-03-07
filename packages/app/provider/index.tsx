import { TRPCProvider } from "app/provider/trpc/TRPCProvider";
import { Dripsy } from "./dripsy";
import { NavigationProvider } from "./navigation";
import SettingsContextProvider from "./context/SettingsContextProvider";
import StatusContextProvider from "./context/StatusContextProvider";
import UserContextProvider from "./context/UserContextProvider";
import ColorsContextProvider from "./context/ColorsContextProvider";

export function Provider({ children }: { children: React.ReactNode }) {
	return (
		<TRPCProvider>
			<StatusContextProvider>
				<UserContextProvider>
					<SettingsContextProvider>
						<ColorsContextProvider>
							<NavigationProvider>
								<Dripsy>{children}</Dripsy>
							</NavigationProvider>
						</ColorsContextProvider>
					</SettingsContextProvider>
				</UserContextProvider>
			</StatusContextProvider>
		</TRPCProvider>
	);
}
