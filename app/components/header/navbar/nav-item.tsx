import type { SectionId, SiteSection } from "@/constants/site-sections"
import { cn } from "@/lib/utils"

interface NavItemProps extends SiteSection {
    isActive: boolean
    activeLinkRef: (node: HTMLAnchorElement | null) => void
    onClick: (id: SectionId) => void
}

export const NavItem = ({
    id,
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
            id === "contact" && "md:hidden",
        )}
        onClick={() => onClick(id)}
    >
        <span className="first-letter:uppercase">{label}</span>
    </a>
)
