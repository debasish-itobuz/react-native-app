import { Stack } from "expo-router";
import React, { useEffect } from "react";

const RootLayout = () => {
  if (__DEV__) {
    require("../ReactotronConfig");
  }

  useEffect(() => {
    console.log("hello");
  }, []);

  return (
    <Stack>
      {/* <Stack.Screen name="index" /> */}
      <Stack.Screen name="login" />
    </Stack>
  );
};

export default RootLayout;
