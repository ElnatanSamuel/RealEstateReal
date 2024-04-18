import React from 'react'
import { Text, TextInput } from 'react-native'

const LabelInput = (label, ) => {
  return (
    <>
        <Text> Home Size </Text>
        
        <TextInput 
        className="border w-40 p-2" 
        onChangeText={setPrice}
        value={price + '  sqft'}
        />
    </>
  )
}

export default LabelInput