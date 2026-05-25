"use client"

import { Label as LabelPrimitive } from "radix-ui"
import type * as React from "react"

import { cn } from "@/lib/utils"

function Label({
    className,
    ...props
}: React.ComponentProps<typeof LabelPrimitive.Root>) {
    return (
        <LabelPrimitive.Root
            data-slot="label"
            className={cn(
                "mb-2 block font-normal text-sm text-zinc-200",
                className,
            )}
            {...props}
        />
    )
}

export { Label }
