import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "expo-router";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { Image, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import MyButton from "../components/MyButton";
import loginSchema from "../validation/LoginValidator";

export interface LoginFormData {
  email: string;
  password: string;
}

const Login = () => {
  const router = useRouter();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: yupResolver(loginSchema),
  });

  const onLogin = (data: LoginFormData) => {
    console.log("Login Data:", data);
    router.navigate("/home");
  };

  const goToRegister = () => {
    router.navigate("/signup");
  };

  return (
    <View style={{ flex: 1 }}>
      <Image
        source={require("../assets/images/login.jpg")}
        style={{ width: "100%", height: 400 }}
        resizeMode="cover"
      />
      <View style={{ padding: 20, gap: 10 }}>
        <Text style={styles.label}>Email</Text>
        <Controller
          control={control}
          name="email"
          render={({ field: { value, onChange } }) => (
            <TextInput
              value={value}
              onChangeText={onChange}
              placeholder="Enter your email"
              style={styles.input}
            />
          )}
        />
        {/* Always render error block to prevent layout shift */}
        <Text style={styles.error}>{errors.email?.message ?? " "}</Text>

        <Text style={styles.label}>Password</Text>
        <Controller
          control={control}
          name="password"
          render={({ field: { value, onChange } }) => (
            <TextInput
              value={value}
              onChangeText={onChange}
              placeholder="Enter your password"
              secureTextEntry
              style={styles.input}
            />
          )}
        />
        <Text style={styles.error}>{errors.password?.message ?? " "}</Text>

        <MyButton title="Login" onPress={handleSubmit(onLogin)} />

        {/* Bottom Text and Register Link */}
        <View style={styles.bottomContainer}>
          <Text style={styles.bottomText}>Dont have an account?</Text>
          <Pressable onPress={goToRegister}>
            <Text style={styles.registerLink}> Register</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    height: 50,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  label: {
    fontSize: 20,
  },
  error: {
    color: "red",
    height: 15, // Reserve space for error messages
    fontSize: 14,
  },
  bottomContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  bottomText: {
    fontSize: 16,
  },
  registerLink: {
    fontSize: 16,
    color: "#007BFF",
    fontWeight: "bold",
  },
});

export default Login;
