import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native'
import * as Location from 'expo-location';

const lease = () => {

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  
  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location.coords);
  }

  async function getLocation(){
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied');
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    // let { longitude,latitude} = await Location.getCurrentPositionAsync({});
    setLocation(location);
    // setLocation({lng:longitude, lat:latitude});
  }

  // useEffect(() => {
  //   (async () => {
      
     
  //   })();
  // }, []);
  return (
    <View>
      <Text>lease</Text>
      <Text >{text}</Text>
      <Button 
      onPress={() => getLocation()}
      title='get location' />
    </View>
  )
}

export default lease