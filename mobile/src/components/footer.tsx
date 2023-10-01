import { Fontisto, MaterialCommunityIcons } from "@expo/vector-icons";
import { View, Text, Image, TouchableOpacity } from "react-native";
import farmIcon from "../../assets/icons/farm.png";
import logoIcon from "../../assets/icons/iconLogo.png";
import { LinearGradient } from "expo-linear-gradient";
import { THEME } from "../theme";
import { useSail } from "../utils/reactFunctions";
import flock from "../screens/flock";

interface props {
  select: {
    home?: boolean;
    drugStore?: boolean;
    vaccine?: boolean;
    farm?: boolean;
    flock?: boolean;
  };
}

export default function Footer({
  select: {
    home = false,
    drugStore = false,
    vaccine = false,
    farm = false,
    flock = false,
  },
}: props) {
  const { navigate } = useSail();

  return (
    <View
      className="flex-row justify-between items-center absolute bottom-0 w-full bg-white"
      style={{
        shadowColor: "#000",
        elevation: 1,
      }}
    >
      {/* Home */}
      <TouchableOpacity onPress={() => navigate("home" as never)}>
        <RenderGradientButton
          selected={home}
          iconComponent={
            <MaterialCommunityIcons
              name="home-outline"
              size={32}
              color={home ? "#FFF" : "#525252"}
            />
          }
          text="Home"
        />
      </TouchableOpacity>

      {/* Farmácia */}
      <TouchableOpacity onPress={() => navigate("drugstore" as never)}>
        <RenderGradientButton
          selected={drugStore}
          iconComponent={
            <MaterialCommunityIcons
              name="pill"
              size={24}
              color={drugStore ? "#FFF" : "#525252"}
            />
          }
          text="Farmácia"
        />
      </TouchableOpacity>

      {/* Vacinar */}
      <TouchableOpacity onPress={() => navigate("vaccine" as never)}>
        <RenderGradientButton
          selected={vaccine}
          iconComponent={
            <Fontisto
              name="injection-syringe"
              size={24}
              color={vaccine ? "#FFF" : "#525252"}
            />
          }
          text="Vacinar"
        />
      </TouchableOpacity>

      {/* Fazendas */}
      <TouchableOpacity onPress={() => navigate("farm" as never)}>
        <RenderGradientButton
          selected={farm}
          iconComponent={<Image source={farmIcon} />}
          text="Fazendas"
        />
      </TouchableOpacity>

      {/* Rebanho */}
      <TouchableOpacity onPress={() => navigate("flock" as never)}>
        <RenderGradientButton
          selected={flock}
          iconComponent={<Image source={logoIcon} />}
          text="Rebanho"
        />
      </TouchableOpacity>
    </View>
  );
}

interface RenderGradientButtonProps {
  selected: boolean;
  iconComponent: React.ReactNode;
  text: string;
}

const RenderGradientButton = ({
  selected,
  iconComponent,
  text,
}: RenderGradientButtonProps) => (
  <LinearGradient
    colors={
      selected ? THEME.COLORS.GRADIENT_FOOTER : ["transparent", "transparent"]
    }
    className={[
      "justify-center items-center flex-1 px-3 py-1 rounded-lg",
      `${selected ? "top-[-30] relative" : ""}`,
    ].join(" ")}
  >
    {iconComponent}
    <Text
      className={`${
        selected ? "text-white font-bold" : "text-zinc-500 font-bold"
      }`}
    >
      {text}
    </Text>
  </LinearGradient>
);
