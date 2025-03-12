
import * as React from "react";
import { cn } from "@/lib/utils";

const Progress = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    value: number;
    max?: number;
    indicatorColor?: string;
  }
>(({ className, value, max = 100, indicatorColor, ...props }, ref) => {
  const percentage = (value / max) * 100;

  return (
    <div
      ref={ref}
      className={cn("relative h-2 w-full overflow-hidden rounded-full", className)}
      {...props}
    >
      <div
        className={cn("h-full w-full flex-1 transition-all", indicatorColor || "bg-primary")}
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
});

Progress.displayName = "Progress";

export { Progress };
