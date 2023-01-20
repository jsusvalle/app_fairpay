import { OrderCustomer } from 'models';

export type OrderCheckDetails = {
  order_details: OrderCustomer[];
  name_customer: string;
  tip: string;
  total: string;
};

export type OrderCheckResponse = {
  data: {
    table_id: string;
    table_num: number;
    tip_total: string;
    grand_total: string;
    order_check_details: OrderCheckDetails[];
  };
};
