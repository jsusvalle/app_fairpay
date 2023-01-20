import { FC, useCallback } from "react";
import { View, TouchableOpacity, Text } from "react-native";

import { useGetAvailableTables } from "hooks/endpoints";

import { classNames } from "utils";

type AvailableTablesProps = {
  selectedTable: string;
  onChangeTable: (id: string, nro_table: number) => void;
};

export const AvailableTables: FC<AvailableTablesProps> = ({
  selectedTable,
  onChangeTable,
}) => {
  const { data } = useGetAvailableTables();

  const buttonClassNames = useCallback(
    (idItem: string) => {
      const classes = {
        "w-20 flex justify-center items-center mr-2 mt-2 bg-white rounded-sm border border-gray-500 border-dashed px-6 py-6":
          true,
        "border-green-500 bg-green-50": idItem === selectedTable,
      };

      return classNames(classes);
    },
    [selectedTable]
  );

  const handleClickTable = (id: string, nro_table: number) => {
    onChangeTable(id, nro_table);
  };

  return (
    <View className="flex flex-col mt-6">
      <Text className="text-2xl font-semibold">Available Tables</Text>

      <View>
        <View className="flex flex-row flex-wrap mt-4">
          {data?.data &&
            data?.data.map((item) => (
              <TouchableOpacity
                key={item._id}
                onPress={() => handleClickTable(item._id, item.nro_table)}
                className={buttonClassNames(item._id)}
              >
                <Text className="text-xl font-bold">{item.nro_table}</Text>
              </TouchableOpacity>
            ))}
        </View>
      </View>
    </View>
  );
};
