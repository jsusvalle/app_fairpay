import { FC, useState, useContext, useMemo } from "react";
import {
  View,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { Button, Icon } from "components/atoms";

import { CustomerNameField, MenuTab } from "components/molecules";
import { CreateOrderContext, CreateOrderContextType } from "context";

import { OrderCustomer } from "models";

export const MenuView: FC = () => {
  const { data, currentCustomer, addOrderCustomer, changeView } = useContext(
    CreateOrderContext
  ) as CreateOrderContextType;

  const currentName = useMemo(() => {
    const findData = data.order.find((p) => currentCustomer === p._id);
    if (findData) {
      return findData.name_guest;
    }
    return "Customer";
  }, [data, currentCustomer]);

  const [selectedItems, setSelectedItems] = useState<OrderCustomer[]>([]);
  const [customName, setCustomName] = useState(currentName);
  const [note, setNote] = useState("");

  const handleClickItem = (
    dataItem: OrderCustomer,
    state: "selected" | "unselected"
  ) => {
    if (state === "selected") {
      setSelectedItems((selectedItems) =>
        selectedItems.filter((p) => p._id !== dataItem._id)
      );
      return;
    }
    setSelectedItems((selectedItems) => [...selectedItems, dataItem]);
  };

  const handleAddOrderCustomer = () => {
    addOrderCustomer({
      _id: "1",
      name_guest: customName,
      note: note,
      order_customer: [...selectedItems],
    });
  };

  return (
    <SafeAreaView style={{ flex: 1, paddingTop: StatusBar.currentHeight }}>
      <KeyboardAwareScrollView>
        <View className="flex flex-col">
          <View className="h-1/5 container mx-auto px-6 pt-4">
            <TouchableOpacity onPress={() => changeView("order-view")}>
              <Icon type="arrow-left" size={50} />
            </TouchableOpacity>

            <CustomerNameField
              valueName={customName}
              onChange={setCustomName}
            />
          </View>

          <View className="h-3/5">
            <MenuTab
              selectedItems={selectedItems}
              handleClickItem={handleClickItem}
            />
          </View>

          <View className="h-1/5 w-full bg-white">
            <TextInput
              numberOfLines={2}
              placeholder="Add a note..."
              className="mt-1 py-6 block w-full rounded-sm bg-gray-100 border-gray-300 shadow-sm"
              value={note}
              onChangeText={(text) => setNote(text)}
            />
            <Button
              handlePress={handleAddOrderCustomer}
              isDisabled={selectedItems.length === 0}
            >
              {`Add ${selectedItems.length} items`}
            </Button>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};
