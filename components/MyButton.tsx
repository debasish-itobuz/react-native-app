import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function MyButton({
  title,
  onPress,
}: {
  title: string;
  onPress: () => void;
}) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.button}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "orange",
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    fontWeight: 500,
  },
});
