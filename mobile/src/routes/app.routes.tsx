import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { New } from "../screens/New";
import { Pools } from "../screens/Pools";

const {Navigator, Screen} = createBottomTabNavigator();

export function AppRoutes() {
    return (
        <Navigator>
            <Screen 
                name="New"
                component={New}
            />

            <Screen 
                name="pools"
                component={Pools}
            />
        </Navigator>
    )
}
