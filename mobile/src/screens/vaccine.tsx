import { Text, View, Image } from "react-native";
import Footer from "../components/footer";

function Vaccine() {
  return (
    <View className="h-full justify-center items-center">
      <Text>Olá mundo Vacina</Text>
      <Footer select={{ vaccine: true }} />
    </View>
  );
}

export default Vaccine;
