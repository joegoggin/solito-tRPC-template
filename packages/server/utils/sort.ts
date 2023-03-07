export const sort = (items: any[], key: string) => {
	return items.sort((a, b) => (a[key] > b[key] ? 1 : -1));
};

export const nestedSort = (items: any[], key1: string, key2: string) => {
	return items.sort((a, b) => (a[key1][key2] > b[key1][key2] ? 1 : -1));
};
