"use client"

import { useState } from "react"
import { PortfolioLogo } from "@/components/portfolio-logo"
import { cn } from "@/lib/utils"
import { HeaderCta } from "./header-cta"
import { HeaderMenuToggle } from "./header-menu-toggle"
import { HeaderNav } from "./header-nav"

export const Header = () => {
    const [isNavOpen, setIsNavOpen] = useState(false)
    const toggleNav = () => setIsNavOpen((prev) => !prev)

    return (
        <header
            className={cn(
                "fixed top-0 left-0 z-40 h-20 w-full",
                "flex items-center",
                "bg-gradient-to-b from-zinc-900 to-zinc-900/0",
            )}
        >
            <div
                className={cn(
                    "mx-auto w-full max-w-screen-2xl px-4",
                    "flex items-center justify-between",
                    "md:grid md:grid-cols-[1fr_3fr_1fr] md:px-6",
                )}
            >
                <PortfolioLogo />

                <div className="relative md:justify-self-center">
                    <HeaderMenuToggle isOpen={isNavOpen} onToggle={toggleNav} />
                    <HeaderNav isOpen={isNavOpen} />
                </div>

                <HeaderCta />
            </div>
        </header>
    )
}
