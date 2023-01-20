import { TablesData, StateTables, MyTablesResponse } from 'models';

const TABLES_DATA: TablesData[] = [
  {
    _id: '16435',
    nro_table: 1,
    state: 'empty',
    nro_guest: 0,
  },
  {
    _id: '53453',
    nro_table: 2,
    state: 'pending',
    nro_guest: 6,
  },
  {
    _id: '34535',
    nro_table: 3,
    state: 'empty',
    nro_guest: 0,
  },
  {
    _id: '74532',
    nro_table: 4,
    state: 'served',
    nro_guest: 8,
  },
  {
    _id: '34653',
    nro_table: 5,
    state: 'served',
    nro_guest: 2,
  },
  {
    _id: '63262',
    nro_table: 6,
    state: 'empty',
    nro_guest: 0,
  },
  {
    _id: '63423',
    nro_table: 7,
    state: 'empty',
    nro_guest: 0,
  },
  {
    _id: '53253',
    nro_table: 8,
    state: 'pending',
    nro_guest: 2,
  },
  {
    _id: '64323',
    nro_table: 9,
    state: 'pending',
    nro_guest: 6,
  },
  {
    _id: '346433',
    nro_table: 10,
    state: 'pending',
    nro_guest: 8,
  },
  {
    _id: '67235',
    nro_table: 11,
    state: 'pending',
    nro_guest: 6,
  },
  {
    _id: '36323',
    nro_table: 12,
    state: 'empty',
    nro_guest: 0,
  },
];

export const STATE_TABLES_DATA: StateTables = {
  serving_tables: 12,
  num_tables_pending: 5,
  num_tables_served: 2,
};

export const MY_TABLES_RESPONSE_DATA: MyTablesResponse = {
  state_tables: { ...STATE_TABLES_DATA },
  tables: [...TABLES_DATA],
};
