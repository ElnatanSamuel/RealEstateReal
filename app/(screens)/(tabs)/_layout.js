import React from 'react';
// expo
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

// native
// import { createStackNavigator  } from '@react-navigation/stack';
// import { NavigationContainer } from '@react-navigation/native';
// import Featured from "./featured"
// import Index from "./index"
// import Reccomendation from "./reccomendation"
// const Stack = createStackNavigator();

// native
// export default function TabLayout(){
//     <NavigationContainer independent={false} >
//     <Stack.Navigator >
//       <Stack.Screen name="Result" component={Index} />
//       <Stack.Screen name="Featured" component={Featured} />
//       <Stack.Screen name="Reccomendation" component={Reccomendation} />
//     </Stack.Navigator>
//   </NavigationContainer>
// }

// expo
export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
      <Tabs.Screen
        name="index"
        options={{
        title: 'Results',
        // href:null,
        headerShown: false, 
        tabBarIcon: ({ color }) => <FontAwesome size={28} name="list" color={color} />,
        }}
      />
      <Tabs.Screen
        name="reccomendation"
        options={{
          title: 'Reccomendation',
        //   href:null,
          headerShown: false,
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
        }} />
        <Tabs.Screen
        name="featured"
        options={{
          title: 'featured',
        //   href:null,
          headerShown: false,
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
        }}
      />
    </Tabs>
  );
}
