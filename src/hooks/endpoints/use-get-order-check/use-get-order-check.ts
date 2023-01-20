import { useQuery, UseQueryOptions } from "react-query";

import type { OrderCheckResponse } from "../../../models";
import { getOrderCheckHandler } from "../../../mock_services";

type TQueryFnData = OrderCheckResponse;
type TError = any;

type TOptions = UseQueryOptions<TQueryFnData, TError>;

export const useGetOrderCheck = (orderId: string, options?: TOptions) => {
  return useQuery<TQueryFnData, TError>(
    ["check_order"],
    () => getOrderCheckHandler() as any,
    options
  );
};
