export type MenuItemData = {
  _id: string;
  name: string;
  price: string;
};

export type MenuCategory = {
  [name_category: string]: MenuItemData[];
};

export type MenuResponse = {
  data: MenuCategory;
};
