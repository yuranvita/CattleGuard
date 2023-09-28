import React from "react";
import { Text, View, Image } from "react-native";
import { Button, ButtonLinear } from "../components/button";
import { useNavigation } from "@react-navigation/native";

export default function Welcome() {
  const navigation = useNavigation() as any;
  return (
    <View className="h-screen w-screen justify-start mt-16 items-center">
      <Image source={require("../../assets/imgs/welcome.png")} />
      <Image source={require("../../assets/imgs/welcome-2.png")} />
      <View style={{ gap: 20 }} className="w-full px-4 py-10">
        <Button
          classView="border-green-700 border-2 py-3"
          classText="text-green-700 font-bold text-lg"
          name="Entrar"
          actions={() => navigation.navigate("login")}
        />
        <ButtonLinear
          classView="py-3 rounded-md"
          classText="text-lg font-bold p-[2px]"
          name="Criar Conta"
        />
      </View>
    </View>
  );
}
