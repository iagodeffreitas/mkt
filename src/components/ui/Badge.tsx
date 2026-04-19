import * as React from "react"
import { cn } from "@/lib/utils"

export interface BadgeProps {
  className?: string;
  variant?: "default" | "secondary" | "outline" | "destructive" | "new";
  children?: React.ReactNode;
}

function Badge({ className, variant = "default", children, ...props }: BadgeProps & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded px-1.5 py-0.5 text-[9px] font-black uppercase tracking-widest transition-colors",
        {
          "bg-brand text-black": variant === "default",
          "bg-white/5 text-white/50": variant === "secondary",
          "bg-blue-500 text-white": variant === "new",
          "border border-white/10 text-white/50": variant === "outline",
          "bg-red-900/40 text-red-500 border border-red-500/20": variant === "destructive",
        },
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export { Badge }
