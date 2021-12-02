import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  ScrollView,
  Image,
  TextInput,
  Button,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function App() {
  const someText = "The count is: ";
  const [count, setCount] = useState(0);

  const handlePress = () => {
    setCount(count + 1);
  };
  return (
    <ScrollView>
      <Text>Some text Hi</Text>
      <View>
        <Text>Some more text</Text>
        <Image
          source={{
            uri: "https://reactnative.dev/docs/assets/p_cat2.png",
          }}
          style={{ width: 200, height: 200 }}
        />
      </View>
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
        }}
        defaultValue="You can type in me"
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
