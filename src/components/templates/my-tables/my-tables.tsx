import { FC } from "react";
import { View } from "react-native";

import { MyTablesState, MyTablesList } from "components/organisms";

import { useGetMyTables } from "hooks/endpoints";

export const Mytables: FC = () => {
  const { data } = useGetMyTables();

  return (
    <View className="container px-6">
      <MyTablesState info={data?.state_tables} />

      <MyTablesList data={data?.tables} />
    </View>
  );
};
