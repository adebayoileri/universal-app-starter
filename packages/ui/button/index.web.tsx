import React from "react";
import { cn } from "ui/utils/cn";
import { Text } from "ui/text";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "outline";
  textClassName?: string;
  onPress?: () => void;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, textClassName, variant = "default", onPress, onClick, ...props }, ref) => {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (onPress) onPress();
      if (onClick) onClick(e);
    };

    let content = children;
    if (typeof content === "string") {
      content = <Text className={cn(textClassName)}>{children}</Text>;
    }

    return (
      <button
        ref={ref}
        className={cn(
          "px-4 py-2 rounded transition-colors",
          {
            "bg-blue-500 text-white hover:bg-blue-600": variant === "default",
            "border border-gray-300 hover:bg-gray-100": variant === "outline",
          },
          props.disabled && "opacity-50 cursor-not-allowed",
          className
        )}
        onClick={handleClick}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";
