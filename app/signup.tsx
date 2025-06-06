import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "expo-router";
import React from "react";
import {Controller, useForm} from "react-hook-form";
import {
  View,Text, TextInput, Image, StyleSheet,Pressable,
} from "react-native";
import MyButton from "../components/MyButton";
import signupSchema from "../validation/SignUpValidator";

export interface SignUpFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const SignUp = () => {
  const router = useRouter();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>({
    resolver: yupResolver(signupSchema),
  });

  const onRegister = (data: SignUpFormData) => {
    console.log("Signup Data:", data);
    router.navigate("/home");
  };

  const goToLogin = () => {
    router.navigate("/login");
  };

  return (
    <View style={{ flex: 1 }}>
      <Image
        source={require("../assets/images/register.jpg")}
        style={{ width: "100%", height: 180 }}
        resizeMode="cover"
      />
      <View style={{ padding: 20, gap: 10 }}>
        <Text style={styles.label}>Name</Text>
        <Controller
          control={control}
          name="name"
          render={({ field: { value, onChange } }) => (
            <TextInput
              value={value}
              onChangeText={onChange}
              placeholder="Enter your name"
              style={styles.input}
            />
          )}
        />
        {errors.name && <Text style={styles.error}>{errors.name.message}</Text>}

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
        {errors.email && <Text style={styles.error}>{errors.email.message}</Text>}

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
        {errors.password && <Text style={styles.error}>{errors.password.message}</Text>}

        <Text style={styles.label}>Confirm Password</Text>
        <Controller
          control={control}
          name="confirmPassword"
          render={({ field: { value, onChange } }) => (
            <TextInput
              value={value}
              onChangeText={onChange}
              placeholder="Enter your confirm password"
              secureTextEntry
              style={styles.input}
            />
          )}
        />
        {errors.confirmPassword && (
          <Text style={styles.error}>{errors.confirmPassword.message}</Text>
        )}

        <MyButton title="Register" onPress={handleSubmit(onRegister)} />

        {/* Bottom Text and Login Link */}
        <View style={styles.bottomContainer}>
          <Text style={styles.bottomText}>Already have an account?</Text>
          <Pressable onPress={goToLogin}>
            <Text style={styles.loginLink}> Login</Text>
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
    marginBottom: 5,
  },
  bottomContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  bottomText: {
    fontSize: 16,
  },
  loginLink: {
    fontSize: 16,
    color: "#007BFF",
    fontWeight: "bold",
  },
});

export default SignUp;

