import { FC } from "react";
import { Text, View, SafeAreaView } from "react-native";

import { StateTables } from "../../../models";

export type MyTablesStateProps = {
  info?: StateTables;
};

export const MyTablesState: FC<MyTablesStateProps> = ({ info }) => {
  return (
    <SafeAreaView>
      <View className="flex flex-row justify-between items-center mt-4">
        <Text className="text-5xl font-bold">My Tables</Text>

        <Text className="font-semibold text-gray-500 text-base">
          {info ? `Serving ${info.serving_tables} tables` : `Serving 0 tables`}
        </Text>
      </View>

      <View className="flex justify-center items-center py-4 mt-8 bg-white">
        <View className="flex flex-row justify-start items-center gap-4">
          <View className="w-6 h-6 rounded-full bg-yellow-100 border-2 border-dashed border-yellow-300"></View>
          <Text className="text-2xl font-bold">{info?.num_tables_pending}</Text>
          <View className="border h-6"></View>
          <Text>Table Order Cooking</Text>
        </View>
        <View className="my-2"></View>
        <View className="flex flex-row justify-start items-center gap-4">
          <View className="w-6 h-6 rounded-full bg-green-100 border-2 border-dashed border-green-300"></View>
          <Text className="text-2xl font-bold">{info?.num_tables_served}</Text>
          <View className="border h-6"></View>
          <Text>Table Served</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
