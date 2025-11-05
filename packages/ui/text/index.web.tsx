import React from "react";
import { cn } from "ui/utils/cn";

interface TextProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  className?: string;
  numberOfLines?: number;
}

export const Text = React.forwardRef<HTMLSpanElement, TextProps>(
  ({ children, className, numberOfLines, style, ...props }, ref) => {
    const textStyle = numberOfLines
      ? {
          display: "-webkit-box",
          WebkitLineClamp: numberOfLines,
          WebkitBoxOrient: "vertical" as const,
          overflow: "hidden",
          ...style,
        }
      : style;

    return (
      <span ref={ref} className={cn(className)} style={textStyle} {...props}>
        {children}
      </span>
    );
  }
);

Text.displayName = "Text";
