import { View } from "ui/view";
import { Text } from "ui/text";
import { Button } from "ui/button";
import { FlatList, FlatListRef } from "ui/flat-list";
import { useRef, useEffect } from "react";

interface TabBarProps {
  tabs: string[];
  activeIndex: number;
  onTabPress: (index: number) => void;
}

export function TabBar({ tabs, activeIndex, onTabPress }: TabBarProps) {
  const flatListRef = useRef<FlatListRef<any>>(null);

  useEffect(() => {
    if (flatListRef.current) {
      flatListRef.current.scrollToIndex({
        index: activeIndex,
        animated: true,
        viewPosition: 0.5,
      });
    }
  }, [activeIndex]);

  const renderItem = ({ item, index }: { item: string; index: number }) => (
    <Button
      onPress={() => onTabPress(index)}
      variant="ghost"
      className={`rounded-none w-fit p-0 px-2`}
    >
      <Text
        className={`text-sm text-[#14171F] whitespace-nowrap  py-1 leading-[1.5] ${
          activeIndex === index
            ? "font-bold border-b-2 border-[#12A150]"
            : "font-normal "
        }`}
      >
        {item}
      </Text>
    </Button>
  );

  return (
    <View className="border-b border-[rgba(0,0,0,0.1)]">
      <FlatList
        ref={flatListRef}
        data={tabs}
        renderItem={renderItem}
        keyExtractor={(item) => item}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
        bounces={false}
        onScrollToIndexFailed={(info) => {
          setTimeout(() => {
            if (flatListRef.current) {
              flatListRef.current.scrollToIndex({
                index: info.index,
                animated: true,
                viewPosition: 0.5,
              });
            }
          }, 0);
        }}
      />
    </View>
  );
}
