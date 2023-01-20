import { FC } from "react";
import { View, Text, SafeAreaView, StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Button } from "components/atoms";
import { CheckOrdertable } from "components/organisms";

import { useGetOrderCheck, usePatchChangeOrderState } from "hooks/endpoints";

import { OrderCheckProps } from "./order-check.types";

export const OrderCheck: FC<OrderCheckProps> = ({ route }) => {
  const navigation = useNavigation();
  const orderId = route?.params.order_id;

  const { data, isLoading } = useGetOrderCheck(orderId ? orderId : "123");
  const patchChangeState = usePatchChangeOrderState(orderId ? orderId : "123");

  const handlePressChangeState = () => {
    patchChangeState.mutate(orderId ? orderId : "", {
      onSuccess: () => {
        navigation.goBack();
      },
      onError: (e) => {
        console.error(e);
      },
    });
  };

  return (
    <SafeAreaView style={{ flex: 1, paddingTop: StatusBar.currentHeight }}>
      <View className="container mx-auto px-6">
        <Text className="mt-4 text-4xl font-bold">
          Check - Table {data?.data.table_num}
        </Text>

        <CheckOrdertable
          data={data?.data.order_check_details || []}
          grand_total={data?.data.grand_total || "0"}
          tip_total={data?.data.tip_total || "0"}
        />

        {!isLoading && (
          <Button
            handlePress={handlePressChangeState}
            isLoading={patchChangeState.isLoading}
          >
            Finish
          </Button>
        )}
      </View>
    </SafeAreaView>
  );
};
