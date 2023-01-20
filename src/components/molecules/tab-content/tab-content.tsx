import { FC, useCallback } from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { Icon } from "components/atoms";

import { MenuItemData, OrderCustomer } from "models";

type TabContentProps = {
  dataItems: MenuItemData[];
  selectedItems: OrderCustomer[];
  handleClickItem: (
    dataItem: OrderCustomer,
    state: "selected" | "unselected"
  ) => void;
};

export const TabContent: FC<TabContentProps> = ({
  dataItems,
  selectedItems,
  handleClickItem,
}) => {
  const stateItem = useCallback(
    (id: string) => {
      return selectedItems.some((p) => p._id === id)
        ? "selected"
        : "unselected";
    },
    [selectedItems]
  );
  return (
    <View className="container mx-auto h-full">
      <View className="container px-6 bg-white flex flex-col h-full">
        {dataItems.map((item) => (
          <TouchableOpacity
            key={item._id}
            className="border border-b border-x-0 border-t-0 py-4"
            onPress={() => handleClickItem(item, stateItem(item._id))}
          >
            <View className="flex flex-row justify-between">
              <Text className="font-semibold text-xl">{item.name}</Text>

              {stateItem(item._id) === "selected" ? (
                <Icon type="check" size={20} />
              ) : (
                <Text className="font-semibold text-xl">${item.price}</Text>
              )}
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};
