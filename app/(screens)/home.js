import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";

const Home = () => {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-3xl text-blue-600">
        <Link href="/details">Go to details</Link>
      </Text>
      <StatusBar style="auto" />
    </View>
  );
};

export default Home;
