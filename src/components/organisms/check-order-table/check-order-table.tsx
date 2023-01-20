import { FC, useState } from "react";
import { View, TouchableOpacity, Text, ScrollView } from "react-native";

import { Icon } from "components/atoms";

import { OrderCheckDetails } from "models";

type CheckOrdertableProps = {
  tip_total: string;
  grand_total: string;
  data: OrderCheckDetails[];
};

export const CheckOrdertable: FC<CheckOrdertableProps> = ({
  data,
  tip_total,
  grand_total,
}) => {
  const [activeItem, setActiveItem] = useState<null | string>(null);

  return (
    <View className="bg-white mt-4 pt-1 px-4 text-4xl font-bold rounded-md">
      <View>
        {data.map((item) => (
          <View key={item.name_customer}>
            <View>
              <TouchableOpacity
                className="flex flex-row items-center justify-between w-full py-5 border-b border-gray-200"
                onPress={() =>
                  setActiveItem(
                    activeItem === item.name_customer
                      ? null
                      : item.name_customer
                  )
                }
              >
                <View className="flex flex-row items-center justify-between">
                  <Text className="font-medium text-left text-xl text-gray-500 mr-2">
                    {item.name_customer}
                  </Text>
                  <Icon
                    type="file-document-outline"
                    size={24}
                    color="#6B7280"
                  />
                </View>
                <Icon type="chevron-down" size={30} />
              </TouchableOpacity>
            </View>
            <View className={item.name_customer === activeItem ? "" : "hidden"}>
              <View className="py-5 border-b">
                {item.order_details.map((food) => (
                  <View
                    key={food._id}
                    className="flex flex-row justify-between"
                  >
                    <Text className="text-lg font-semibold">{food.name}</Text>
                    <Text className="text-lg font-semibold">${food.price}</Text>
                  </View>
                ))}

                <View className="flex flex-row justify-between pb-1 border-gray-50 border-b last:border-b-0">
                  <Text className="text-lg font-semibold">Tip</Text>
                  <Text className="text-lg font-semibold">${item.tip}</Text>
                </View>

                <View className="flex flex-row justify-between pb-1 border-gray-50 border-b last:border-b-0">
                  <Text className="text-xl font-semibold">Total</Text>
                  <Text className="text-xl font-semibold">${item.total}</Text>
                </View>
              </View>
            </View>
          </View>
        ))}

        <View className="flex flex-row items-center justify-between w-full py-5 border-b border-gray-200 last:border-b-0">
          <Text className="font-bold text-left text-xl text-green-800">
            Tip 12%
          </Text>
          <Text className="font-bold text-left text-xl text-green-800">
            ${tip_total}
          </Text>
        </View>

        <View className="flex flex-row items-center justify-between w-full py-5 border-b border-gray-200 last:border-b-0">
          <Text className="font-bold text-xl text-left text-black">
            Grand Total
          </Text>
          <Text className="font-bold text-xl text-left text-black">
            ${grand_total}
          </Text>
        </View>
      </View>
    </View>
  );
};
