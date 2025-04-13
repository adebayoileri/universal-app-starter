import { Link as ExpoLink } from "expo-router";
import { cn } from "../utils/cn";
import React from "react";
import { LinkProps } from "./link.type";
import { View } from "ui/view";
import { Text } from "ui/text";

export const Link = ({
  to,
  children,
  className,
  replace = false,
  ...props
}: LinkProps) => {
  return (
    <ExpoLink
      href={to}
      replace={replace}
      className={cn("block ", className)}
      {...props}
    >
      {typeof children === "string" ? <Text>{children}</Text> : children}
    </ExpoLink>
  );
};
