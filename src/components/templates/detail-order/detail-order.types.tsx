import { RouteProp, NavigationProp } from "@react-navigation/native";

type RootParamList = {
  DetailOrder: undefined;
  OrderId: { order_id: string };
};

type OrderIdRouteProp = RouteProp<RootParamList, "OrderId">;
type OrderIdNavigationProp = NavigationProp<RootParamList, "OrderId">;

export type DetailOrderProps = {
  navigation?: OrderIdNavigationProp;
  route?: OrderIdRouteProp;
};
