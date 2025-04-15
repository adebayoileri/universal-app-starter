import { Image } from "ui/image";
import { View } from "ui/view";
import { Platform } from "react-native";
import { Text } from "ui/text";

export default function CompanyCard() {
  const bannerImg = Platform.select({
    web: "assets/kmgRobust/company_baner.png",
    default: require("../../../app/assets/kmgRobust/company_baner.png"),
  });

  const logoImg = Platform.select({
    web: "assets/kmgRobust/logo.png",
    default: require("../../../app/assets/kmgRobust/logo.png"),
  });

  const shieldBadge = Platform.select({
    web: "assets/kmgRobust/ShieldCheck.png",
    default: require("../../../app/assets/kmgRobust/ShieldCheck.png"),
  });

  const proBadge = Platform.select({
    web: "assets/kmgRobust/pro_badge.png",
    default: require("../../../app/assets/kmgRobust/pro_badge.png"),
  });

  return (
    <View className="h-[240px] w-screen max-w-[400px] overflow-hidden relative">
      <Image
        source={bannerImg}
        className="w-full  scale-[1.7] absolute left-36 top-10  block"
        resizeMode="cover"
      />
      <View className="absolute w-full bg-white top-[140px] ">
        <Image source={logoImg} className="h-20 w-20 -top-10 left-2 bg-white" />
      </View>
      <View className="absolute w-full bg-white h-32 top-[160px] p-3 ">
        <View className=" flex flex-row gap-1 items-center">
          <Text className="text-2xl font-bold font-sans text-black">
            KMG Robust
          </Text>
          <Image source={shieldBadge} className="h-6 w-6" />
          <Image source={proBadge} className="h-4 w-8" />
        </View>
        <View className="flex flex-row gap-1">
          <Text className="text-base font-normal font-sans text-black opacity-60">
            24 M Revenue
          </Text>
          <View className="w-1 h-1 ">
            <Text className="text-black opacity-60">.</Text>
          </View>
          <Text className="text-base font-normal font-sans text-black opacity-60">
            1-10 Employees
          </Text>
          <View className="w-1 h-1 ">
            <Text className="text-black opacity-60">.</Text>
          </View>
          <Text className="text-base font-normal font-sans text-black opacity-60">
            15 Years Old
          </Text>
        </View>
      </View>
    </View>
  );
}
