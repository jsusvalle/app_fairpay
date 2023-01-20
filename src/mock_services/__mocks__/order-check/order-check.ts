import { OrderCheckDetails, OrderCheckResponse } from 'models';

import { ORDER_CUSTOMER_DATA } from '../new-order/new-order';

export const ORDER_CHECK_DETAILS_DATA: OrderCheckDetails[] = [
  {
    name_customer: 'Jess',
    tip: '3.00',
    total: '30.00',
    order_details: [ORDER_CUSTOMER_DATA[0]],
  },
  {
    name_customer: 'Erick',
    tip: '3.00',
    total: '60.00',
    order_details: [ORDER_CUSTOMER_DATA[0]],
  },
  {
    name_customer: 'Nicolas',
    tip: '3.00',
    total: '40.00',
    order_details: [ORDER_CUSTOMER_DATA[0]],
  },
  {
    name_customer: 'Sophie',
    tip: '3.00',
    total: '50.00',
    order_details: [ORDER_CUSTOMER_DATA[0]],
  },
];

export const ORDER_CHECK_RESPONSE_DATA: OrderCheckResponse = {
  data: {
    table_id: '12352',
    table_num: 3,
    tip_total: '40.00',
    grand_total: '210.00',
    order_check_details: [...ORDER_CHECK_DETAILS_DATA],
  },
};
