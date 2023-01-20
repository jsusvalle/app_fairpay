export type OrderCustomer = {
  _id: string;
  name: string;
  price?: string;
};

export type Customer = {
  name_guest: string;
  _id: string;
  note: string;
  order_customer: OrderCustomer[];
};

export type NewOrder = {
  table_id: string;
  nro_guest: number;
  nro_table?: number | null;
  order: Customer[];
};

export type NewOrderRequest = {
  data: NewOrder;
};

export type NewOrderResponse = {
  data: {
    message: string;
  };
};
