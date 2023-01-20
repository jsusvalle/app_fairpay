import {
  NewOrderRequest,
  Customer,
  OrderCustomer,
  NewOrderResponse,
} from 'models';

export const ORDER_CUSTOMER_DATA: OrderCustomer[] = [
  {
    _id: '21453',
    name: 'Cheese Burguer',
    price: '5.00',
  },
  {
    _id: '21353',
    name: 'SlamBurguer',
    price: '7.00',
  },
  {
    _id: '27453',
    name: 'Spicy Burguer',
    price: '8.00',
  },
  {
    _id: '29453',
    name: 'Double Cheese Burguer',
    price: '10.00',
  },
];

export const NEW_ORDER_DATA: Customer[] = [
  {
    name_guest: 'Jess',
    _id: '1',
    note: '',
    order_customer: [ORDER_CUSTOMER_DATA[0]],
  },
  {
    name_guest: 'Erick',
    _id: '2',
    note: '',
    order_customer: [ORDER_CUSTOMER_DATA[1]],
  },
  {
    name_guest: 'Nicolas',
    _id: '3',
    note: '',
    order_customer: [ORDER_CUSTOMER_DATA[2]],
  },
  {
    name_guest: 'Sophie',
    _id: '4',
    note: '',
    order_customer: [ORDER_CUSTOMER_DATA[3]],
  },
];

export const NEW_ORDER_REQUEST_DATA: NewOrderRequest = {
  data: {
    table_id: '98938',
    nro_guest: 4,
    order: [...NEW_ORDER_DATA],
  },
};

export const NEW_ORDER_RESPONSE_DATA: NewOrderResponse = {
  data: {
    message: 'Success new order',
  },
};
