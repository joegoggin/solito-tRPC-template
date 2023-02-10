import { initTRPC } from "@trpc/server";
import { type CreateNextContextOptions } from "@trpc/server/adapters/next";

export const createTRPCContext = (_opts: CreateNextContextOptions) => {
	const { req, res } = _opts;

	return {
		req,
		res,
	};
};

export const t = initTRPC.context<typeof createTRPCContext>().create();

export const createTRPCRouter = t.router;

export const publicProcedure = t.procedure;
