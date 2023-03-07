export const OptionTypes = {
	Number: "Number",
	String: "String",
	Boolean: "Boolean",
} as const;

export type OptionType = typeof OptionTypes[keyof typeof OptionTypes];
