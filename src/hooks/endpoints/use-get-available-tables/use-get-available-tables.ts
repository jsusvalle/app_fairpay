import { useQuery, UseQueryOptions } from "react-query";

import type { AvailableTablesResponse } from "../../../models";
import { getAvailableTablesHandler } from "../../../mock_services";

type TQueryFnData = AvailableTablesResponse;
type TError = any;

type TOptions = UseQueryOptions<TQueryFnData, TError>;

export const useGetAvailableTables = (options?: TOptions) => {
  return useQuery<TQueryFnData, TError>(
    ["available_tables"],
    () => getAvailableTablesHandler() as any,
    options
  );
};
