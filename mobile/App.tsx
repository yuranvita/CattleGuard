// import { StatusBar } from 'expo-status-bar';

import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black,
} from "@expo-google-fonts/inter";
import { View, Text } from "react-native";
import { AppRoutes } from "./src/routes/AppRoutes";
import React from "react";

import Toast from "react-native-toast-message";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black,
  });

  return fontsLoaded ? (
    <>
      <AppRoutes />
      <Toast />
    </>
  ) : (
    <View className="flex justify-center items-center">
      <Text>...carregando</Text>
    </View>
  );
}
