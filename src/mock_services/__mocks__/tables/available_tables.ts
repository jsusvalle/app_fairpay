import { AvailableTablesData, AvailableTablesResponse } from 'models';

export const AVAILABLE_TABLES_DATA: AvailableTablesData[] = [
  {
    _id: '98938',
    nro_table: 1,
  },
  {
    _id: '74334',
    nro_table: 3,
  },
  {
    _id: '92847',
    nro_table: 6,
  },
  {
    _id: '57453',
    nro_table: 7,
  },
  {
    _id: '13435',
    nro_table: 12,
  },
];

export const AVAILABLE_TABLES_RESPONSE_DATA: AvailableTablesResponse = {
  data: [...AVAILABLE_TABLES_DATA],
};
