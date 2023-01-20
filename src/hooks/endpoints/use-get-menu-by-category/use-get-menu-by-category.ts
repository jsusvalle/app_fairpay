import { useQuery, UseQueryOptions } from "react-query";

import type { MenuResponse } from "../../../models";
import { getMenuByCategory } from "../../../mock_services";

type TQueryFnData = MenuResponse;
type TError = any;

type TOptions = UseQueryOptions<TQueryFnData, TError>;

export const useGetMenuByCategory = (options?: TOptions) => {
  return useQuery<TQueryFnData, TError>(
    ["menu"],
    () => getMenuByCategory() as any,
    options
  );
};
