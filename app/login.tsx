import MyButton from "@/components/MyButton";
import { useRouter } from "expo-router";
import React from "react";
import { Image, Text, TextInput, View } from "react-native";

const Login = () => {
  const router = useRouter();
  const onLogin = () => {
    router.navigate("/signup");
  };

  return (
    <View style={{ flex: 1 }}>
      <Image
        source={require("../assets/images/login.jpg")}
        style={{
          width: "100%",
          height: 400,
        }}
        resizeMode="cover"
      />
      <View style={{ padding: 20, gap: 10 }}>
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
        <MyButton title={"Login"} onPress={onLogin} />
      </View>
    </View>
  );
};

export default Login;
