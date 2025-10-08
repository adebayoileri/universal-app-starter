import { Text } from "ui/text";
import { TextInput } from "ui/text-input";
import { View } from "ui/view";
import { Platform } from "react-native";
import { cn } from "ui/utils/cn";

export function Home() {
  const isWeb = Platform.OS === "web";
  return (
    <View
      className={cn(
        `flex flex-1 justify-center items-center`,
        isWeb && `bg-black`,
      )}
    >
      <Text className="text-base">
        Edit{" "}
        <Text className="text-base font-bold">
          {" "}
          packages/app/screens/home.tsx
        </Text>{" "}
        to edit this screen.
      </Text>
      {isWeb && <TextInput />}
    </View>
  );
}
