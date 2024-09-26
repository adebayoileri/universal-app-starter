import React from "react";
import { Pressable, PressableProps } from "react-native";
import { cssInterop } from "nativewind";
import { cn } from "ui/utils/cn";
import { Text } from "ui/text";

interface ButtonProps extends PressableProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "outline";
  textClassName?: string
}

cssInterop(Pressable, {
  className: "style",
});

export const Button = React.forwardRef<React.ElementRef<typeof Pressable>, ButtonProps>(
  ({ children, className, textClassName,variant = "default", ...props }, ref) => {

    let content = children;
    if(typeof content === "string") content = <Text className={cn(textClassName)}>{children}</Text>

    return (
      <Pressable
        ref={ref}
        className={cn(
          "px-4 py-2 rounded",
          {
            "bg-blue-500 text-white": variant === "default",
            "border border-gray-300": variant === "outline",
          },
          className
        )}
        {...props}
      >
        {content}
      </Pressable>
    );
  }
);

Button.displayName = "Button";