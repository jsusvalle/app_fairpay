import { DetailOrderResponse } from 'models';

import { NEW_ORDER_DATA } from '../new-order/new-order';

export const DETAIL_ORDER_RESPONSE_DATA: DetailOrderResponse = {
  data: {
    table_id: '12352',
    table_num: 3,
    order_details: [...NEW_ORDER_DATA],
  },
};
