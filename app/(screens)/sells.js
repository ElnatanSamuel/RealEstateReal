import { useState } from "react";
import { Button, Image, View, StyleSheet, ScrollView } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Surface, Text } from "react-native-paper";
import SurfaceAdd from "../../components/SurfaceAdd";

export default function ImagePickerExample() {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const rooms = ["bedroom", "livingroom", "kitchen", "bathroom", "diningroom"];

  return (
    <View className="mt-2 px-2">
      <Text className="text-2xl font-bold">Pick an Image</Text>
      <ScrollView
        decelerationRate="fast"
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        <View className="flex-row ">
          {rooms.map((room) => (
            <SurfaceAdd title={room} pickImage={pickImage} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
