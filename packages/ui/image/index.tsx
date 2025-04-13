import React, { forwardRef } from "react";
import { Image as RNImage, ImageProps as RNImageProps } from "react-native";
import { cssInterop } from "nativewind";
import { cn } from "ui/utils/cn";

cssInterop(RNImage, {
  className: "style",
});

interface ImageProps extends RNImageProps {
  className?: string;
}

export const Image = forwardRef<React.ElementRef<typeof RNImage>, ImageProps>(
  ({ className, ...props }, ref) => {
    return (
      <RNImage
        ref={ref}
        className={cn("w-full h-full", className)}
        {...props}
      />
    );
  },
);

Image.displayName = "Image";
