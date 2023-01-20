import { FC, useState } from "react";
import { View, TouchableOpacity, Text, ScrollView } from "react-native";

import { Icon } from "components/atoms";

import { OrderDetails } from "models";

type AccordionItemsDetailOrderProps = {
  data: OrderDetails[];
};

export const AccordionItemsDetailOrder: FC<AccordionItemsDetailOrderProps> = ({
  data,
}) => {
  const [activeItem, setActiveItem] = useState<null | string>(null);

  return (
    <ScrollView>
      <View className="bg-white">
        {data.map((item) => (
          <View key={item.name_guest}>
            <View>
              <TouchableOpacity
                className="w-full py-5 px-4 border-b border-gray-200"
                onPress={() =>
                  setActiveItem(
                    activeItem === item.name_guest ? null : item.name_guest
                  )
                }
              >
                <View className="flex flex-row items-center justify-between ">
                  <Text className="font-medium text-left text-xl text-gray-500">
                    {item.name_guest}
                  </Text>

                  <Icon type="chevron-down" size={30} />
                </View>
              </TouchableOpacity>
            </View>
            <View
              className={item.name_guest === activeItem ? "" : "hidden"}
              aria-labelledby="accordion-flush-heading-1"
            >
              <View className="py-5 border-b">
                {item.order_customer.map((food) => (
                  <View
                    key={food.name}
                    className="flex flex-row justify-between px-4"
                  >
                    <Text className="text-base font-semibold">{food.name}</Text>
                    <Text className="text-base font-semibold">
                      ${food.price}
                    </Text>
                  </View>
                ))}
              </View>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};
