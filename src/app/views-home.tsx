import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "components/pages/home";
import DetailOrder from "components/pages/detail-order";

const HomeStackNavigator = createNativeStackNavigator();

export const StackHome = () => {
  return (
    <HomeStackNavigator.Navigator initialRouteName="Home">
      <HomeStackNavigator.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <HomeStackNavigator.Screen
        name="Detail Order"
        component={DetailOrder}
        options={{
          headerShown: false,
        }}
      />
      <HomeStackNavigator.Screen
        name="Check Order"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
    </HomeStackNavigator.Navigator>
  );
};
