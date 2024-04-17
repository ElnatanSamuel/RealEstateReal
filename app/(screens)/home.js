import { View, Text, ScrollView,Image, TouchableOpacity } from "react-native";
import React from "react";
import image from "../../constants/image";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { router } from "expo-router";

const Home = () => {
  const rooms = [
    {
      image: image.detailimg,
      title: "Bedroom",
      index: 1,
    },
    {
      image: image.detailimg,
      title: "Bedroom",
      index: 2,
    },
    {
      image: image.detailimg,
      title: "Bedroom",
      index: 3,
    },
    {
      image: image.detailimg,
      title: "Bedroom",
      index: 4,
    },
    {
      image: image.detailimg,
      title: "Bedroom",
      index: 5,
    },
  ];
  return (
    // <View className="flex-1 items-center justify-center">
    //   <Text className="text-3xl text-blue-600">
    //     <Link href="/details">Go to details</Link>
    //   </Text>
    //   <StatusBar style="auto" />
    // </View>
    <ScrollView
    decelerationRate="fast"
    vertical={true}
    showsVerticalScrollIndicator={false} >
    {rooms.map((room) => (
     <Link href="/details">
<View
        key={room.index}
        className="relative w-32 items-center justify-center rounded-xl ml-4"
      >
        <Image
          source={room.image}
          className=" w-32 h-20 rounded-t-xl z-10"
        />
        <View className="mt-2">
          <View className="flex-row items-center gap-2">
            <Text className="p-1 bg-green-600 rounded-full w-1 h-1"></Text>

            <Text className=" text-green-500 text-xs">
              Available
            </Text>
          </View>
          <View className="flex-col gap-2 opacity-90 mt-2">
            <Text className="text-sm font-extrabold text-gray-300">
              ETB 200,000
            </Text>
            <Text className="text-xs  text-gray-300">
              3BD . 3BA . 1,882SQFT
            </Text>
          </View>
        </View>
      </View>
      </Link>
    ))}
  </ScrollView>
  );
};

export default Home;
