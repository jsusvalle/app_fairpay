import { FC, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { TabContent } from "../tab-content";

import { useGetMenuByCategory } from "hooks/endpoints";

import { OrderCustomer } from "models";

type MenuTabProps = {
  selectedItems: OrderCustomer[];
  handleClickItem: (
    dataItem: OrderCustomer,
    state: "selected" | "unselected"
  ) => void;
};

export const MenuTab: FC<MenuTabProps> = ({
  selectedItems,
  handleClickItem,
}) => {
  const { data: menuData } = useGetMenuByCategory();
  const [currentTab, setCurrentTab] = useState("Most Popular");

  return (
    <View>
      <View className="container mx-auto mt-6 border-b bg-white border-gray-200">
        <View className="flex flex-row flex-wrap -mb-px text-sm font-medium text-center">
          {menuData?.data &&
            Object.keys(menuData?.data).map((keyName) => (
              <View key={keyName} className="mr-2">
                <TouchableOpacity
                  className={
                    currentTab === keyName
                      ? "p-4 border-b-2 rounded-t-lg"
                      : "p-4 border-b-2 border-transparent rounded-t-lg"
                  }
                  onPress={() => setCurrentTab(keyName)}
                >
                  <Text className={`${currentTab === keyName && "text-bold"}`}>
                    {keyName}
                  </Text>
                </TouchableOpacity>
              </View>
            ))}
        </View>
      </View>
      <TabContent
        selectedItems={selectedItems}
        dataItems={menuData?.data[currentTab] || []}
        handleClickItem={handleClickItem}
      />
    </View>
  );
};
