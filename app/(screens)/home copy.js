import React from 'react'
import { Image, Text } from 'react-native'
import { mapData } from '../../data'
import MapView, { Circle, MapMarker } from 'react-native-maps'

const home = () => {
  return (
    <>
    
    <MapView   className="flex-1"
      showsUserLocation={true}
      showsMyLocationButton={true}
      initialRegion={{ 
          latitude: 9.006664177654724,
          longitude: 38.7565046675449,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
          {/* 
          {mapData.map((kk,index)=>{ 
            
           return( 
            */}
              <MapMarker
              // key={index}
              // onPress={()=>{
              //   dispatch(setHouse(res))
              // }}
              coordinate={{
                latitude: 9.006664177654724,
                longitude: 38.7565046675449,      
              }}
               />
            {/*
             ) })}
           */}

          <Circle
          // className="fill-red-400"
          center={{
            latitude:  9.006664177654724,
            longitude: 38.7565046675449
          }}
          radius={100}
          fillColor="#ebf5fb"
          />
      </MapView>

    {/* <Text>home</Text>
    <Image 
    className="w-full h-full"
    source={"./../../assets/images/home1.jpg"} /> */}
    </>
  )
}

// export default home