import { FC, useMemo } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import MaterialIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { TablesData } from "models";
import { classNames } from "utils";

export type TableButtonProps = {
  data: TablesData;
};

export const TableButton: FC<TableButtonProps> = ({ data }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    if (data.state === "pending") {
      navigation.navigate(
        "Detail Order" as never,
        {
          tableId: data._id,
        } as never
      );
    } else if (data.state === "served") {
      navigation.navigate(
        "Check Order" as never,
        {
          tableId: data._id,
        } as never
      );
    }
  };

  const buttonClassNames = useMemo(() => {
    const classes = {
      "flex flex-col w-28 h-22 items-center px-4 py-4 rounded-md bg-white":
        true,
      "bg-yellow-100 border-2 border-dashed border-yellow-300":
        data.state === "pending",
      "bg-green-100 border-2 border-dashed border-green-300":
        data.state === "served",
    };

    return classNames(classes);
  }, [data.state]);

  return (
    <TouchableOpacity onPress={handlePress} className={buttonClassNames}>
      <Text className="text-5xl font-semibold">{data.nro_table}</Text>
      <View className="flex flex-row justify-around my-2 text-sm font-bold">
        <MaterialIcons name="account-group" size={20} />
        <Text className="ml-2">{data.nro_guest}</Text>
      </View>
    </TouchableOpacity>
  );
};
