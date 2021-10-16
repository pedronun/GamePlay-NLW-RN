import React from "react";
import { StatusBar } from "react-native";
import { useFonts } from "expo-font";
import { Inter_400Regular, Inter_500Medium } from "@expo-google-fonts/inter";
import {
  Rajdhani_500Medium,
  Rajdhani_700Bold,
} from "@expo-google-fonts/rajdhani";
import AppLoading from "expo-app-loading";

import { LinearGradient } from "expo-linear-gradient";

import { SignIn } from "./src/pages/SignIn";
import { theme } from "./src/global/global";

export default function App() {
  const [isLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold,
  });

  if (!isLoaded) {
    return <AppLoading />;
  }

  return (
    <LinearGradient
      style={{ flex: 1 }}
      colors={[theme.colors.secondary80, theme.colors.secondary100]}
    >
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <SignIn />
    </LinearGradient>
  );
}
