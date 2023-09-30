import React from "react";
import { Text, View, Image } from "react-native";
import { Button, ButtonLinear } from "../components/button";
import { useSail } from "../utils/reactFunctions";

export default function Welcome() {
  const { navigate } = useSail();
  return (
    <View className="h-screen w-screen justify-start mt-16 items-center">
      <Image source={require("../../assets/imgs/welcome.png")} />
      <Image source={require("../../assets/imgs/welcome-2.png")} />
      <View style={{ gap: 20 }} className="w-full px-4 py-10">
        <Button
          classView="border-green-700 border-2 py-3"
          classText="text-green-700 font-bold text-lg"
          name="Entrar"
          actions={() => navigate("login")}
        />
        <ButtonLinear
          classView="py-3 rounded-md"
          classText="text-lg font-bold p-[2px]"
          name="Criar Conta"
          actions={() => navigate("register")}
        />
      </View>
    </View>
  );
}
