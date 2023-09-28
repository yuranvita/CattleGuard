import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { cn } from "../libs/cn";
import { LinearGradient } from "expo-linear-gradient";

interface props {
  classView?: string;
  classText?: string;
  name?: string;
  actions?: () => void;
}

export function ButtonLinear({ classView, classText, name, actions }: props) {
  return (
    <TouchableOpacity onPress={actions}>
      <LinearGradient
        // Button Linear Gradient
        className={cn("p-3 w-full flex justify-center items-center", classView)}
        colors={["#259D87", "#11493F"]}
      >
        <Text className={cn("text-white", classText)}>{name}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}

export function Button({ classView, classText, name, actions }: props) {
  return (
    <TouchableOpacity onPress={actions}>
      <View
        // Button Linear Gradient
        className={cn(
          "border rounded-md flex justify-center items-center",
          classView
        )}
      >
        <Text className={cn("text-black", classText)}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
}
