import { type Option } from "app/types/Option";

/*
        params: (value: any)
        return type: string
        description: Util function that takes in option value and options then returns 
        the label associated with that value.
    */
export const getOptionLabelByValue = (value: any, options: Option[]) => {
	let valueLabel: string = "";

	for (let i = 0; i < options.length; i++) {
		if (options[i]?.value === value) {
			valueLabel = options[i]?.label as string;
		}
	}

	return valueLabel;
};
