import React from "react";
import { Text, View } from "react-native";
import { cn } from "../libs/cn";
import { LinearGradient } from "expo-linear-gradient";

interface props {
  classView?: string;
  classText?: string;
  name?: string;
}

export function ButtonLinear({ classView, classText, name }: props) {
  return (
    <LinearGradient
      // Button Linear Gradient
      className={cn("p-3 w-full flex justify-center items-center", classView)}
      colors={["#259D87", "#11493F"]}
    >
      <Text className={cn("text-white", classText)}>{name}</Text>
    </LinearGradient>
  );
}

export function Button({ classView, classText, name }: props) {
  return (
    <View
      // Button Linear Gradient
      className={cn(
        "border rounded-md flex justify-center items-center",
        classView
      )}
    >
      <Text className={cn("text-black p-3  ", classText)}>{name}</Text>
    </View>
  );
}
