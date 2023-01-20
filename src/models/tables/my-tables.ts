export type TablesData = {
  _id: string;
  nro_table: number;
  state: 'empty' | 'pending' | 'served';
  nro_guest: number;
};

export type StateTables = {
  serving_tables: number;
  num_tables_pending: number;
  num_tables_served: number;
};

export type MyTablesResponse = {
  state_tables: StateTables;
  tables: TablesData[];
};
