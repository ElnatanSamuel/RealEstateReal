import { Button, ScrollView, Text, View } from "react-native";
import React from "react";

import HouseCard from "../../../components/HouseCard";

import { useSelector } from "react-redux";
import {selectHouseData} from "../../../slices/houseSlice";

const Home = () => {

  const houseData = useSelector(selectHouseData)

  const filters = ["bedrooms", "bathrooms", "property type", "price"]

  return (
    <>
      <View className="w-full h-fit py-5">
          <ScrollView
          className=""
          decelerationRate="fast"
          horizontal={true}
          showsHorizontalScrollIndicator={false}>
            
          <View className="flex-row items-center justify-center px-5">
   
            <View className="rounded-2xl p-3 border ml-5 px-4 w-fit h-auto">
              <Text className="capitalize">Filter</Text>
            </View>

              {filters.map((filter, index) => (
                <View key={index} className="rounded-2xl p-3 border ml-5 px-4 w-fit h-auto">
                  <Text className="capitalize">{filter}</Text>
                </View>
              ))}
              
          </View>          
          </ScrollView>
      </View>

      <ScrollView
          className="flex-1 gap-0"
          decelerationRate="fast"
          vertical={true}
          showsVerticalScrollIndicator={false}>
          {houseData.map((house, index) => ( <HouseCard house={house} key={index} />))}
      </ScrollView>
  </>
  );
};

export default Home;