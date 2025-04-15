import React, { forwardRef } from "react";
import {
  FlatList as RNFlatList,
  FlatListProps as RNFlatListProps,
} from "react-native";
import { cn } from "../utils/cn";

export interface FlatListProps<T> extends RNFlatListProps<T> {
  className?: string;
  contentContainerClassName?: string;
}
export type FlatListRef<T> = RNFlatList<T>;

export const FlatList = forwardRef<RNFlatList<any>, FlatListProps<any>>(
  ({ className, contentContainerClassName, ...props }, ref) => {
    return (
      <RNFlatList
        ref={ref}
        className={cn(className)}
        contentContainerClassName={cn("flex-grow", contentContainerClassName)}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        {...props}
      />
    );
  },
);

// Add display name for debugging
FlatList.displayName = "FlatList";
