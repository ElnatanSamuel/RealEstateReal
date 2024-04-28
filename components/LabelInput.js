import React, { useEffect, useState } from "react";
import { Text, TextInput, View } from "react-native";

import {selectPrice,setPrice} from "../slices/searchSlice"
import { useDispatch, useSelector } from "react-redux";


const LabelInput = ({ title, customStyles, setFor }) => {


  const price = useSelector(selectPrice)
  const dispatch = useDispatch()


  const handleTextChange = (e) => {

    switch (setFor) {
      
      case "price":
        dispatch(setPrice(e));
        break;
      case "location":
        dispatch(setLocation(e));
        break;
      case "bedrooms":
        dispatch(setBedrooms(e));
        break;
      case "bathrooms":
          dispatch(setBathrooms(e));
          break;      
      case "size":
          dispatch(setHouseSize(e));
          break;
      case "age":
          dispatch(setHouseAge(e));
          break;
      default:
        break;

    }

  };

  return (
    <View className="flex-col justify-center">
      <Text className="text-lg opacity-80 mb-2">{typeof(price)} {title}</Text>

      <TextInput
        // onChangeText={handleInputChange}
        // value={value}  
        // onChange={(e)=> handleTextChange(e)}
        onChangeText={handleTextChange}
        // value={text}
        placeholder="Type something..."
        className={`border border-black/50 ${customStyles} px-2 py-3 rounded-md`}
      />
    </View>
  );
};

export default LabelInput;
