import { FC } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import MaterialIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { StackHome } from "../../../app/views-home";

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
            <MaterialIcons name="home" size={30} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="New Order"
        component={StackHome}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="plus" size={30} color={color} />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};
