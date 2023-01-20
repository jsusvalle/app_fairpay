import { FC } from "react";
import { View, TouchableOpacity, ScrollView, Text } from "react-native";

import { Icon } from "components/atoms";

import { NewOrder } from "models";

type OrderTableProps = {
  dataOrder: NewOrder;
  onEditOrderCustomer: (guest_id: string, action: string) => void;
};

export const OrderTable: FC<OrderTableProps> = ({
  dataOrder,
  onEditOrderCustomer,
}) => {
  return (
    <ScrollView>
      <View className="mx-6 mt-4 bg-white rounded-sm">
        <View className="flex flex-row justify-between border border-b-slate-200 py-3 px-4 text-lg border-t-0 border-l-0 border-r-0">
          <Text className="font-bold text-lg">
            Table No: {dataOrder.nro_table}
          </Text>
          <Text className="font-bold text-lg">
            Customers: {dataOrder.nro_guest}
          </Text>
        </View>

        {dataOrder.order.map((item) => (
          <View
            key={item.name_guest}
            className="flex flex-row justify-between border border-b-slate-200 py-3 px-4 text-lg border-t-0 border-l-0 border-r-0"
          >
            <View className="flex flex-col">
              <Text className="text-xl font-semibold text-green-800">
                {item.name_guest}
              </Text>
              {item.order_customer.length > 0
                ? item.order_customer.map((item) => (
                    <Text className="text-base font-semibold" key={item._id}>
                      {item.name}
                    </Text>
                  ))
                : null}
            </View>
            <View className="flex flex-col">
              {item.order_customer.length > 0 ? (
                <TouchableOpacity
                  onPress={() => onEditOrderCustomer(item._id, "delete")}
                  className="flex items-center justify-center rounded-full w-10 h-10 bg-red-500"
                >
                  <Icon type="minus" size={20} color="#fff" />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() => onEditOrderCustomer(item._id, "add")}
                  className="flex items-center justify-center rounded-full w-10 h-10 bg-green-500"
                >
                  <Icon type="plus" size={20} color="#fff" />
                </TouchableOpacity>
              )}
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};
