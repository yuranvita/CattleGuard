import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
type StackParamList = {
  welcome: undefined;
  home: undefined;
  login: undefined;
  register: undefined;
};

export function useSail() {
  const { navigate } =
    useNavigation<NativeStackNavigationProp<StackParamList>>();

  return {
    navigate,
  };
}
