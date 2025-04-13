import NextLink from "next/link";
import { cn } from "../utils/cn";
import React from "react";
import { LinkProps } from "./link.type";

export const Link = ({
  to,
  children,
  className,
  replace = false,
  ...props
}: LinkProps) => {
  return (
    <NextLink
      href={to}
      replace={replace}
      className={cn("block", className)}
      {...props}
    >
      {children}
    </NextLink>
  );
};
