import { RouteProp } from "@react-navigation/native";

type RootParamList = {
  DetailOrder: undefined;
  OrderId: { order_id: string };
};

type OrderIdRouteProp = RouteProp<RootParamList, "OrderId">;

export type DetailOrderProps = {
  route?: OrderIdRouteProp;
};
