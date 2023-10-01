import React from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import {
  MaterialCommunityIcons,
  Ionicons,
  FontAwesome,
  SimpleLineIcons,
} from "@expo/vector-icons";
import { ButtonLinear } from "../../components/button";
import { useForm, Controller } from "react-hook-form";
import { api } from "../../infra/service/api";

import Toast from "react-native-toast-message";
import { useSail } from "../../utils/reactFunctions";

export default function Register() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { navigate } = useSail();
  const onSubmit = async (data: any) => {
    if (data.POLITICA_PRIVACIDADE && data.TERMO_E_CONDICAO) {
      await api
        .post("/user", {
          NOME: data.NOME + " " + data.SOBRE_NOME,
          SENHA: data.SENHA,
          EMAIL: data.EMAIL,
          TELEFONE: "55" + data.TELEFONE,
          ENDERECO: data.ENDERECO,
        })
        .then((res) => {
          if (res.status === 201) {
            Toast.show({
              type: "success",
              text1: res.data.message,
            });
            return navigate("login" as never);
          }
        })
        .catch((err) => {
          console.log(err.response.data);
          Toast.show({
            type: "error",
            text1: err.response.data.message,
          });
        });
      return;
    }
    return alert("você precisa aceitar os termos e as politicas de uso");
  };

  return (
    <ScrollView>
      <View className="mt-10 py-4 w-full items-center">
        <View className="flex-col w-full justify-center items-center">
          <Image source={require("../../../assets/icon.png")} />
          <Text className="text-3xl mt-10">Crie uma conta</Text>
        </View>
        <View
          style={{
            gap: 8,
          }}
          className="flex-col justify-center items-center w-full px-4 mt-10"
        >
          <View className="w-full flex-row" style={{ gap: 8 }}>
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <View className="flex-1">
                  {errors.NOME && (
                    <Text className="p-1 text-red-700">Coloque seu nome*</Text>
                  )}
                  <View
                    style={{ gap: 8 }}
                    className="w-full flex-row border border-greenLight p-3 rounded-md"
                  >
                    <Ionicons name="person-outline" size={24} color="#259d87" />
                    <TextInput
                      onBlur={onBlur}
                      onChangeText={(value) => onChange(value)}
                      value={value}
                      placeholder="Nome"
                      placeholderTextColor="#259d87"
                    />
                  </View>
                </View>
              )}
              name="NOME"
              rules={{ required: true }}
            />

            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <View className="flex-1">
                  {errors.SOBRE_NOME && (
                    <Text className="p-1 text-red-700">Coloque uma senha</Text>
                  )}
                  <View
                    style={{ gap: 8 }}
                    className="w-full flex-row border border-greenLight p-3 rounded-md"
                  >
                    <TextInput
                      onBlur={onBlur}
                      onChangeText={(value) => onChange(value)}
                      value={value}
                      className=""
                      placeholder="Sobrenome"
                      placeholderTextColor="#259d87"
                    />
                  </View>
                </View>
              )}
              name="SOBRE_NOME"
              rules={{ required: true }}
            />
          </View>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <View className="w-full">
                {errors.EMAIL && (
                  <Text className="p-1 text-red-700">
                    Este campo é obrigatório*
                  </Text>
                )}
                <View
                  style={{ gap: 8 }}
                  className="w-full flex-row border border-greenLight p-3 rounded-md"
                >
                  <MaterialCommunityIcons
                    name="email-outline"
                    size={24}
                    color="#259d87"
                  />
                  <TextInput
                    onBlur={onBlur}
                    onChangeText={(value) => onChange(value)}
                    value={value}
                    placeholder="E-mail"
                    placeholderTextColor="#259d87"
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
              <View className="w-full">
                {errors.SENHA && (
                  <Text className="p-1 text-red-700">
                    Este campo é obrigatório*
                  </Text>
                )}
                <View
                  style={{ gap: 8 }}
                  className="w-full flex-row border border-greenLight p-3 rounded-md"
                >
                  <MaterialCommunityIcons
                    name="lock-outline"
                    size={24}
                    color="#259d87"
                  />
                  <TextInput
                    onBlur={onBlur}
                    onChangeText={(value) => onChange(value)}
                    value={value}
                    placeholder="Senha"
                    placeholderTextColor="#259d87"
                    secureTextEntry={true}
                  />
                </View>
              </View>
            )}
            name="SENHA"
            rules={{ required: true }}
          />
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <View className="w-full">
                {errors.TELEFONE && (
                  <Text className="p-1 text-red-700">
                    Este campo é obrigatório*
                  </Text>
                )}
                <View
                  style={{ gap: 8 }}
                  className="w-full flex-row border border-greenLight p-3 rounded-md"
                >
                  <SimpleLineIcons
                    name="screen-smartphone"
                    size={24}
                    color="#259d87"
                  />
                  <TextInput
                    onBlur={onBlur}
                    onChangeText={(value) => onChange(value)}
                    value={value}
                    placeholder="Telefone com DDD"
                    placeholderTextColor="#259d87"
                  />
                </View>
              </View>
            )}
            name="TELEFONE"
            rules={{ required: true }}
          />
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <View className="w-full">
                {errors.TERMO_E_CONDICAO && (
                  <Text className="p-1 text-red-700">
                    Aceite os termos de uso*
                  </Text>
                )}
                <View className="w-full flex-row items-center px-4 py-2">
                  <TouchableOpacity
                    className="flex-row"
                    onPress={() => onChange(!value)}
                    onBlur={onBlur}
                    activeOpacity={0.7}
                  >
                    <View
                      className={[
                        "w-5 h-5 border border-greenLight mr-3",
                        value ? "bg-greenLight" : "bg-white",
                      ].join(" ")}
                    />

                    <Text>Aceito</Text>
                    <Text className="text-greenLight">
                      {" "}
                      os termos e condições de uso
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
            name="TERMO_E_CONDICAO"
            rules={{ required: true }}
          />
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <View className="w-full">
                {errors.POLITICA_PRIVACIDADE && (
                  <Text className="p-1 text-red-700">
                    Este campo é obrigatório*
                  </Text>
                )}
                <View className="w-full flex-row items-center px-4 py-2">
                  <TouchableOpacity
                    className="flex-row"
                    onPress={() => onChange(!value)}
                    onBlur={onBlur}
                    activeOpacity={0.7}
                  >
                    <View
                      className={[
                        "w-5 h-5 border border-greenLight mr-3",
                        value ? "bg-greenLight" : "bg-white",
                      ].join(" ")}
                    />

                    <Text>Aceito</Text>
                    <Text className="text-greenLight">
                      {" "}
                      a politicas de privacidade
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
            name="POLITICA_PRIVACIDADE"
            rules={{ required: true }}
          />
          <ButtonLinear
            classView="w-[150px] rounded-md p-4 mt-4"
            classText="font-bold"
            name="CRIAR CONTA"
            actions={handleSubmit(onSubmit)}
          />
        </View>
        <View className="flex-row mt-10" style={{ gap: 8 }}>
          <FontAwesome name="whatsapp" size={24} color="green" />
          <Text>Precisa de ajuda?</Text>
        </View>
      </View>
    </ScrollView>
  );
}
