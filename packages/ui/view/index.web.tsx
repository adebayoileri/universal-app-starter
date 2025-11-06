import React from "react";
import { cn } from "ui/utils/cn";

interface ViewProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
}

export const View = React.forwardRef<HTMLDivElement, ViewProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn(className)} {...props}>
        {children}
      </div>
    );
  }
);

View.displayName = "View";
