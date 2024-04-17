import {GestureHandlerRootView} from 'react-native-gesture-handler'
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { Stack } from "expo-router";
import { Drawer } from "expo-router/drawer"
import Home from "./home"
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator  } from '@react-navigation/stack';



// const Drawer = createDrawerNavigator();
// const Stack = createStackNavigator();



const ScreensLayout = () => {
  return (
    <GestureHandlerRootView className="flex-1">
      <Drawer
      // .Navigator
      //   initialRouteName="Home"
      //   screenOptions={{
      //     headerTransparent:true,
      //     headerTitle: '',
      //     drawerType:'slide',
      //     swipeEnabled: true,
      //   }}
      //   backBehavior="history"
      //   defaultStatus="open" 
        >
{/* 
        <Drawer.Screen 
        name="home" 
        options={{ 
          drawerLabel:"home",
          title:'overview'
          }} />
          
        <Drawer.Screen 
        name="blah" 
        options={{ 
          drawerLabel:"Blah",
          headerShown: false,
          title:'overview'
          }} /> */}
        {/* <Drawer.Screen name="details" options={{ headerShown: false }} component={Details} /> */}
      {/* <StatusBar barStyle="light-content" style="dark" /> */}
    </Drawer>
    </GestureHandlerRootView>
  );
};

export default ScreensLayout;
