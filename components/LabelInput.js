import React, { useEffect, useState } from "react";
import { Text, TextInput, View } from "react-native";

const LabelInput = ({ title, customStyles, value, setValue, onChangeText   }) => {

  // const [text, setText] = useState('');

  // const handleInputChange = (inputText) => {
  //   console.log(inputText,'inputText')
  //   console.log(typeof(setValue))
  //   value =
  //   // setValue(inputText);
  // };

  const handleTextChange = (e) => {
    // setText(inputText);
    console.log(e)
    // if (onChangeText) {
      // onChangeText(inputText);
    // }
  };

  return (
    <View className="flex-col justify-center">
      <Text className="text-lg opacity-80 mb-2"> {title}</Text>

      <TextInput
        // onChangeText={handleInputChange}
        // value={value}  
        onChange={(e)=> handleTextChange(e)}
        // value={text}
        placeholder="Type something..."
        className={`border border-black/50 ${customStyles} px-2 py-3 rounded-md`}
      />
    </View>
  );
};

export default LabelInput;
