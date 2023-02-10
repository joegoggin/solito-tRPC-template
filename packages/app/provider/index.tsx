import { TRPCProvider } from "app/provider/trpc/TRPCProvider";
import { Dripsy } from "./dripsy";
import { NavigationProvider } from "./navigation";

export function Provider({ children }: { children: React.ReactNode }) {
	return (
		<TRPCProvider>
			<NavigationProvider>
				<Dripsy>{children}</Dripsy>
			</NavigationProvider>
		</TRPCProvider>
	);
}
