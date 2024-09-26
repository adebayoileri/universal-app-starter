import React from "react";
import {  Text as ReactNativeText, TextProps as RNTextProps } from "react-native";
import { cssInterop } from "nativewind";
import { cn } from "ui/utils/cn";

interface TextProps extends RNTextProps {
  children: React.ReactNode;
  className?: string;
}

cssInterop(ReactNativeText, {
  className: "style",
});

export const Text = React.forwardRef<React.ElementRef<typeof ReactNativeText>, TextProps>(
  ({ children, className,  ...props }, ref) => {
    return (
      <ReactNativeText
        ref={ref}
        className={cn(className)}
        {...props}
      >
        {children}
      </ReactNativeText>
    );
  }
)

Text.displayName = "Text";



