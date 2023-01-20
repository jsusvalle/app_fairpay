import { FC, useContext, useMemo } from "react";
import { View, TouchableOpacity, SafeAreaView, StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Icon, Button } from "components/atoms";
import { OrderTable } from "components/molecules";

import { usePostCreateOrder } from "hooks/endpoints";

import { CreateOrderContext, CreateOrderContextType } from "context";

export const OrderView: FC = () => {
  const navigation = useNavigation();
  const { data, editOrderCustomer, changeView, resetData } = useContext(
    CreateOrderContext
  ) as CreateOrderContextType;

  const postCreateOrder = usePostCreateOrder();

  const isFullData = useMemo(() => {
    return data.order.every((p) => p.order_customer.length > 0);
  }, [data]);

  const onEditOrderCustomer = (id: string, action: string) => {
    editOrderCustomer(id, action);
  };

  const handleClickSubmitData = () => {
    postCreateOrder.mutate(
      { data: data },
      {
        onSuccess: () => {
          resetData();
          navigation.navigate("Home" as never);
        },
        onError: (e) => {
          console.log(e);
        },
      }
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, paddingTop: StatusBar.currentHeight }}>
      <View className="container mx-auto px-6 pt-4">
        <TouchableOpacity onPress={() => changeView("table-view")}>
          <Icon type="arrow-left" size={50} />
        </TouchableOpacity>
      </View>

      <OrderTable dataOrder={data} onEditOrderCustomer={onEditOrderCustomer} />

      {isFullData && (
        <View className="container mx-auto px-6 pt-4">
          <Button
            handlePress={handleClickSubmitData}
            isLoading={postCreateOrder.isLoading}
          >
            Send to Kitchen
          </Button>
        </View>
      )}
    </SafeAreaView>
  );
};
