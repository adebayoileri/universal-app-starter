import React from "react";
import { cn } from "ui/utils/cn";

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  variant?: "default" | "outline";
  editable?: boolean;
  onChangeText?: (text: string) => void;
}

export const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  ({ className, variant = "default", editable = true, onChangeText, onChange, ...props }, ref) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (onChangeText) onChangeText(e.target.value);
      if (onChange) onChange(e);
    };

    return (
      <input
        ref={ref}
        className={cn(
          "px-4 py-2 rounded border transition-colors",
          {
            "border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200": variant === "default",
            "border-2 border-gray-400 focus:border-blue-500 focus:outline-none": variant === "outline",
          },
          !editable && "bg-gray-100 cursor-not-allowed",
          className
        )}
        disabled={!editable}
        onChange={handleChange}
        {...props}
      />
    );
  }
);

TextInput.displayName = "TextInput";
