import type { MouseEvent } from "react"
import type { NavItemLabel } from "@/constants/nav-items"
import { cn } from "@/lib/utils"

interface NavItemProps {
    label: NavItemLabel
    isActive: boolean
    activeLinkRef: (node: HTMLAnchorElement | null) => void
    onClick: (event: MouseEvent<HTMLAnchorElement>, label: NavItemLabel) => void
}

export const NavItem = ({
    label,
    isActive,
    activeLinkRef,
    onClick,
}: NavItemProps) => (
    <a
        href={`#${label}`}
        ref={isActive ? activeLinkRef : null}
        className={cn(
            "flex h-9 items-center px-4 font-medium text-sm leading-tight tracking-wide transition-colors",
            isActive
                ? "text-zinc-900 transition-all duration-500"
                : "text-zinc-50/50 hover:text-zinc-50",
            label === "contact" && "md:hidden",
        )}
        onClick={(e) => onClick(e, label)}
    >
        <span className="first-letter:uppercase">{label}</span>
    </a>
)
