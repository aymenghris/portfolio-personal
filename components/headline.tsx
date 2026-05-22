import clsx from "clsx"
import type { ReactNode } from "react"
import { getHeadlineResponsiveStyles, type Size } from "@/utils/headlineStyles"

interface HeadlineProps {
    children: ReactNode
    size?: Size
    className?: string
}

export const Headline = ({
    children,
    size = "default",
    className,
}: HeadlineProps) => {
    return (
        <h2
            className={clsx(
                "mb-8",
                "font-semibold text-3xl",
                "bg-gradient-to-b from-[#fafafa] to-[#a1a1aa] bg-clip-text text-transparent",
                getHeadlineResponsiveStyles(size),
                className,
            )}
        >
            {children}
        </h2>
    )
}
