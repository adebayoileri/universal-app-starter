import { useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";

export default function ProductScreen() {
  const { id } = useLocalSearchParams();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Product ID: {id}</Text>
    </View>
  );
}
