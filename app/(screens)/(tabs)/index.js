import {
  Button,
  FlatList,
  FlatListComponent,
  RefreshControl,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";

import HouseCard from "../../../components/HouseCard";

import { useSelector } from "react-redux";
import { selectHouseData } from "../../../slices/houseSlice";

import FontAwesome from "@expo/vector-icons/FontAwesome";

const Home = () => {
  const houseData = useSelector(selectHouseData);

  const filters = [
    "all filters",
    "bedrooms",
    "bathrooms",
    "property type",
    "price",
  ];
  const [selectedFilterStyle, setSelectedFilterStyle] =
    useState("bg-secondary-200");
  const [selectedFilterTextStyle, setSelectedFilterTextStyle] =
    useState("text-black");
  const [selectedFilter, setSelectedFilter] = useState("all filters");

  const handleSelectedFilter = (filter) => {
    setSelectedFilterStyle(filter);
  };

  return (
    <>
      <View className="w-full bg-white h-fit py-4">
        <ScrollView
          className=""
          decelerationRate="fast"
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          <View className="flex-row items-center justify-center">
            {filters.map((filter, index) => (
              <TouchableOpacity
                key={index}
                className={`rounded-2xl  p-3  ml-5 px-4 w-fit h-auto ${
                  selectedFilter === filter ? selectedFilterStyle : null
                }`}
                onPress={() => {
                  setSelectedFilter(filter);
                }}
              >
                <Text
                  className={`capitalize font-bold ${
                    selectedFilter === filter
                      ? selectedFilterTextStyle
                      : "text-gray-500"
                  }`}
                >
                  {filter}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>

      <ScrollView
        className="flex-1 gap-0 bg-white"
        decelerationRate="fast"
        vertical={true}
        showsVerticalScrollIndicator={false}
      >
        <FlatList
          data={houseData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <HouseCard house={item} />}
        />
      </ScrollView>
    </>
  );
};

export default Home;
