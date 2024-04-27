import {
  
  StyleSheet,
  TextInput,
  Button,
  FlatList,
  FlatListComponent,
  RefreshControl,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState, useRef } from "react";

import HouseCard from "../../../components/HouseCard";
import BottomSheet, {
  BottomSheetScrollView,
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";

import { useSelector } from "react-redux";
import { selectHouseData } from "../../../slices/houseSlice";
import FontAwesome from "@expo/vector-icons/FontAwesome";

// add listing import
// import { useState, useRef, useEffect } from "react";
// import {
//   Button,
//   View,
//   StyleSheet,
//   ScrollView,
//   TextInput,
//   Text,
// } from "react-native";

import * as ImagePicker from "expo-image-picker";
import * as Location from "expo-location";
import Checkbox from "expo-checkbox";

import SegmentedControl from "@react-native-segmented-control/segmented-control";

import SurfaceAdd from "../../../components/SurfaceAdd";
import LabelInput from "../../../components/LabelInput";
import ScrollRoomNumber from "../../../components/ScrollRoomNumber";

const Home = () => {

  const [image, setImage] = useState(null);
  const [price, setPrice] = useState(null);
  const [location, setLocation] = useState(null);
  const [address, setAddress] = useState(null);
  const [homeSize, setHomeSize] = useState(null);
  const [lotSize, setLotSize] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isChecked, setChecked] = useState(false);

  const houseData = useSelector(selectHouseData);
  const searchBottomSheetRef = useRef(null)
  const optionsBottomSheetRef = useRef(null)

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const getLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    // let { longitude,latitude} = await Location.getCurrentPositionAsync({});
    setLocation(location.coords.longitude + " , " + location.coords.latitude);
    // setLocation({lng:longitude, lat:latitude});
  };

  const rooms = ["Bedroom", "Livingroom", "Kitchen", "Bathroom", "Diningroom"];
  const PropertyType = ["Any", "House", "Apartment", "Condo", "Real Estate"];


  function handlePresentModal() {
    searchBottomSheetRef.current?.present();
    searchBottomSheetRef.current?.dismiss();
  } 
  
  function handleOptionsPresentModal() {
    optionsBottomSheetRef.current?.present();
  }

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
                onPress={()=>{handlePresentModal()}}
                className={`rounded-2xl  p-3  ml-5 px-4 w-fit h-auto ${
                  selectedFilter === filter ? selectedFilterStyle : null
                }`}
                // onPress={() => {
                //   setSelectedFilter(filter);
                // }}
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

            {/* search modal  */}
      <BottomSheetModalProvider>
        <BottomSheetModal
          className="h-full"
          ref={searchBottomSheetRef}
          snapPoints={["30%","50%","70%","100%"]}
          enablePanDownToClose={true}
          animateOnMount={true}
        >
          <BottomSheetScrollView
            className="pt-5 h-full "
            decelerationRate="fast"
            vertical={true}
            showsVerticalScrollIndicator={false}>
          {/* begin */}

          <View className=" lex-1 text-5xl h-full bg-white">
      <SegmentedControl
        values={["Buy", "Rent"]}
        selectedIndex={selectedIndex}
        onChange={(event) => {
          setSelectedIndex(event.nativeEvent.selectedSegmentIndex);
        }}
      />

      <ScrollView className="px-2 pb-10">
        <View className="flex-col  mt-4">
          {/* Image Picker */}
          {/* <View>
            <Text className="text-2xl font-bold">Pick Your Images</Text>
            <ScrollView
              decelerationRate="fast"
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <View className="flex-row mt-2">
                {rooms.map((room) => (
                  <SurfaceAdd title={room} pickImage={pickImage} />
                ))}
              </View>
            </ScrollView>
          </View> */}

          {/* sizes */}
          <View className="px-2">
            <View className="flex-row gap-x-4 mt-8">
              {/* Price Min */}
              <View className="flex-1">
                <LabelInput title="Price Min" customStyles="w-full" />
              </View>

              <View className="flex-1">
                <LabelInput title="Price Max" customStyles="w-full" />
              </View>
              {/* Price Max */}
            </View>

            {/* location */}
            <View className="flex-row items-end mt-4 gap-x-4 relative">
              <View className="flex-1">
                <LabelInput title="Address" customStyles="w-full" />
              </View>
              <View className="flex-1 absolute right-0">
                <TouchableOpacity
                  className=" bg-black p-[17px] rounded-r-md  w-full items-center"
                  onPress={getLocation}
                  title=""
                >
                  <Text className="text-white font-bold">Use my Location</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* bedroom */}
            <View className="mt-6">
              <ScrollRoomNumber title="Bedrooms" />
            </View>

            {/* bathroom */}
            <View className="mt-6">
              <ScrollRoomNumber title="Bathrooms" />
            </View>

            {/* Price */}
            {/* <View className="flex-row gap-x-4 mt-4 items-center relative">
              <View className="flex-1">
                <LabelInput title="Price" customStyles={"w-full"} />
              </View>
              <View className="absolute right-4 top-[55%]">
                <Text className=" text-xl">ETB</Text>
              </View>
            </View> */}

            {/* PropertyType */}
            <View className="mt-6">
              <TouchableOpacity onPress={handleOptionsPresentModal} className="">
                <Text className="text-lg opacity-80">Property Type</Text>
                <Text className="text-sm opacity-60">Any</Text>
              </TouchableOpacity>
            </View>

            {/* Features */}
            <View className="mt-6">
              <TouchableOpacity onPress={handleOptionsPresentModal}>
                <Text className="text-lg opacity-80">Features</Text>
                <Text className="text-sm opacity-60">Any</Text>
              </TouchableOpacity>
            </View>

            
            <TouchableOpacity
                  className=" bg-black p-[17px] rounded-full mt-4 w-full items-center"
                  onPress={handlePresentModal}
                  title="">

                  <Text className="text-white font-bold">Search</Text>
            
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
        {/* end */}
        
        {/* options bottom sheet */}
      <BottomSheetModalProvider>
        <BottomSheetModal
          className="h-full"
          ref={optionsBottomSheetRef}
          snapPoints={["53%,100%"]}
          enablePanDownToClose={true}
          animateOnMount={true}
        >
          <BottomSheetScrollView
            className="pt-5 h-full "
            decelerationRate="fast"
            vertical={true}
            showsVerticalScrollIndicator={false}
          >
            <View className="px-4">
              <Text className="text-xl opacity-80  font-bold my-4">
                Property Type
              </Text>
              {PropertyType.map((property) => {
                return (
                  <View className="flex-row justify-between mb-5 ">
                    <Text className="text-lg opacity-70">{property}</Text>
                    <Checkbox
                      value={isChecked}
                      className="opacity-80"
                      onValueChange={setChecked}
                    />
                  </View>
                );
              })}
              <TouchableOpacity className="bg-black w-full  py-5 rounded-xl">
                <Text className="text-white text-center font-bold">Apply</Text>
              </TouchableOpacity>
            </View>
          </BottomSheetScrollView>
        </BottomSheetModal>
      </BottomSheetModalProvider>
    </View>
  
            
          </BottomSheetScrollView>
        </BottomSheetModal>
      </BottomSheetModalProvider>


    </>
  );
};

export default Home;