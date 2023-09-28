import React from "react";
import { Image, Text, TextInput, View } from "react-native";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import { ButtonLinear } from "../components/button";

export default function Login() {
  return (
    <View className="h-screen mt-10 items-center">
      <Image source={require("../../assets/icon.png")} />
      <Text className="text-3xl mt-10">Bem Vindo de Volta!</Text>
      <Text className="text-zinc-400">
        Para continuar digite suas credenciais
      </Text>

      <View
        style={{
          gap: 24,
        }}
        className="flex-col justify-center items-center w-full px-4 mt-10"
      >
        <View
          style={{ gap: 8 }}
          className="w-full flex-row bg-[#D3EBE7] p-3 rounded-md"
        >
          <MaterialCommunityIcons
            name="email-outline"
            size={24}
            color="black"
          />
          <TextInput className="" placeholder="Email" selectionColor="black" />
        </View>
        <View
          style={{ gap: 8 }}
          className="w-full flex-row bg-[#D3EBE7] p-3 rounded-md "
        >
          <Ionicons name="lock-closed-outline" size={24} color="black" />
          <TextInput
            className="text-"
            placeholder="Senha"
            selectionColor="black"
          />
        </View>
        <ButtonLinear
          classView="w-[150px] rounded-md p-4 mt-4"
          classText="font-bold"
          name="Entrar"
        />
      </View>
    </View>
  );
}
