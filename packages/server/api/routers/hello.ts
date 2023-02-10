import { createTRPCRouter, publicProcedure } from "../trpc";

export const helloRouter = createTRPCRouter({
	sayHi: publicProcedure.query(() => {
		return { message: "hello from tRPC!" };
	}),
});
