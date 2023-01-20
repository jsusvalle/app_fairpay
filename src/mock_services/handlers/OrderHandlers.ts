import { delay } from "../../lib";
import {
  NEW_ORDER_RESPONSE_DATA,
  MENU_RESPONSE_DATA,
  DETAIL_ORDER_RESPONSE_DATA,
  ORDER_CHECK_RESPONSE_DATA,
} from "../__mocks__";

export const postCreateOrderHandler = () => {
  return delay(100, NEW_ORDER_RESPONSE_DATA);
};

export const getOrderCheckHandler = () => {
  return delay(100, ORDER_CHECK_RESPONSE_DATA);
};

export const getMenuByCategory = () => {
  return delay(100, MENU_RESPONSE_DATA);
};

export const getDetailOrderHandler = () => {
  return delay(100, DETAIL_ORDER_RESPONSE_DATA);
};

export const changeOrderStateHandler = () => {
  return delay(100, { data: { message: "Success" } });
};
