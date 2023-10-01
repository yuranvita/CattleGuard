import { Text, View, Image } from "react-native";
import Footer from "../components/footer";

function Flock() {
  return (
    <View className="h-full justify-center items-center">
      <Text>Olá mundo Flock</Text>
      <Footer select={{ flock: true }} />
    </View>
  );
}

export default Flock;
