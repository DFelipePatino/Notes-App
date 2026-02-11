import { View } from "react-native";
import HomeScreen from "../screens/HomeScreen";
import Header from "@/components/Header";
import { styles } from "@/styles/HomeTab.styles";

export default function HomeTab() {
  return (
    <View style={styles.container}>
      <Header />
      <HomeScreen />
    </View>
  );
}
