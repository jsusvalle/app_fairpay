import { useQuery, UseQueryOptions } from "react-query";

import type { MyTablesResponse } from "../../../models";
import { getMyTablesHandler } from "../../../mock_services";

type TQueryFnData = MyTablesResponse;
type TError = any;

type TOptions = UseQueryOptions<TQueryFnData, TError>;

export const useGetMyTables = (options?: TOptions) => {
  return useQuery<TQueryFnData, TError>(
    ["my_tables"],
    () => getMyTablesHandler() as any,
    options
  );
};
