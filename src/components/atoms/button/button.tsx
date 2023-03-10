import { FC } from "react";
import { Text, TouchableHighlight } from "react-native";

type ButtonProps = {
  isLoading?: boolean;
  handlePress: () => void;
  children: string;
  isDisabled?: boolean;
};

export const Button: FC<ButtonProps> = ({
  children,
  handlePress,
  isLoading,
  isDisabled,
}) => {
  return (
    <TouchableHighlight
      onPress={handlePress}
      className={
        "w-full mb-4 my-4 px-4 py-4 rounded-md bg-green-400 flex justify-center items-center"
      }
      disabled={isLoading || isDisabled}
    >
      <Text className="text-white font-semibold text-xl">
        {isLoading ? "Loading..." : children}
      </Text>
    </TouchableHighlight>
  );
};
