import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "link" | "white";
  size?: "default" | "sm" | "lg" | "icon";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center font-bold uppercase tracking-widest transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand disabled:pointer-events-none disabled:opacity-50 cursor-pointer text-center",
          {
            "bg-brand text-black hover:bg-brand-hover": variant === "default",
            "bg-white text-black hover:bg-gray-200": variant === "white",
            "border border-white/10 bg-transparent hover:bg-white/5 text-primary": variant === "outline",
            "hover:bg-white/5 text-primary": variant === "ghost",
            "text-primary underline-offset-4 hover:underline": variant === "link",
            "h-10 px-6 py-2 text-[10px] rounded-lg": size === "default",
            "h-8 rounded-lg px-4 text-[9px]": size === "sm",
            "h-12 rounded-full px-8 text-xs": size === "lg",
            "h-10 w-10 rounded-lg": size === "icon",
          },
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
