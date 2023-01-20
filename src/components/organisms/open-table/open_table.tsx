import { FC, useContext, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Icon, Button } from "components/atoms";
import { AvailableTables, NumGuests } from "components/molecules";

import { CreateOrderContext, CreateOrderContextType } from "context";

export const OpenTable: FC = () => {
  const navigation = useNavigation();
  const { data, saveTable } = useContext(
    CreateOrderContext
  ) as CreateOrderContextType;

  const [selectData, setSelectData] = useState<{
    table_id: string;
    nro_guest: number;
    nro_table: number;
  }>({
    table_id: data.table_id ? data.table_id : "",
    nro_table: data.nro_table ? data.nro_table : 0,
    nro_guest: data.nro_guest ? data.nro_guest : 0,
  });

  const handleChangeTable = (table_id: string, nro_table: number) => {
    setSelectData((prevData) => ({
      ...prevData,
      table_id,
      nro_table,
    }));
  };

  const handleChangeNroGuest = (nro_guest: number) => {
    setSelectData((prevData) => ({
      ...prevData,
      nro_guest,
    }));
  };

  const nextStep = () => {
    saveTable(selectData);
  };

  return (
    <SafeAreaView style={{ flex: 1, paddingTop: StatusBar.currentHeight }}>
      <View className="container mx-auto px-6 pt-4">
        <TouchableOpacity onPress={() => navigation.navigate("Home" as never)}>
          <Icon type="arrow-left" size={50} />
        </TouchableOpacity>
        <View className="mt-4">
          <Text className="text-4xl font-bold">Open Table</Text>
        </View>

        <AvailableTables
          selectedTable={selectData.table_id}
          onChangeTable={handleChangeTable}
        />

        <NumGuests
          selectedNumber={selectData.nro_guest}
          onChangeNumber={handleChangeNroGuest}
        />

        {selectData.nro_guest !== 0 && selectData.table_id.length > 0 && (
          <View className="mt-28">
            <Button handlePress={nextStep}>Proceed</Button>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};
