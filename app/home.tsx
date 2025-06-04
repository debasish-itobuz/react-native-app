import React from "react";
import { Image, Text, View } from "react-native";

const Home = () => {
  return (
    <View style={{ flex: 1 }}>
      <Image
        source={require("../assets/images/background.jpg")}
        style={{
          width: "100%",
          height: 400,
        }}
        resizeMode="cover"
      />

      <Text style={{ fontSize: 20, textAlign:"center", marginTop:10, color:"orange" }}>Home</Text>
    </View>
  );
};

export default Home;
