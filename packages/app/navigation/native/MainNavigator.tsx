import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { RoleEnum } from "server/models/enums/Role";
import { useUser } from "app/provider/context/UserContextProvider";
import { getDefaultTabScreenOptions } from "app/constants/defaultTabScreenOptions";
import DashboardIcon from "app/components/icons/dashboard/DashboardIcon";
import DashboardScreen from "app/screens/DashboardScreen";
import AdminOnlyScreen from "app/screens/admin/AdminOnlyScreen";
import LockIcon from "app/components/icons/lock/LockIcon";
import SettingsIcon from "app/components/icons/settings/SettingsIcon";
import SettingsScreen from "app/screens/SettingsScreen";
import { useColors } from "app/provider/context/ColorsContextProvider";

const Tab = createBottomTabNavigator<{
	dashboard: undefined;
	adminOnly: undefined;
	settings: undefined;
}>();

const MainNavigator = () => {
	// context
	const { user } = useUser();
	const { colors } = useColors();

	return (
		<Tab.Navigator
			screenOptions={{ ...getDefaultTabScreenOptions(colors) }}
		>
			<Tab.Screen
				name="dashboard"
				component={DashboardScreen}
				options={{
					title: "Dashboard",
					tabBarLabel: "Dashboard",
					tabBarIcon: ({ color, size }) => (
						<DashboardIcon color={color} size={size} />
					),
				}}
			/>
			{user?.role === RoleEnum.enum.Admin && (
				<Tab.Screen
					name="adminOnly"
					component={AdminOnlyScreen}
					options={{
						title: "Admin Only",
						tabBarLabel: "Admin Only",
						tabBarIcon: ({ color, size }) => (
							<LockIcon color={color} size={size} />
						),
					}}
				/>
			)}
			<Tab.Screen
				name="settings"
				component={SettingsScreen}
				options={{
					title: "Settings",
					tabBarLabel: "Settings",
					tabBarIcon: ({ color, size }) => (
						<SettingsIcon color={color} size={size} />
					),
				}}
			/>
		</Tab.Navigator>
	);
};

export default MainNavigator;
