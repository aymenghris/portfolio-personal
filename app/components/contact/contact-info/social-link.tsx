import Link from "next/link"
import type { ComponentType } from "react"
import { cn } from "@/lib/utils"

interface SocialLinkProps {
    href: string
    icon: ComponentType<{ size?: number }>
    label: string
}

export const SocialLink = ({ href, icon: Icon, label }: SocialLinkProps) => (
    <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className={cn(
            "grid place-items-center",
            "size-12",
            "rounded-lg ring-2 ring-zinc-50/5 ring-inset",
            "transition-colors",
            "hover:bg-zinc-50 hover:text-zinc-950 active:bg-zinc-50/80",
            "cc-reveal-up",
        )}
    >
        <Icon size={25} />
    </Link>
)
