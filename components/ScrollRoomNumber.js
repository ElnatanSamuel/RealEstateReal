import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useState } from "react";

const ScrollRoomNumber = ({ title }) => {
  const [isSelected, setIsSelected] = useState("Any");
  const [isSelectedStyle, setIsSelectedStyle] = useState("bg-black text-white");

  const rooms = ["Any", "1", "2", "3", "4", "5+"];

  const handleSelected = (item) => {
    setIsSelected(item);
  };

  return (
    <View>
      <Text className=" text-white text-lg">{title}</Text>
      <ScrollView
        className="mt-4 gap-x-4"
        decelerationRate="fast"
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        {rooms.map((item, index) => (
          <TouchableOpacity onPress={() => setIsSelected(item)}>
            <Text
              className={`${
                isSelected === item ? isSelectedStyle : "bg-white text-black"
              } p-5 ${
                item === "Any" ? "rounded-3xl" : "rounded-full"
              }  border px-6 w-auto`}
            >
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default ScrollRoomNumber;
