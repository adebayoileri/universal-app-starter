import { registerRootComponent } from "expo";
import { ExpoRoot } from "expo-router";
import { View, ActivityIndicator } from "react-native";
import { useLoadFonts } from "./app/fonts";

// Must be exported or Fast Refresh won't update the context
export function App() {
  const fontsLoaded = useLoadFonts();
  const ctx = require.context("./app");

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return <ExpoRoot context={ctx} />;
}

registerRootComponent(App);
