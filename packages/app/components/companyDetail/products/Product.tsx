import { View, Platform } from "react-native";
import { Image } from "ui/image";
import { getProductImageSource } from "app/utils/imageMapping";
import { ScrollView } from "ui/scroll-view";
import { Text } from "ui/text";
import { Link } from "ui/link";
import CarouselDots from "app/components/common/carosule";
import { ProductProps } from "app/types";
import GradientOverlay from "app/components/common/GradientOverlay";
// Helper function to get the caret icon source based on platform
const getCaretIconSource = () => {
  return Platform.select({
    web: { uri: "assets/kmgRobust/CaretRight.png" },
    default: require("../../../assets/kmgRobust/CaretRight.png"),
  });
};

export default function Product({ products, categoryId }: ProductProps) {
  return (
    <View className="h-full bg-white pt-2">
      <ScrollView contentContainerStyle={{ flexDirection: "column", gap: 16 }}>
        {products.map((product) => (
          <View className="rounded-xl " key={product.id}>
            <View className="relative">
              <Image
                source={getProductImageSource(product, categoryId)}
                className="w-[235px] h-[150px] rounded-xl"
              />
              <View className="absolute bottom-0 w-full ">
                <GradientOverlay>
                  <View className="absolute bottom-3  flex flex-row justify-between items-center w-full px-3">
                    <Text className="text-white text-sm font-bold font-[DMSans] capitalize">
                      {product.name}
                    </Text>
                    <CarouselDots total={7} activeIndex={0} />
                  </View>
                </GradientOverlay>
              </View>
            </View>
            <View className="py-3 flex flex-col gap-y-3">
              <View className="flex flex-row gap-x-2">
                <Text className="block min-w-[100px] font-normal text-[10px] leading-[14px] text-[#666666] font-[DMSans]">
                  Origin
                </Text>
                <Text className="block text-xs leading-[14px] font-medium font-[DMSans]">
                  Tanzania
                </Text>
              </View>
              <View className="flex flex-row gap-x-2">
                <Text className="block min-w-[100px] font-normal text-[10px] leading-[14px] text-[#666666] font-[DMSans]">
                  Grade
                </Text>
                <Text className="block text-xs leading-[14px] font-medium font-[DMSans]">
                  Choice, Export Quality
                </Text>
              </View>
              <View className="flex flex-row gap-x-2">
                <Text className="block min-w-[100px] font-normal text-[10px] leading-[14px] text-[#666666] font-[DMSans]">
                  Packaging Type
                </Text>
                <Text className="block text-xs leading-[14px] font-medium font-[DMSans]">
                  Carton Box (50kg)
                </Text>
              </View>
              <View>
                <Link
                  to={`/products/${product.id}`}
                  className="flex flex-row  items-center"
                >
                  <Text className="block text-xs font-semibold text-[#12A150] font-[DMSans]">
                    View All Details
                  </Text>
                  <Image source={getCaretIconSource()} className="w-3 h-3" />
                </Link>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
