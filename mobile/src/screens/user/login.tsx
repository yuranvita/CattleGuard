import React from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  View,
} from "react-native";
import {
  MaterialCommunityIcons,
  Ionicons,
  FontAwesome,
} from "@expo/vector-icons";
import { ButtonLinear } from "../../components/button";
import { useForm, Controller } from "react-hook-form";
import { api } from "../../infra/service/api";

import Toast from "react-native-toast-message";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Login() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    await api
      .post("/login", data)
      .then((res) => {
        AsyncStorage.setItem("token", res.data.token);
      })
      .catch((err) => {
        Toast.show({
          type: "error",
          text1: err.response.data.message,
        });
      });
  };

  return (
    <View className="mt-10 py-4 items-center flex-1 justify-between">
      <View>
        <Image source={require("../../../assets/icon.png")} />
        <Text className="text-3xl mt-10">Bem Vindo de Volta!</Text>
        <Text className="text-zinc-400">
          Para continuar digite suas credenciais
        </Text>
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{
          gap: 24,
        }}
        className="flex-col justify-center items-center w-full px-4 mt-10"
      >
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <View className="w-full px-4">
              {errors.EMAIL && (
                <Text className="p-1 text-red-700">
                  Este campo é obrigatório*
                </Text>
              )}
              <View
                style={{ gap: 8 }}
                className="w-full flex-row bg-[#D3EBE7] p-3 rounded-md"
              >
                <MaterialCommunityIcons
                  name="email-outline"
                  size={24}
                  color="black"
                />
                <TextInput
                  onBlur={onBlur}
                  onChangeText={(value) => onChange(value)}
                  value={value}
                  placeholder="EMAIL"
                />
              </View>
            </View>
          )}
          name="EMAIL"
          rules={{ required: true }}
        />
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <View className="w-full px-4">
              {errors.SENHA && (
                <Text className="p-1 text-red-700">Coloque uma senha</Text>
              )}
              <View
                style={{ gap: 8 }}
                className="w-full flex-row bg-[#D3EBE7] p-3 rounded-md "
              >
                <Ionicons name="lock-closed-outline" size={24} color="black" />
                <TextInput
                  onBlur={onBlur}
                  onChangeText={(value) => onChange(value)}
                  value={value}
                  className=""
                  secureTextEntry={true}
                  placeholder="Senha"
                />
              </View>
            </View>
          )}
          name="SENHA"
          rules={{ required: true }}
        />

        <ButtonLinear
          classView="w-[150px] rounded-md p-4 mt-4"
          classText="font-bold"
          name="Entrar"
          actions={handleSubmit(onSubmit)}
        />
      </KeyboardAvoidingView>
      <View className="flex-row mt-10" style={{ gap: 8 }}>
        <FontAwesome name="whatsapp" size={24} color="green" />
        <Text>Precisa de ajuda?</Text>
      </View>
    </View>
  );
}
