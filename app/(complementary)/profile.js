import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import ResultList from '../../components/ResultList';

import { useSelector } from "react-redux";
import {selectHouseData} from "../../slices/houseSlice";
import { Result } from 'postcss';


const profile = () => {

  const houseData = useSelector(selectHouseData)

  return (
    <>
    <View className="w-full h-32 z-20 bg-primary border border-b-white">
      <View className="w-24 aspect-square rounded-full bg-white border border-white relative top-1/2 p-1 bg-[url('../../assets/images/logo.png')] bg-cover bg-center">
        <View className="w-full h-full bg-green-500 rounded-full" ></View>
        
      </View>
    </View>

    <View className="cpb-5 border bg-primary">
        <ScrollView className="pt-8">
          <View className="pr-8">
            <Text className="text-white text-3xl ">John Doe</Text>
            <Text className="text-white text-sm">Addis Ababa</Text>
            <Text className="text-white text-sm mt05">Also from this client</Text>
          </View>
          <ResultList arrayData={houseData}  />
        </ScrollView>
    </View>
    </>
  )
}

export default profile