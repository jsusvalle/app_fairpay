import { useQuery, UseQueryOptions } from "react-query";

import type { DetailOrderResponse } from "../../../models";
import { getDetailOrderHandler } from "../../../mock_services";

type TQueryFnData = DetailOrderResponse;
type TError = any;

type TOptions = UseQueryOptions<TQueryFnData, TError>;

export const useGetDetailOrder = (orderId: string, options?: TOptions) => {
  return useQuery<TQueryFnData, TError>(
    ["detail_order"],
    () => getDetailOrderHandler() as any,
    options
  );
};
