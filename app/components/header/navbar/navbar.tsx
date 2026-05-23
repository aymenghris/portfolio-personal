"use client"

import { NAV_ITEMS } from "@/constants/nav-items"
import { useActiveIndicator } from "@/hooks/use-active-indicator"
import { cn } from "@/lib/utils"
import { NavItem } from "./nav-item"

interface NavbarProps {
    isNavOpen: boolean
}

export const Navbar = ({ isNavOpen }: NavbarProps) => {
    const {
        activeLabel,
        navRef,
        activeBoxRef,
        setActiveLinkRef,
        handleLinkClick,
    } = useActiveIndicator()

    return (
        <nav
            ref={navRef}
            className={cn(
                "absolute top-full right-0 mt-2 min-w-40 p-2",
                "flex",
                "text-center",
                "rounded-2xl bg-zinc-50/10 ring-1 ring-zinc-50/5 ring-inset",
                "invisible scale-90 opacity-0 blur-sm transition-all",
                "isolate backdrop-blur-2xl",
                "md:visible md:static md:mt-0 md:flex md:scale-100 md:items-center md:opacity-100 md:blur-none",
                isNavOpen && "visible scale-100 opacity-100 blur-none",
            )}
        >
            {NAV_ITEMS.map(({ label }) => (
                <NavItem
                    key={label}
                    label={label}
                    isActive={label === activeLabel}
                    activeLinkRef={setActiveLinkRef}
                    onClick={handleLinkClick}
                />
            ))}

            <div
                className="absolute -z-10 rounded-lg bg-zinc-50 transition-all"
                ref={activeBoxRef}
            />
        </nav>
    )
}
