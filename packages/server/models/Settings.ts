import { z } from "zod";

export const SettingsSchema = z.object({
	isDarkTheme: z.boolean().default(false),
});

export type Settings = z.infer<typeof SettingsSchema>;
