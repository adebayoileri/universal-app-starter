import { ScrollView } from "ui/scroll-view";
import { Text } from "ui/text";
import { View } from "ui/view";
import { Image } from "ui/image";
import { Button } from "ui/button";
import { cn } from "ui/utils/cn";
import { Category, getCategoryImageSource } from "app/utils/imageMapping";

export default function ProductsSidebar({
  categories,
  activeIndex,
  setActiveIndex,
}: {
  categories: Category[];
  activeIndex: number;
  setActiveIndex: (index: number) => void;
}) {
  return (
    <View className="h-full w-fit pt-2">
      <ScrollView contentContainerStyle={{ flexDirection: "column", gap: 24 }}>
        {categories.map((category, index) => {
          return (
            <Button
              variant="ghost"
              key={category.id}
              className={cn(
                "flex flex-col items-center rounded-none w-[100px] py-0",
                activeIndex === index
                  ? "border-r-4  border-r-[#12A150]"
                  : "border-r-4  border-r-[rgba(0,0,0,0.02)]",
              )}
              onPress={() => setActiveIndex(index)}
            >
              <Image
                source={getCategoryImageSource(category)}
                className="w-[72px] h-[72px] rounded-2xl"
                resizeMode="cover"
              />
              <Text
                className={`text-base text-center capitalize ${
                  activeIndex === index ? "font-bold" : "font-normal"
                }`}
              >
                {category.name}
              </Text>
            </Button>
          );
        })}
      </ScrollView>
    </View>
  );
}
