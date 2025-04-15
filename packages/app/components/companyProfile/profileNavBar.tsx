import { Text } from "ui/text";
import { View } from "ui/view";
import { Image } from "ui/image";
import { Link } from "ui/link";
import { Platform } from "react-native";

export function ProfileNavBar() {
  const leftIcon = Platform.select({
    web: "/assets/kmgRobust/left.png",
    native: require("../../assets/kmgRobust/left.png"),
  });

  const whatsappIcon = Platform.select({
    web: "/assets/kmgRobust/logos_whatsapp-icon.png",
    native: require("../../assets/kmgRobust/logos_whatsapp-icon.png"),
  });
  return (
    <View className="flex flex-row gap-4 justify-between p-4">
      {Platform.OS !== "web" && (
        <Link to="/">
          <Image source={leftIcon} className="h-6 w-6" />
        </Link>
      )}
      <Text className="text-2xl font-bold font-sans text-black">
        KMG Robust
      </Text>
      <Link to="/whatsapp">
        <Image source={whatsappIcon} className="h-6 w-6" />
      </Link>
    </View>
  );
}
