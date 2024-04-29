import React from "react";
// expo
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";

// native
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import Featured from "./featured";
import index from "./index";
import Reccomendation from "./reccomendation";
import { StatusBar } from "react-native";
// const Stack = createStackNavigator();

const Stack = createMaterialTopTabNavigator();

// native
// export default function TabLayout(){
//     <NavigationContainer independent={false} >
//     <Stack.Navigator >
//       <Stack.Screen name="Result" component={Results} />
//       <Stack.Screen name="Featured" component={Featured} />
//       <Stack.Screen name="Reccomendation" component={Reccomendation} />
//     </Stack.Navigator>
//   </NavigationContainer>
// }

// expo
export default function TabLayout() {
  return (
    <>
      <Tabs
        // initialRouteName='results'
        screenOptions={{
          tabBarActiveTintColor: "#F0DE93",
          tabBarInactiveTintColor: "gray",
          tabBarStyle: {
            backgroundColor: "#012847",
            height: 60,
            paddingBottom: 10,
            paddingTop: 10,
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Results",
            // href:null,
            headerShown: false,
            tabBarLabelStyle: { fontSize: 14 },
            tabBarIcon: ({ color }) => (
              <FontAwesome size={14} name="list" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="reccomendation"
          options={{
            title: "Recomendation",
            //   href:null,
            headerShown: false,
            // tabBarLabel: 'Profile'
            // tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
            tabBarLabelStyle: { fontSize: 14 },
            tabBarIcon: ({ color }) => (
              <FontAwesome size={14} name="list" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="featured"
          options={{
            title: "Featured",
            //   href:null,
            headerShown: false,
            tabBarLabelStyle: { fontSize: 14 },
            tabBarIcon: ({ color }) => (
              <FontAwesome size={14} name="list" color={color} />
            ),
          }}
        />
      </Tabs>
      <StatusBar
        barStyle="light-content"
        style="light"
        backgroundColor="#012847"
      />
    </>
  );
}
