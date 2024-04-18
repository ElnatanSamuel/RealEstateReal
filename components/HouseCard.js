import React from 'react'
import { View, Text,Image } from "react-native";
import { Link } from "expo-router";
import { ScrollView } from 'react-native-gesture-handler';

const HouseCard = ({house}) => {

  return (

    <View className="relative w-screen border">
        
        <Link href="/details">
          <Image
            source={house.image}
            className="w-full h-auto"
          />
        </Link>

      
        <View className="border w-full">

          <View className="flex-row gap-5">
            <Link href="/profile" className="bg-black w-10 h-full" />

            <View>
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
            </View>
          
          </View>

        </View>
      
      
      </View>

  )
}

export default HouseCard