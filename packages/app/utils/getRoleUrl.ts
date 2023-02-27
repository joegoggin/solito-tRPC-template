import { Role } from "server/models/enums/Role";

export const getRoleUrl = (role: Role, path: string) => {
	return `/${role.toString().toLowerCase()}/${path}`;
};
