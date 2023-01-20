import { FC } from "react";
import { View } from "react-native";

import { MyTablesState, MyTablesList } from "../../organisms";

import { useGetMyTables } from "../../../hooks";

export const Mytables: FC = () => {
  const { data } = useGetMyTables();

  return (
    <View className="container px-6">
      <MyTablesState info={data?.state_tables} />

      <MyTablesList data={data?.tables} />
    </View>
  );
};
