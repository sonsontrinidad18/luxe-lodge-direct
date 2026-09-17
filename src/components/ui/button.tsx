import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-sm px-5 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  { variants: { variant: {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    secondary: "border border-border bg-background text-foreground hover:bg-muted",
    outline: "border border-border bg-background text-foreground hover:bg-muted",
    hero: "bg-hero-button text-hero-button-foreground hover:bg-hero-button/90",
    heroOutline: "border border-hero-foreground/60 bg-transparent text-hero-foreground hover:bg-hero-foreground/10",
    ghost: "text-foreground hover:bg-muted",
  }, size: { default: "h-11", lg: "h-13 px-7", icon: "size-11 p-0" } }, defaultVariants: { variant: "default", size: "default" } },
);

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonVariants> & { asChild?: boolean };

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(function Button({ className, variant, size, asChild, ...props }, ref) {
  const Comp = asChild ? Slot : "button";
  return <Comp ref={ref} className={cn(buttonVariants({ variant, size }), className)} {...props} />;
});