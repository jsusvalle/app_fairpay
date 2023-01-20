import { delay } from "../../lib";

import {
  MY_TABLES_RESPONSE_DATA,
  AVAILABLE_TABLES_RESPONSE_DATA,
} from "mock_services";

export const getMyTablesHandler = () => {
  return delay(100, MY_TABLES_RESPONSE_DATA);
};

export const getAvailableTablesHandler = () => {
  return delay(100, AVAILABLE_TABLES_RESPONSE_DATA);
};
