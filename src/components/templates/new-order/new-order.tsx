import { FC } from "react";

import { CreateOrderOnchestrator } from "components/organisms";
import { CreateOrderProvider } from "context";

export const CreateOrder: FC = () => {
  return (
    <CreateOrderProvider>
      <CreateOrderOnchestrator />
    </CreateOrderProvider>
  );
};
