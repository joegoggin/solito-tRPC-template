import { createNextApiHandler } from "@trpc/server/adapters/next";
import { appRouter } from "../../../../../packages/server/api/root";
import { createTRPCContext } from "../../../../../packages/server/api/trpc";

export default createNextApiHandler({
	router: appRouter,
	createContext: createTRPCContext,
});
