import { useRouter } from "expo-router";
import React from "react";
import { Image, Text, TextInput, View } from "react-native";
import MyButton from "../components/MyButton";

const SignUp = () => {
  const router = useRouter();
  const onRegister = () => {
    router.navigate("/home");
  };
  return (
    <View style={{ flex: 1 }}>
      <Image
        source={require("../assets/images/register.jpg")}
        style={{
          width: "100%",
          height: 350,
        }}
        resizeMode="cover"
      />
      <View style={{ padding: 20, gap: 10 }}>
        <Text style={{ fontSize: 20 }}>Name</Text>
        <TextInput
          placeholder="Enter your name"
          style={{
            borderWidth: 1,
            height: 50,
            paddingHorizontal: 20,
            borderRadius: 10,
          }}
        />
        <Text style={{ fontSize: 20 }}>Email</Text>
        <TextInput
          placeholder="Enter your email"
          style={{
            borderWidth: 1,
            height: 50,
            paddingHorizontal: 20,
            borderRadius: 10,
          }}
        />
        <Text style={{ fontSize: 20 }}>Password</Text>
        <TextInput
          placeholder="Enter your password"
          style={{
            borderWidth: 1,
            height: 50,
            paddingHorizontal: 20,
            borderRadius: 10,
          }}
        />
        <Text style={{ fontSize: 20 }}>Confirm Password</Text>
        <TextInput
          placeholder="Enter your confirm password"
          style={{
            borderWidth: 1,
            height: 50,
            paddingHorizontal: 20,
            borderRadius: 10,
          }}
        />
        <MyButton title={"Register"} onPress={onRegister} />
      </View>
    </View>
  );
};

export default SignUp;
