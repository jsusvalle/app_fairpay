import { useMutation, UseMutationOptions } from "react-query";

import type { NewOrderRequest } from "../../../models";
import { postCreateOrderHandler } from "../../../mock_services";

type TData = NewOrderRequest;
type TError = any;
type TVariables = NewOrderRequest;
type TContext = unknown;

type TOptions = UseMutationOptions<TData, TError, TVariables, TContext>;

export const usePostCreateOrder = (options?: TOptions) => {
  return useMutation<TData, TError, TVariables, TContext>(
    () => postCreateOrderHandler() as any,
    options
  );
};
