import { FC, useContext } from "react";

import { OpenTable } from "../open-table/open_table";
import { OrderView } from "../order-view/order-view";
import { MenuView } from "../menu-view/menu-view";

import { CreateOrderContext, CreateOrderContextType } from "context";

const ComponentToRender = {
  "table-view": <OpenTable />,
  "order-view": <OrderView />,
  "menu-view": <MenuView />,
};

export const CreateOrderOnchestrator: FC = () => {
  const { view } = useContext(CreateOrderContext) as CreateOrderContextType;

  return <>{ComponentToRender[view]}</>;
};
