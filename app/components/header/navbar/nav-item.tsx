import type { SectionLabel } from "@/constants/site-sections"
import { cn } from "@/lib/utils"

interface NavItemProps {
    label: SectionLabel
    href: string
    isActive: boolean
    activeLinkRef: (node: HTMLAnchorElement | null) => void
    onClick: (label: SectionLabel) => void
}

export const NavItem = ({
    label,
    href,
    isActive,
    activeLinkRef,
    onClick,
}: NavItemProps) => (
    <a
        href={href}
        ref={isActive ? activeLinkRef : null}
        className={cn(
            "flex h-9 items-center px-4 font-medium text-sm leading-tight tracking-wide transition-colors",
            isActive
                ? "text-zinc-900 transition-all duration-500"
                : "text-zinc-50/50 hover:text-zinc-50",
            label === "contact" && "md:hidden",
        )}
        onClick={() => onClick(label)}
    >
        <span className="first-letter:uppercase">{label}</span>
    </a>
)
