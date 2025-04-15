import React, { forwardRef } from "react";
import {
  ScrollView as RNScrollView,
  ScrollViewProps,
  RefreshControl,
  RefreshControlProps,
  ViewStyle,
  StyleProp,
} from "react-native";
import { cssInterop } from "nativewind";
import { cn } from "ui/utils/cn";

cssInterop(RNScrollView, {
  className: "style",
});

interface CustomScrollViewProps extends ScrollViewProps {
  className?: string;
  refreshControlProps?: RefreshControlProps;
  refreshing?: boolean;
  onRefresh?: () => void;
  contentContainerStyle?: StyleProp<ViewStyle>;
}

export const ScrollView = forwardRef<
  React.ElementRef<typeof RNScrollView>,
  CustomScrollViewProps
>(
  (
    {
      className,
      refreshing = false,
      onRefresh,
      refreshControlProps,
      children,
      contentContainerStyle,
      ...props
    },
    ref,
  ) => {
    const refreshControl = onRefresh ? (
      <RefreshControl
        refreshing={refreshing}
        onRefresh={onRefresh}
        colors={["#3b82f6"]}
        tintColor="#3b82f6"
        {...refreshControlProps}
      />
    ) : undefined;

    return (
      <RNScrollView
        ref={ref}
        className={cn(className)}
        refreshControl={refreshControl}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        overScrollMode="never"
        {...props}
        contentContainerStyle={contentContainerStyle}
      >
        {children}
      </RNScrollView>
    );
  },
);

ScrollView.displayName = "ScrollView";
