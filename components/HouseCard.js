import React from 'react'
import { View, Text,Image } from "react-native";
import { Link } from "expo-router";
import { ScrollView } from 'react-native-gesture-handler';
import icon from "../constants/icon";

const HouseCard = ({house}) => {

  return (

    <View className="relative w-screen border">
        
        {/* <Link href= "/details"> */}
        <View className="relative">

          <Image
            source={house.image}
            className="w-full h-auto"
            />

        <Image
          source={icon.bookmarkicon}
          className="w-6 h-6 absolute bottom-5 right-5"
          resizeMode="contain"
          />
        </View>
        {/* </Link> */}

        <View className="cborder w-full">

          <View className="flex-row gap-5">
            <Link href="/profile" className="bg-white border--b-4 w-10 h-full" />

            <Link href="/details">
              <View className="flex-row items-center gap-2">
                <Text className="p-1 bg-green-600 rounded-full w-1 h-1"></Text>
                <Text className=" text-green-500 text-xs ">
                  Available
                </Text>
              </View>

              <View className="flex-col gap-2 opacity-90">
                <Text className="text-2xl font-extrabold">
                  ETB {house.price}
                </Text>
                <Text className="text-sm font-bold">
                  {house.bedrooms}BD . {house.bathrooms}BA . {house.houseSize}SQFT
                </Text>
              </View>
            </Link>
          
          </View>

        </View>
      
      
      </View>

  )
}

export default HouseCard