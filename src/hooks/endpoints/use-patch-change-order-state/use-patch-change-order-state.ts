import { useMutation, UseMutationOptions } from "react-query";

import { changeOrderStateHandler } from "../../../mock_services";

type TData = {};
type TError = any;
type TVariables = {};
type TContext = unknown;

type TOptions = UseMutationOptions<TData, TError, TVariables, TContext>;

export const usePatchChangeOrderState = (
  orderId?: string,
  options?: TOptions
) => {
  return useMutation<TData, TError, TVariables, TContext>(
    () => changeOrderStateHandler() as any,
    options
  );
};
