import { FC } from "react";
import { View, Text, SafeAreaView, StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Button } from "components/atoms";
import { AccordionItemsDetailOrder } from "components/organisms";

import { useGetDetailOrder, usePatchChangeOrderState } from "hooks/endpoints";

import type { DetailOrderProps } from "./detail-order.types";

export const DetailOrder: FC<DetailOrderProps> = ({ route }) => {
  const navigation = useNavigation();
  const orderId = route?.params.order_id;

  const { data } = useGetDetailOrder(orderId || "123");
  const patchChangeState = usePatchChangeOrderState(orderId);

  const handlePressChangeState = () => {
    patchChangeState.mutate(orderId || "123", {
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
      <View className="container mx-auto px-6 mt-4">
        <Text className="mt-4 text-4xl font-bold">
          Table {data?.data.table_num}
        </Text>

        <View className="bg-white my-4 py-8 px-4 flex flex-row justify-around rounded-md">
          <View className="flex h-10 w-10">
            <View className="relative inline-flex rounded-full h-10 w-10 bg-yellow-400"></View>
          </View>
          <Text className="text-4xl font-bold">Cooking</Text>
        </View>

        <AccordionItemsDetailOrder
          data={data?.data ? data?.data.order_details : []}
        />

        <Button
          handlePress={handlePressChangeState}
          isLoading={patchChangeState.isLoading}
        >
          Change State Order
        </Button>
      </View>
    </SafeAreaView>
  );
};
