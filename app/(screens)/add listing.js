import { useState, useRef, useEffect } from "react";
import BottomSheet, {BottomSheetModal, BottomSheetModalProvider,useBottomSheet } from '@gorhom/bottom-sheet';
import { Button, Image, View, StyleSheet, ScrollView, TextInput } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Surface, Text } from "react-native-paper";
import SurfaceAdd from "../../components/SurfaceAdd";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as Location from 'expo-location';

// import LabelInput from "../../components/LabelInput";

export default function ImagePickerExample() {

  const [image, setImage] = useState(null);
  const [price, setPrice] =  useState(null)
  const [location, setLocation] =  useState(null)
  const [address, setAddress] =  useState(null)
  const [homeSize, setHomeSize] =  useState(null)
  const [lotSize, setLotSize] =  useState(null)

  const [errorMsg, setErrorMsg] = useState(null);

  const searchBottomSheetRef = useRef(null)

  useEffect(() => {
      
  },[location])

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
    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied');
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    // let { longitude,latitude} = await Location.getCurrentPositionAsync({});
    setLocation(location.coords.longitude +" , "+ location.coords.latitude );
    // setLocation({lng:longitude, lat:latitude});
  }

  const rooms = ["bedroom", "livingroom", "kitchen", "bathroom", "diningroom"];

  function handlePresentModal () { 
      searchBottomSheetRef.current?.present()
  }

  return (
    <View className="mt-2 px-2 flex-1 text-5xl">

    <ScrollView>
        <View className="flex-col gap-10 pb-12">

            {/* Image Picker */}
            <View>

            <Text className="text-2xl font-bold">Pick an Image</Text>
                <ScrollView
                    decelerationRate="fast"
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}>
                    
                    <View className="flex-row ">
                    {rooms.map((room) => (
                        <SurfaceAdd title={room} pickImage={pickImage} />
                        ))}
                    </View>
                
                </ScrollView>
            </View>

            {/* location */}
            <View className="flex-col" >
                <View className="flex-row  justify-between">
                    <View>
                        <Text> Location </Text>
                        <TextInput className="border text-xl w-40 rounded-2xl p-2" 
                        onChangeText={setLocation}
                        value={location}/>
                    </View>

                    <View>
                        <Text> Address </Text>
                        <TextInput className="border text-xl w-40 rounded-2xl p-2" 
                        onChangeText={setAddress}
                        value={address}/>
                    </View>
                </View>

                <Button className="" onPress={getLocation}  title="Use my Location"/>
            </View>

            {/* Price */}
            <View>
                <Text> Price </Text>
                
                <View className="flex-row items-center gap-2">

                <TextInput className="border text-xl w-40 rounded-2xl p-2" 
                    onChangeText={setPrice}
                    inputMode="numeric"
                    cursorColor={'black'}
                    placeholder="Price"
                    value={price}/>
                <Text className=" text-3xl">ETB</Text>
                </View>
            </View>

            {/* bedroom */}
            <View>
            <Text>Bedrooms </Text>
                <ScrollView
                className=""
                    decelerationRate="fast"
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}>
                    {/* <View className=""> */}
                    
                    {/* <View  className="rounded-2xl p-3 border ml-5 px-4 w-fit h-auto">
                  <Text className="capitalize">sdsdf</Text>
                </View> */}

                        <Text className=" bg-black text-white p-5  rounded-full  border ml-5 px-6 w-auto">Any</Text>
                        <Text className=" bg-black text-white p-5  rounded-full  border ml-5 px-6 w-auto">1</Text>
                        <Text className=" bg-white text-black p-5  rounded-full  border ml-5 px-6 w-auto">2</Text>
                        <Text className=" bg-white text-black p-5  rounded-full  border ml-5 px-6 w-auto">3</Text>
                        <Text className=" bg-white text-black p-5  rounded-full  border ml-5 px-6 w-auto">4+</Text>
                    {/* </View> */}
                </ScrollView>
            </View>

            {/* bathroom */}
            <View>
            <Text>Bathrooms </Text>

                <ScrollView
                    decelerationRate="fast"
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}>
                        <Text className=" bg-black text-white p-5  rounded-full  border ml-5 px-6 w-auto">Any</Text>
                        <Text className=" bg-black text-white p-5  rounded-full  border ml-5 px-6 w-auto">1</Text>
                        <Text className=" bg-white text-black p-5  rounded-full  border ml-5 px-6 w-auto">2</Text>
                        <Text className=" bg-white text-black p-5  rounded-full  border ml-5 px-6 w-auto">3</Text>
                        <Text className=" bg-white text-black p-5  rounded-full  border ml-5 px-6 w-auto">4+</Text>

                </ScrollView>
            </View>

            {/* Homesize */}
            <View>
                <Text> Home Size </Text>
            
                <TextInput className="border text-xl w-1/2 rounded-2xl p-2" 
                onChangeText={setHomeSize}
                inputMode="numeric"
                value={homeSize}/>
            </View>

            {/* Lotsize */}
            <View>
                <Text> Lot Size </Text>
                
                <TextInput className="border text-xl w-1/2 rounded-2xl p-2" 
                onChangeText={setLotSize}
                inputMode="numeric"
                placeholder={lotSize}
                value={lotSize}/>
            </View>

            {/* PropertyType */}
            <TouchableOpacity onPress={handlePresentModal}
                className="">
                <Text>Property Type</Text>
                <Text>Any</Text>

            </TouchableOpacity>

            {/* Features */}
            <TouchableOpacity onPress={handlePresentModal}>
                <Text>Features</Text>
                <Text>Any</Text>
            </TouchableOpacity>
                
        </View>
    </ScrollView>

    
    <BottomSheetModalProvider>
        <BottomSheetModal
          className="border-red-600 border-8 h-fit"
          ref={searchBottomSheetRef}
          snapPoints={['75%,100%']}
          enablePanDownToClose={true}
          animateOnMount={true}>
            <Text>Modal</Text>
         </BottomSheetModal>
      </BottomSheetModalProvider>
   
      </View>
  );
}

const styles = StyleSheet.create({});
