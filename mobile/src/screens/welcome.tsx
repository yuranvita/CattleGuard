import React from "react";
import { Text, View, Image } from "react-native";
import { Button, ButtonLinear } from "../components/button";

export default function Welcome() {
  return (
    <View className="h-screen w-screen justify-start mt-16 items-center">
      <Image source={require("../../assets/imgs/welcome.png")} />
      <Image source={require("../../assets/imgs/welcome-2.png")} />
      <View className="w-full px-4 py-10">
        <Button name="Entrar" />
      </View>
    </View>
  );
}
