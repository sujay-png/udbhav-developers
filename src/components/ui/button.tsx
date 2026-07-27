import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm text-sm font-medium tracking-wide transition-colors duration-200 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-clay-hover",
        accent:
          "bg-accent text-accent-foreground hover:brightness-95",
        outline:
          "border border-ink/25 bg-transparent text-foreground hover:bg-ink hover:text-cream hover:border-ink",
        outlineLight:
          "border border-cream/40 bg-transparent text-cream hover:bg-cream hover:text-ink",
        ghost: "hover:bg-muted text-foreground",
        link: "text-primary underline-offset-4 hover:underline p-0 h-auto",
        dark: "bg-ink text-cream hover:bg-ink-soft",
      },
      size: {
        default: "h-11 px-6 py-2 uppercase text-[13px]",
        sm: "h-9 px-4 uppercase text-xs",
        lg: "h-13 px-8 py-3 uppercase text-sm",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
