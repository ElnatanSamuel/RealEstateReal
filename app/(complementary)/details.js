import {
  View,
  Text,
  ScrollView,
  Dimensions,
  Image,
  TouchableOpacity,
  Button,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import image from "../../constants/image";
import CarouselRoom from "../../components/CarouselRoom";
import { StatusBar } from "expo-status-bar";
import HorizontalScrollRooms from "../../components/HorizontalScrollRooms";
import { Link, router } from "expo-router";

const Details = () => {
  const width = Dimensions.get("window").width;
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
    <SafeAreaView>
      <ScrollView>
        <View className="bg-primary h-full w-full">
          <View>
            <CarouselRoom rooms={rooms} width={width} />
          </View>

          <View className="mt-2">
            <HorizontalScrollRooms rooms={rooms} />
          </View>

          <View className="px-2 mt-4">
            <View className="flex-row items-center gap-2">
              <Text className="p-2 bg-green-600 rounded-full w-2 h-2"></Text>

              <Text className=" text-green-500">Available</Text>
            </View>
            <View className="flex-col gap-2 opacity-90 mt-2">
              <Text className="text-lg font-extrabold text-gray-300">
                ETB 200,000
              </Text>
              <Text className="text-lg font-extrabold text-gray-300">
                3BD . 3BA . 1,882SQFT
              </Text>
              <Text className="text-lg font-extrabold underline text-gray-300">
                Call (+251923234562)
              </Text>
              <Text className="text-gray-300 text-xs">
                By Calling You Are Concenting To Our Policy.{" "}
                <Text className="underline text-white">Read More</Text>
              </Text>
            </View>
          </View>

          <View className="mt-6">
            <TouchableOpacity onPress={() => router.push("/map")}>
              <Image
                className="w-full h-[300px]"
                source={image.basemap}
                resizeMode="cover"
              />
            </TouchableOpacity>

            <View className="items-center justify-center flex-row">
              <TouchableOpacity className="bg-white flex-row justify-evenly text-black p-4 mt-4 rounded-2xl inline">
                <Text className="text-black font-bold">Get Directions</Text>
              </TouchableOpacity>

              <TouchableOpacity className="bg-white text-black p-4 mt-4 rounded-2xl inline">
                <Text className="text-black font-bold">
                  Request A Private Showing
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View className="mt-6">
            <Text className="px-2 text-sm font-extrabold text-gray-300">
              Similar Results
            </Text>

            <View className="mt-4 mb-4">
              <ScrollView
                decelerationRate="fast"
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                {rooms.map((room) => (
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
                ))}
              </ScrollView>
            </View>
          </View>
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#012847" style="light" />
    </SafeAreaView>
  );
};

export default Details;
