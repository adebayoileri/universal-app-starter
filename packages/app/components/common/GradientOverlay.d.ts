import React from "react";
import { ViewStyle } from "react-native";

// Web-specific style type that includes CSS properties
interface WebViewStyle extends ViewStyle {
  backgroundImage?: string;
}

export interface GradientOverlayProps {
  colors?: string[];
  start?: { x: number; y: number };
  end?: { x: number; y: number };
  style?: ViewStyle | WebViewStyle;
  children?: React.ReactNode;
}

declare const GradientOverlay: React.FC<GradientOverlayProps>;

export default GradientOverlay;
