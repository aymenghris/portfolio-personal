import type * as React from "react"
import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
    return (
        <input
            type={type}
            data-slot="input"
            className={cn(
                "block",
                "w-full px-3 py-3",
                "text-sm",
                "rounded-xl bg-zinc-800 outline-none ring-1 ring-transparent ring-inset",
                "transition-shadow",
                "hover:ring-zinc-50/5 focus:ring-2 focus:ring-amber-400",
                "placeholder:text-zinc-400",
                className,
            )}
            {...props}
        />
    )
}

export { Input }
