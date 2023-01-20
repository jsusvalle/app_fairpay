import { ReactNode } from "react";

import { NewOrder, Customer } from "models";

export type viewStepsType = "table-view" | "order-view" | "menu-view";

export type changeViewType = (view_path: viewStepsType) => void;

export type saveTableType = (data: {
  table_id: string;
  nro_guest: number;
  nro_table: number;
}) => void;

export type addOrderCustomerType = (customerData: Customer) => void;

export type editOrderCustomerType = (id: string, action: string) => void;

export type resetDataType = () => void;

export type CreateOrderContextType = {
  data: NewOrder;
  view: viewStepsType;
  saveTable: saveTableType;
  addOrderCustomer: addOrderCustomerType;
  changeView: changeViewType;
  currentCustomer: string;
  editOrderCustomer: editOrderCustomerType;
  resetData: resetDataType;
};

export type CreateOrderProps = {
  children: ReactNode;
};
