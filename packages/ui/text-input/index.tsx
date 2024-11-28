import React from "react";
import { TextInput as ReactNativeTextInput, TextInputProps as RNTextInputProps } from "react-native";
import { cssInterop } from "nativewind";
import { cn } from "ui/utils/cn";

interface TextInputProps extends RNTextInputProps {
  className?: string;
  variant?: "default" | "outline";
}

cssInterop(ReactNativeTextInput, {
  className: "style",
});

export const TextInput = React.forwardRef<React.ElementRef<typeof ReactNativeTextInput>, TextInputProps>(
  ({ className, variant = "default", ...props }, ref) => {
    return (
        <ReactNativeTextInput
          ref={ref}
          className={cn(
            "w-3/4 h-12 rounded-full px-4 text-black",
            {
              "bg-gray-50": variant === "default",
              "border border-gray-300": variant === "outline",
            },
            className
          )}
          {...props}
        />
    );
  }
)

TextInput.displayName = "TextInput";



