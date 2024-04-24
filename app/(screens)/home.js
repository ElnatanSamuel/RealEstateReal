import React from 'react'
import { Image, Text } from 'react-native'
import { mapData } from '../../data'
import MapView, { Circle, MapMarker } from 'react-native-maps'

const home = () => {
  return (
    // <>
    // <Text> location </Text>
    {
      mapData.map(location => {
        return(
          // Iterate over the values of each location
          Object.values(location).map((schools,index) => {
            // Iterate over the values of each school
            return(
            Object.values(schools).forEach(coordinates => {
                // Access each coordinate without knowing the keys
                // console.log(coordinates);
                return( <Text> { coordinates } </Text> )
                })
              )}
            ));
          })
   }
// </>
  )
}

export default home