import { FC } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Icon } from "components/atoms";

import { StackHome } from "../views-home";
import NewOrder from "components/pages/new-order";

const Tab = createBottomTabNavigator();

export const AppBar: FC = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{ tabBarActiveTintColor: "green" }}
    >
      <Tab.Screen
        name="HomeApp"
        component={StackHome}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon type="home" size={30} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="New Order"
        component={NewOrder}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon type="plus" size={30} color={color} />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};
