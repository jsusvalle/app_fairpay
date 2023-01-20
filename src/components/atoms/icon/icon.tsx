import { FC } from "react";
import MaterialIcons from "react-native-vector-icons/MaterialCommunityIcons";

type IconProps = {
  type: string;
  size?: number;
  color?: string;
};

export const Icon: FC<IconProps> = ({ type, size = 20, color = "#000" }) => {
  return <MaterialIcons name={type} size={size} color={color} />;
};
