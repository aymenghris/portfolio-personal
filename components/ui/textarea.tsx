import type * as React from "react"
import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
    return (
        <textarea
            data-slot="textarea"
            className={cn(
                "block max-h-80 min-h-32 resize-y",
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

export { Textarea }
