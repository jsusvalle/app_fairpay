import { FC } from "react";
import { FlatList } from "react-native";

import { TableButton } from "../../molecules";

import { TablesData } from "../../../models";

export type MyTablesListProps = {
  data?: TablesData[];
};

export const MyTablesList: FC<MyTablesListProps> = ({ data }) => {
  return (
    <FlatList
      className="mt-4"
      data={data}
      renderItem={({ item }) => <TableButton data={item} />}
      numColumns={3}
      keyExtractor={(item) => item._id}
      columnWrapperStyle={{ justifyContent: "space-between", marginBottom: 15 }}
    />
  );
};
