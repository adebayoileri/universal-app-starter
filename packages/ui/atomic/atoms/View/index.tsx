import { View as ReactNativeView } from "react-native";
import { cssInterop } from "nativewind";

export const View = cssInterop(ReactNativeView, {
  className: "style",
});
