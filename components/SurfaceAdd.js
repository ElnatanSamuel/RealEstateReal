import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Surface } from "react-native-paper";

const SurfaceAdd = ({ title, pickImage }) => {
  return (
    <TouchableOpacity onPress={pickImage}>
      <View className="flex-col items-center mr-4 gap-2">
        <Surface
          className="p-8 mt-2 bg-white rounded-2xl height-[80px] w-[100px] items-center justify-center"
          elevation={4}
        >
          <Text className="text-3xl">+</Text>
        </Surface>
        <Text className="text-base font-semibold text-black">{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SurfaceAdd;
