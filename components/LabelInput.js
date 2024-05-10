import React from "react";
import { Text, TextInput, View } from "react-native";

const LabelInput = ({ title, customStyles }) => {
  return (
    <View className="flex-col justify-center">
      <Text className="text-lg mb-2 text-white">{title}</Text>

      <TextInput
        className={`border border-white/90 ${customStyles} px-2 py-3 text-white rounded-md`}
      />
    </View>
  );
};

export default LabelInput;
