import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const ComplementaryLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="details" options={{  headerShown: false }} />
      <Stack.Screen name="profile" options={{ 
        title:"Profile",
        headerStyle: {
          backgroundColor: '#012847', // Change this to the desired color
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
         }} />
      <Stack.Screen name="map" options={{ title:"Map",
              headerStyle: {
                backgroundColor: '#012847', // Change this to the desired color
              },
      
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
      
         }} />
    </Stack>
  );
};

export default ComplementaryLayout;
