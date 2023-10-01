import { Text, View, Image } from "react-native";
import Footer from "../components/footer";

function Farm() {
  return (
    <View className="h-full justify-center items-center">
      <Text>Olá mundo farm</Text>
      <Footer select={{ farm: true }} />
    </View>
  );
}

export default Farm;
