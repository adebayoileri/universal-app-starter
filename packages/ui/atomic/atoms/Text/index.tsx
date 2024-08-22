import { Text as ReactNativeText } from "react-native";
import { cssInterop } from "nativewind";

export const Text = cssInterop(ReactNativeText, {
  className: "style",
});

export type TextProps = ReactNativeText["props"];
