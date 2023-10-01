import { Text, View, Image } from "react-native";
import Footer from "../components/footer";

function DrugStore() {
  return (
    <View className="h-full justify-center items-center">
      <Text>Olá mundo Drug</Text>
      <Footer select={{ drugStore: true }} />
    </View>
  );
}

export default DrugStore;
