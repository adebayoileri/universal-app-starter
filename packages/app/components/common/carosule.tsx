// components/CarouselDots.tsx
import React from "react";
import { View } from "ui/view";

interface CarouselDotsProps {
  total?: number;
  activeIndex?: number;
}

export default function CarouselDots({
  total = 5,
  activeIndex = 1,
}: CarouselDotsProps) {
  return (
    <View className="flex flex-row justify-center items-center gap-x-1 ">
      {Array.from({ length: total }).map((_, index) => (
        <View
          key={index}
          className={`h-1 w-1  ${
            activeIndex === index
              ? "bg-white w-4 rounded-xl"
              : "bg-white/30 rounded-full"
          }`}
        />
      ))}
    </View>
  );
}
