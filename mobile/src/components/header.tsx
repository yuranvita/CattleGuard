import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useSail } from "../utils/reactFunctions";
import { LinearGradient } from "expo-linear-gradient";

import icon from "../../assets/iconHeader.png";
import userFarmer from "../../assets/icons/farmerUserIcon.png";

export default function Header() {
  const { navigate, goBack } = useSail();

  function hundleGoBackToOrphanageMap() {
    navigate("home" as never);
  }

  return (
    <LinearGradient
      className="h-24 justify-end items-center py-1"
      colors={["#259d87", "#10453b"]}
      start={{ x: 1, y: 1 }}
      end={{ x: 0, y: 1 }}
      style={{
        borderBottomLeftRadius: 24,
        borderBottomRightRadius: 24,
      }}
    >
      <View className="flex-row justify-between w-full px-4 ">
        <Image source={icon} />
        <Image source={userFarmer} />
      </View>
    </LinearGradient>
  );
}
