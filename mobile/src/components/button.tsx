import React, { useState } from "react";
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

interface RadioButton {
  label: string;
  value: boolean;
  selectedValue: boolean;
  onValueChange: React.Dispatch<React.SetStateAction<boolean>>;
}

const RadioButton = ({
  label,
  value,
  selectedValue,
  onValueChange,
}: RadioButton) => {
  return (
    <TouchableOpacity
      onPress={() => onValueChange(value)}
      className="flex-row items-center mb-3"
    >
      <View
        className={`
          "w-5 h-5 border rounded-full mr-3",
          ${selectedValue === value ? "bg-blue-500" : ""},
          `}
      />
      <Text className="text-lg">{label}</Text>
    </TouchableOpacity>
  );
};
