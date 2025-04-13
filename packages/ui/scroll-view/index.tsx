import React, { forwardRef } from "react";
import {
  ScrollView as RNScrollView,
  ScrollViewProps,
  RefreshControl,
  RefreshControlProps,
} from "react-native";
import { cssInterop } from "nativewind";
import { cn } from "ui/utils/cn";

cssInterop(RNScrollView, {
  className: "style",
});

interface CustomScrollViewProps extends ScrollViewProps {
  className?: string;
  contentContainerClassName?: string;
  refreshControlProps?: RefreshControlProps;
  refreshing?: boolean;
  onRefresh?: () => void;
}

export const ScrollView = forwardRef<
  React.ElementRef<typeof RNScrollView>,
  CustomScrollViewProps
>(
  (
    {
      className,
      contentContainerClassName,
      refreshing = false,
      onRefresh,
      refreshControlProps,
      children,
      ...props
    },
    ref,
  ) => {
    // Render refresh control only if onRefresh is provided
    const refreshControl = onRefresh ? (
      <RefreshControl
        refreshing={refreshing}
        onRefresh={onRefresh}
        colors={["#3b82f6"]} // Tailwind blue-500
        tintColor="#3b82f6"
        {...refreshControlProps}
      />
    ) : undefined;

    return (
      <RNScrollView
        ref={ref}
        className={cn(className)}
        contentContainerClassName={cn(
          "flex-grow", // Ensure content can grow
          contentContainerClassName,
        )}
        refreshControl={refreshControl}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        {...props}
      >
        {children}
      </RNScrollView>
    );
  },
);

ScrollView.displayName = "ScrollView";
