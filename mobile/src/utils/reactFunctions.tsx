import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export function useSail() {
  const { navigate, goBack } = useNavigation();

  return {
    navigate,
    goBack,
  };
}
