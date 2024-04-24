// import  from 'react'
import React, { useMemo, useRef, useState } from "react"
import { Button, Image, Text, View, TouchableOpacity, TextInput } from 'react-native'
import { mapData } from '../../data'
import MapView, { Circle, MapMarker } from 'react-native-maps'
import { ScrollView } from 'react-native-gesture-handler'
import { SafeAreaView } from "react-native-safe-area-context";


const home = () => {
  const [items, setItems] = useState(  
    mapData.map(locationObject => {
    const locationName = Object.keys(locationObject)[0]; // Get the location name (e.g., "Akaki kality")
    let locationText = ""; // Initialize empty string for location text
    Object.entries(locationObject[locationName]).forEach(([schoolName, coordinates]) => {
        locationText += `${schoolName} ${coordinates[0]},${coordinates[1]} | `;
    });
    // Remove the last pipe character and space
    locationText = locationText.slice(0, -2);
    return locationText;
  }))
  const [query, setQuery] = useState("")
  const inputRef = useRef()

  const filteredItems = useMemo(() => {
    return items.filter(item => {
      console.log(typeof(item))
      return item.includes(query)
    })
  }, [items, query])

  function onSubmit() {
    // e.preventDefault()

    const value = inputRef.current.value
    if (value === "") return
    setItems(prev => {
      return [...prev, value]
    })

    inputRef.current.value = ""
  }

  return (
  <>
    <MapView   className="flex-1 z-10"
      // showsUserLocation={true}
      showsMyLocationButton={true}
      initialRegion={{ 
          latitude: 9.006664177654724,
          longitude: 38.7565046675449,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
          {
            mapData.map(locationObject => {
              const locationName = Object.keys(locationObject)[0]; // Get the location name (e.g., "Akaki kality")
              return ( 
                Object.entries(locationObject[locationName]).map(([schoolName, coordinates]) => {
                  return (
                    <MapMarker
                    coordinate={{
                      latitude: coordinates[0],
                      longitude: coordinates[1], 
                    }} />
                  )})
            )})
          }
    </MapView>

    <SafeAreaView className="absolute z-20  w-full">
      <View className=" inset-0 m-auto  w-full h-fit z-10">
        <View className="m-auto flex-row justify-between items-center h-12 px-6 bg-white w-3/4 rounded-full">
        
        <TextInput
            className="flex-1 text-base text-black font-medium capitalize"
            placeholder={"placeholder"}
            value={query}
            ref={inputRef}
            onChange={e => setQuery(e.target.value)}
            placeholderTextColor="black"
          />

          <TouchableOpacity className="w-fit bg-primary rounded-xl "
          onPress={onSubmit}
          >
          <Text className="h-fit p-2 text-white">Search</Text>  
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView 
      contentContainerStyle = {{ flexGrow: 1, justifyContent: 'center' }}
      className="cabsolute cmx-10 w-full max-h-40 top-2 border z-10 px-5">
          {filteredItems.map(item => (
          <View className="sticky inset-0  bg-white rounded-lg h-10 flex justify-center z-10 mb-2">
            <Text className="text-center font-bold text-base">{item.slice(0,20)}</Text>
          </View>
          ))}
      </ScrollView>
    </SafeAreaView>
  </>
  )
}

export default home