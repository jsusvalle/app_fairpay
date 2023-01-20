import { MenuItemData, MenuCategory, MenuResponse } from 'models';

const MENU_MAINS_DATA: MenuItemData[] = [
  {
    _id: '21453',
    name: 'Cheese Burguer',
    price: '5.00',
  },
  {
    _id: '94283',
    name: 'Bourbon Bacon Burguer',
    price: '10.00',
  },
  {
    _id: '93263',
    name: 'Bacon Cheeseburguer',
    price: '6.00',
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

const MENU_DRINKS_DATA: MenuItemData[] = [
  {
    _id: '64323',
    name: 'Bottle water 400ml',
    price: '4.00',
  },
  {
    _id: '63423',
    name: 'Cocacola 400ml',
    price: '5.00',
  },
  {
    _id: '93846',
    name: 'Hatsu 400ml',
    price: '4.00',
  },
];

const MENU_APPETIZERS_DATA: MenuItemData[] = [
  {
    _id: '32533',
    name: 'Onion Rings',
    price: '3.00',
  },
  {
    _id: '53643',
    name: 'Fries',
    price: '5.00',
  },
  {
    _id: '65234',
    name: 'Cheddar Tots',
    price: '8.00',
  },
];

const MENU_MOST_POPULAR_DATA: MenuItemData[] = [
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

export const MENU_CATEGORY_DATA: MenuCategory = {
  'Most Popular': [...MENU_MOST_POPULAR_DATA],
  Mains: [...MENU_MAINS_DATA],
  Appetizers: [...MENU_APPETIZERS_DATA],
  Drinks: [...MENU_DRINKS_DATA],
};

export const MENU_RESPONSE_DATA: MenuResponse = {
  data: MENU_CATEGORY_DATA,
};
