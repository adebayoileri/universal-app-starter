import { View } from "ui/view";
import { TabBar } from "app/components/TabBar";
import { useState, useCallback } from "react";
import { Dimensions } from "react-native";
import Products from "./products";
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
  useAnimatedRef,
} from "react-native-reanimated";
import { GestureHandlerRootView } from "react-native-gesture-handler";

interface Company {
  id: string;
  name: string;
}

// Sample data for demonstration
const companies: Company[] = [
  { id: "1", name: "KMG Robust" },
  { id: "2", name: "Company 2" },
  { id: "3", name: "Company 3" },
  { id: "4", name: "Company 4" },
  { id: "5", name: "Company 5" },
];

const tabs = [
  "Overview",
  "Products",
  "Posts",
  "Certificates",
  "Representatives",
];
const { width: SCREEN_WIDTH } = Dimensions.get("window");

export function CompanyDetail() {
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useAnimatedRef<Animated.FlatList<Company>>();
  const scrollX = useSharedValue(0);

  const handleTabPress = useCallback((index: number) => {
    setActiveIndex(index);
    try {
      flatListRef.current?.scrollToIndex({
        index,
        animated: true,
      });
    } catch (error) {
      console.warn("Scroll to index failed:", error);
    }
  }, []);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event: { contentOffset: { x: number } }) => {
      scrollX.value = event.contentOffset.x;
    },
  });

  const getItemLayout = useCallback(
    (data: Company[] | null | undefined, index: number) => ({
      length: SCREEN_WIDTH,
      offset: SCREEN_WIDTH * index,
      index,
    }),
    [],
  );

  return (
    <GestureHandlerRootView className="flex-1">
      <View className="flex-1">
        <View className="pl-2 bg-white ">
          <TabBar
            tabs={tabs}
            activeIndex={activeIndex}
            onTabPress={handleTabPress}
          />
        </View>
        <Animated.FlatList<Company>
          ref={flatListRef}
          data={companies}
          renderItem={({ item, index }) => {
            return (
              <Animated.View className="w-screen">
                <Products />
              </Animated.View>
            );
          }}
          keyExtractor={(item) => {
            return item.id;
          }}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          className="flex-1"
          contentContainerClassName="flex-row"
          onScroll={scrollHandler}
          scrollEventThrottle={16}
          getItemLayout={(data, index) => {
            return {
              length: SCREEN_WIDTH,
              offset: SCREEN_WIDTH * index,
              index,
            };
          }}
          decelerationRate="fast"
          snapToInterval={SCREEN_WIDTH}
          snapToAlignment="center"
          initialNumToRender={3}
          windowSize={5}
          maxToRenderPerBatch={3}
          updateCellsBatchingPeriod={50}
          onMomentumScrollEnd={(event) => {
            const index = Math.round(
              event.nativeEvent.contentOffset.x / SCREEN_WIDTH,
            );
            setActiveIndex(index);
          }}
        />
      </View>
    </GestureHandlerRootView>
  );
}
