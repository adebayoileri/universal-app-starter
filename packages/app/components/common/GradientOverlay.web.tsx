import React from "react";
import { View } from "ui/view";
import { GradientOverlayProps } from "app/types";
import { cn } from "ui/utils/cn";

/**
 * Web-specific implementation of the gradient overlay
 * Uses CSS-based gradient
 */
export default function GradientOverlay({
  colors = ["#000000", "transparent"],
  start = { x: 0, y: 1 },
  end = { x: 0, y: 0 },
  style,
  children,
}: GradientOverlayProps) {
  return (
    <View
      style={[
        {
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 52,
          borderBottomLeftRadius: 12,
          borderBottomRightRadius: 12,
        },
        style,
      ]}
      className={cn(
        "overflow-hidden",
        "bg-gradient-to-t from-black/80 to-transparent",
      )}
    >
      {children}
    </View>
  );
}
