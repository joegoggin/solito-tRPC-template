import { z } from "zod";

export const roles = ["Admin", "User"] as const;

export const RoleEnum = z.enum(roles);
export type Role = z.infer<typeof RoleEnum>;
