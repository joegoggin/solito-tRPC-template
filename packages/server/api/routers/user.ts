import { TRPCError } from "@trpc/server";
import { Prisma } from "@prisma/client";
import { z } from "zod";

import { type User, UserSchema } from "server/models/User";
import { createTRPCRouter, privateProcedure, publicProcedure } from "../trpc";
import { hashPassword } from "server/utils/auth";
import { validateEmail, validateNewPassword } from "server/utils/validation";
import { sort } from "server/utils/sort";

const select = {
	id: true,
	fName: true,
	lName: true,
	email: true,
	settings: true,
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

				const emaiIsValid = validateEmail(email);

				if (!emaiIsValid) {
					throw new TRPCError({
						code: "BAD_REQUEST",
						message: "Email is invalid!",
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
	updateUser: privateProcedure
		.input(
			z.object({
				userId: z.string().min(1, "User ID is required!"),
				data: UserSchema.partial(),
			})
		)
		.mutation(async ({ input, ctx }) => {
			const { userId, data } = input;

			try {
				if (data.password) {
					const validation = validateNewPassword(data.password);

					if (!validation.isValid) {
						throw new TRPCError({
							code: "BAD_REQUEST",
							message:
								validation.error || "Somethings went wrong.",
						});
					}
				}

				if (data.email) {
					try {
						const user = await ctx.prisma.user.findUnique({
							where: {
								email: data.email,
							},
						});

						if (user) {
							throw new TRPCError({
								code: "BAD_REQUEST",
								message: `Account with Email of ${data.email} already exists.`,
							});
						}
					} catch (error) {
						throw error;
					}
				}

				try {
					let updatedUser: Partial<User> | undefined;

					if (data.password) {
						if (data.password != data.confirm) {
							throw new TRPCError({
								code: "BAD_REQUEST",
								message:
									"Password and confirm password don't match.",
							});
						}

						const hashedPassowrd = await hashPassword(
							data.password
						);

						if (hashedPassowrd) {
							let userData = {
								...data,
								password: hashedPassowrd,
								confirm: undefined,
							};

							updatedUser = (await ctx.prisma.user.update({
								where: {
									id: userId,
								},
								data: userData,
								select,
							})) as User;
						}
					} else {
						updatedUser = (await ctx.prisma.user.update({
							where: {
								id: userId,
							},
							data,
							select,
						})) as User;
					}

					const users = await ctx.prisma.user.findMany();

					const updatedUsers: Partial<User>[] = [
						...sort(users, "fName"),
					];

					if (updatedUser && updatedUsers) {
						return {
							updatedUser,
							updatedUsers,
						};
					}
				} catch (error) {
					if (error instanceof Prisma.PrismaClientKnownRequestError) {
						if (error.code === "P2025") {
							throw new TRPCError({
								code: "NOT_FOUND",
								message: "User not found.",
							});
						}
					}

					throw error;
				}
			} catch (error) {
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
