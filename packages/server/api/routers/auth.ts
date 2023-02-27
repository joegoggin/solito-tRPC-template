import { TRPCError } from "@trpc/server";
import { z } from "zod";
import jwt from "jsonwebtoken";

import { createTRPCRouter, publicProcedure } from "../trpc";
import { verifyPassword } from "server/utils/auth";
import { JWT_SECRET } from "server/env";

export const authRouter = createTRPCRouter({
	signIn: publicProcedure
		.input(z.object({ email: z.string(), password: z.string() }))
		.mutation(async ({ ctx, input }) => {
			const { email, password } = input;

			try {
				const user = await ctx.prisma.user.findUnique({
					where: {
						email,
					},
				});

				if (!user) {
					throw new TRPCError({
						code: "NOT_FOUND",
						message: `Unable to find account with email of ${email}.`,
					});
				}

				const passwordIsValid = await verifyPassword(
					password,
					user.password
				);

				if (!passwordIsValid) {
					throw new TRPCError({
						code: "UNAUTHORIZED",
						message: "Email and password don't match.",
					});
				}

				const token = jwt.sign({ userId: user.id }, JWT_SECRET);

				return { token, userId: user.id };
			} catch (error) {
				throw error;
			}
		}),
});
