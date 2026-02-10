import { StyleSheet, View } from "react-native";
import HomeScreen from "../screens/HomeScreen";
import Header from "@/components/Header";

export default function HomeTab() {
  return (
    <View style={styles.container}>
      <Header />
      <HomeScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
