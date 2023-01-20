import { delay } from "../../lib";
import {
  NEW_ORDER_RESPONSE_DATA,
  MENU_RESPONSE_DATA,
  DETAIL_ORDER_RESPONSE_DATA,
  ORDER_CHECK_RESPONSE_DATA,
} from "../__mocks__";

export const postCreateOrderHandler = () => {
  return delay(500, NEW_ORDER_RESPONSE_DATA);
};

export const getOrderCheckHandler = () => {
  return delay(500, ORDER_CHECK_RESPONSE_DATA);
};

export const getMenuByCategory = () => {
  return delay(500, MENU_RESPONSE_DATA);
};

export const getDetailOrderHandler = () => {
  return delay(500, DETAIL_ORDER_RESPONSE_DATA);
};

export const changeOrderStateHandler = () => {
  return delay(500, { data: { message: "Success" } });
};
