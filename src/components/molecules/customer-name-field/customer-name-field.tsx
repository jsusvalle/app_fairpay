import { FC, useRef, useState } from "react";
import { View, TouchableOpacity, TextInput } from "react-native";

import { Icon } from "components/atoms";

type CustomerNameFieldProps = {
  valueName: string;
  onChange: (name: string) => void;
};

export const CustomerNameField: FC<CustomerNameFieldProps> = ({
  valueName,
  onChange,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const inputName = useRef<TextInput>(null);

  const handlePressToFocus = () => {
    if (inputName.current != null) {
      inputName.current.focus();
    }
  };

  return (
    <>
      <View className="mt-6 flex flex-row justify-between">
        <TextInput
          value={valueName}
          onChangeText={(text) => {
            onChange(text);
          }}
          ref={inputName}
          placeholder="Enter name"
          className={`w-60 px-4 border-0 text-4xl ${
            isFocused && "border-b-2 border-x-0 border-t-0 ring-0"
          }`}
          onBlur={() => setIsFocused(false)}
          onFocus={() => setIsFocused(true)}
        />

        <TouchableOpacity onPress={handlePressToFocus}>
          <Icon type="pencil" size={40} />
        </TouchableOpacity>
      </View>
    </>
  );
};
