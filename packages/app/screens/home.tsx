import { Text, View } from "ui/atomic";

export function Home() {
  return (
    <View className="flex items-center justify-center flex-1">
      <Text className="text-base">
        Edit{" "}
        <Text className="text-base font-bold">
          {" "}
          packages/app/screens/home.tsx
        </Text>{" "}
        to edit this screen.
      </Text>
    </View>
  );
}
