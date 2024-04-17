import React from 'react'
import { View, Text,Image } from "react-native";
import { Link } from "expo-router";


const HouseCard = ({room}) => {
  return (
    <Link href="/details">
      <View
        className="relative w-screen border items-center justify-center rounded-xl ml-4"
      >
        <Image
          source={room.image}
          className=" w-full h-auto rounded-t-xl z-10"
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
  )
}

export default HouseCard