import { FC, useCallback } from "react";
import { View, TouchableOpacity, Text } from "react-native";

import { classNames } from "utils";

type NumGuestsProps = {
  selectedNumber: number;
  onChangeNumber: (nro: number) => void;
};

const arrayNumGuest = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export const NumGuests: FC<NumGuestsProps> = ({
  selectedNumber,
  onChangeNumber,
}) => {
  const buttonClassNames = useCallback(
    (valNumber: number) => {
      const classes = {
        "w-18 bg-white mr-2 mt-2 py-2 px-4 rounded-md border": true,
        "bg-green-50 border-green-500 ring-green-500":
          valNumber === selectedNumber,
      };

      return classNames(classes);
    },
    [selectedNumber]
  );

  const handleChange = (val: string | number) => {
    onChangeNumber(Number(val));
  };

  return (
    <View className="flex flex-col mt-6">
      <Text className="text-2xl font-semibold">No. of Guests</Text>

      <View className="flex flex-row flex-wrap mt-4">
        {arrayNumGuest.map((item) => (
          <TouchableOpacity
            key={item}
            onPress={() => handleChange(item)}
            className={buttonClassNames(item)}
          >
            <Text className="text-xl font-bold"> {item}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};
