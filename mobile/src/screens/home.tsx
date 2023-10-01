import { Text, View, Image } from "react-native";
import Footer from "../components/footer";

function Home() {
  return (
    <View className="h-full justify-center items-center">
      <Text>Olá mundo home</Text>
      <Footer select={{ home: true }} />
    </View>
  );
}

export default Home;
