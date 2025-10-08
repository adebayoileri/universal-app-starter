import { Text } from "ui/text";
import { View } from "ui/view";
import { Platform } from "react-native";
import { cn } from "ui/utils/cn";

export function Home() {
  const isWeb = Platform.OS === "web";
  return (
    <View className={cn(`flex flex-1 justify-center items-center`)}>
      <Text
        style={{
          textAlign: "center",
        }}
      >
        Welcome to this app
      </Text>
    </View>
  );
}
