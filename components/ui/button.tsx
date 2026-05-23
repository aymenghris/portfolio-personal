import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"
import type * as React from "react"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
    cn(
        "group/button",
        "inline-flex shrink-0 select-none items-center justify-center whitespace-nowrap",
        "rounded-lg border border-transparent bg-clip-padding",
        "font-medium text-sm",
        "outline-none transition-all",
        "cursor-pointer",
        "focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50",
        "active:not-aria-[haspopup]:translate-y-px",
        "disabled:pointer-events-none disabled:opacity-50",
        "aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20",
        "dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40",
        "[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
    ),
    {
        variants: {
            variant: {
                default:
                    "bg-primary text-primary-foreground [a]:hover:bg-primary/80",
                primary: cn(
                    "font-medium text-sm",
                    "rounded-xl bg-zinc-50 ring-1 ring-zinc-50/5 ring-inset",
                    "text-zinc-900",
                    "active:bg-zinc-50/80",
                ),
                "primary-outline": cn(
                    "font-medium text-sm",
                    "rounded-xl bg-zinc-800",
                    "cursor-pointer transition-[background-color]",
                    "hover:bg-zinc-700 active:bg-zinc-800",
                ),
                outline: cn(
                    "font-medium text-sm",
                    "rounded-xl bg-zinc-800",
                    "cursor-pointer transition-[background-color]",
                    "hover:bg-zinc-700 active:bg-zinc-800",
                ),
                menu: cn(
                    "rounded-xl bg-zinc-50/10 backdrop-blur-2xl",
                    "hover:bg-zinc-50/15 active:scale-95",
                ),
            },
            size: {
                default: "h-9 max-w-max gap-1.5 px-2.5 px-4",
                xs: "h-6 gap-1",
                sm: "h-7 gap-1",
                md: "h-10 gap-1.5 px-4",
                lg: "h-11 max-w-max gap-1.5 px-4",
                icon: "size-8",
                "icon-xs":
                    "size-6 in-data-[slot=button-group]:rounded-lg rounded-[min(var(--radius-md),10px)] [&_svg:not([class*='size-'])]:size-3",
                "icon-sm":
                    "size-7 in-data-[slot=button-group]:rounded-lg rounded-[min(var(--radius-md),12px)]",
                "icon-lg": "size-10",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    },
)

function Button({
    className,
    variant = "default",
    size = "default",
    asChild = false,
    ...props
}: React.ComponentProps<"button"> &
    VariantProps<typeof buttonVariants> & {
        asChild?: boolean
    }) {
    const Comp = asChild ? Slot.Root : "button"

    return (
        <Comp
            data-slot="button"
            data-variant={variant}
            data-size={size}
            className={cn(buttonVariants({ variant, size, className }))}
            {...props}
        />
    )
}

export { Button, buttonVariants }
