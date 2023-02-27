import { z } from "zod";

import { RoleEnum } from "server/models/enums/Role";

export const UserSchema = z.object({
	fName: z.string().min(1, "First Name is required!"),
	lName: z.string().min(1, "Last Name is required!"),
	email: z.string().min(1, "Email is required!"),
	password: z.string().min(1, "Password is required!"),
	confirm: z.string().min(1, "Confirm is required!"),
	role: RoleEnum,
});

export type User = z.infer<typeof UserSchema> & { id: string };
