import React from "react";
import { Text, TextInput, View } from "react-native";

const LabelInput = ({ title, customStyles }) => {
  return (
    <View className="flex-col justify-center">
      <Text className="text-lg opacity-80 mb-2"> {title}</Text>

      <TextInput
        className={`border border-black/50 ${customStyles} px-2 py-3 rounded-md`}
      />
    </View>
  );
};

export default LabelInput;
