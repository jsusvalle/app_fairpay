import { Customer } from "../models";

export const createOrderByNroGuest = (nro_guest: number) => {
  return [...Array(nro_guest).keys()].map((i) => ({
    name_guest: `Customer ${++i}`,
    _id: `customer-${++i}`,
    note: "",
    order_customer: [],
  }));
};

export const editOrderByCustomer = (
  data: Customer[],
  customerData: Customer,
  currentCustomer: string
) => {
  return data.map((customer) => {
    if (currentCustomer === customer._id) {
      return {
        ...customerData,
        _id: currentCustomer,
      };
    }

    return customer;
  });
};

export const deleteOrderCustomer = (data: Customer[], id_customer: string) => {
  return data.map((customer) => {
    if (id_customer === customer._id) {
      return {
        ...customer,
        note: "",
        order_customer: [],
      };
    }

    return customer;
  });
};
