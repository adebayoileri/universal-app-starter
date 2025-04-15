import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { GradientOverlayProps } from "app/types";

/**
 * Native-specific implementation of the gradient overlay
 * Uses LinearGradient from expo-linear-gradient
 */
export default function GradientOverlay({
  colors = ["#000000", "transparent"],
  start = { x: 0, y: 1 },
  end = { x: 0, y: 0 },
  style,
  children,
}: GradientOverlayProps) {
  return (
    <LinearGradient
      colors={colors}
      start={start}
      end={end}
      style={[
        {
          borderBottomLeftRadius: 12,
          borderBottomRightRadius: 12,
          height: 52,
          width: "100%",
        },
        style,
      ]}
    >
      {children}
    </LinearGradient>
  );
}
