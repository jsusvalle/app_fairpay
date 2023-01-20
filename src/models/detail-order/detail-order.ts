import { OrderCustomer } from 'models';

export type OrderDetails = {
  name_guest: string;
  order_customer: OrderCustomer[];
};

export type DetailOrderResponse = {
  data: {
    table_id: string;
    table_num: number;
    order_details: OrderDetails[];
  };
};
