import { FC, createContext, useState } from "react";

import { NewOrder } from "../../models";
import {
  CreateOrderProps,
  CreateOrderContextType,
  viewStepsType,
  saveTableType,
  addOrderCustomerType,
  changeViewType,
  editOrderCustomerType,
} from "./create-order-context.types";

import {
  createOrderByNroGuest,
  editOrderByCustomer,
  deleteOrderCustomer,
} from "../../utils";

export const CreateOrderContext = createContext<CreateOrderContextType | null>(
  null
);

export const CreateOrderProvider: FC<CreateOrderProps> = ({ children }) => {
  const [data, setData] = useState<NewOrder>({
    table_id: "",
    nro_guest: 0,
    order: [],
  });
  const [view, setView] = useState<viewStepsType>("table-view");
  const [currentCustomer, setCurrentCustomer] = useState<string>("");

  const changeView: changeViewType = (view_path) => {
    setView(view_path);
  };

  const editOrderCustomer: editOrderCustomerType = (id, action) => {
    if (action === "delete") {
      setData((data) => {
        return {
          ...data,
          order: deleteOrderCustomer([...data.order], id),
        };
      });
      return;
    }

    setCurrentCustomer(id);
    changeView("menu-view");
  };

  const saveTable: saveTableType = (dataTable) => {
    setData((data) => {
      return {
        ...data,
        ...dataTable,
        order: createOrderByNroGuest(dataTable.nro_guest),
      };
    });
    setView("order-view");
  };

  const addOrderCustomer: addOrderCustomerType = (customerData) => {
    setData((data) => {
      return {
        ...data,
        order: editOrderByCustomer(
          [...data.order],
          customerData,
          currentCustomer
        ),
      };
    });
    setView("order-view");
  };

  return (
    <CreateOrderContext.Provider
      value={{
        data,
        view,
        saveTable,
        addOrderCustomer,
        changeView,
        currentCustomer,
        editOrderCustomer,
      }}
    >
      {children}
    </CreateOrderContext.Provider>
  );
};
