import { TRPCError } from "@trpc/server";
import { Prisma } from "@prisma/client";
import { z } from "zod";

import { hashPassword } from "server/utils/auth";
import { UserSchema } from "server/models/interfaces/User";
import { createTRPCRouter, privateProcedure, publicProcedure } from "../trpc";

const select = {
	id: true,
	fName: true,
	lName: true,
	email: true,
};

export const userRouter = createTRPCRouter({
	createUser: publicProcedure
		.input(UserSchema)
		.mutation(async ({ input, ctx }) => {
			const { password, confirm, email } = input;

			try {
				if (password !== confirm) {
					throw new TRPCError({
						code: "BAD_REQUEST",
						message: "Password and confirm password dont match.",
					});
				}

				const hashedPassword = await hashPassword(password);

				if (hashedPassword) {
					const data = {
						...input,
						password: hashedPassword,
						confirm: undefined,
					};

					const user = await ctx.prisma.user.create({ data, select });

					if (user) {
						return { user };
					}
				}
			} catch (error) {
				if (error instanceof Prisma.PrismaClientKnownRequestError) {
					throw new TRPCError({
						code: "BAD_REQUEST",
						message: `User with email of ${email} already exists.`,
					});
				}

				throw error;
			}
		}),
	getUser: privateProcedure
		.input(z.object({ id: z.string().nullable() }))
		.query(async ({ ctx, input }) => {
			const { id } = input;

			try {
				if (id) {
					const user = ctx.prisma.user.findUnique({
						where: {
							id,
						},
					});

					if (!user) {
						throw new TRPCError({
							code: "NOT_FOUND",
							message: `User with id of ${id} not found!`,
						});
					}

					return user;
				}

				return null;
			} catch (error) {
				throw error;
			}
		}),
});
