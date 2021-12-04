import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Home } from "../pages/Home";
import { SignIn } from "../pages/SignIn";
import { LinearGradient } from "expo-linear-gradient";
import { theme } from "../global/global";

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
  return (
    <LinearGradient
      style={{ flex: 1 }}
      colors={[theme.colors.secondary80, theme.colors.secondary90]}
    >
      <Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: {
            backgroundColor: 'transparent',
          },
        }}
      >
        <Screen name="SignIn" component={SignIn} />
        <Screen name="Home" component={Home} />
      </Navigator>
    </LinearGradient>
  );
}
