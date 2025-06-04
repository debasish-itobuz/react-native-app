import { Stack } from "expo-router";
import React from "react";

const RootLayout = () => {
  if (__DEV__) {
    require("../ReactotronConfig");
  }

  return (
    <Stack>
      {/* <Stack.Screen name="index" /> */}
      <Stack.Screen name="login" />
    </Stack>
  );
};

export default RootLayout;
