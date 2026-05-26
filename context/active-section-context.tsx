"use client"

import { createContext, type ReactNode, useContext, useState } from "react"
import { DEFAULT_SECTION, type SectionId } from "@/constants/site-sections"

interface ActiveSectionContextType {
    activeSection: SectionId
    setActiveSection: (section: SectionId) => void
}

const ActiveSectionContext = createContext<ActiveSectionContextType | null>(
    null,
)

export const ActiveSectionProvider = ({
    children,
}: {
    children: ReactNode
}) => {
    const [activeSection, setActiveSection] =
        useState<SectionId>(DEFAULT_SECTION)

    return (
        <ActiveSectionContext.Provider
            value={{ activeSection, setActiveSection }}
        >
            {children}
        </ActiveSectionContext.Provider>
    )
}

export const useActiveSection = () => {
    const context = useContext(ActiveSectionContext)
    if (!context) {
        throw new Error(
            "useActiveSection must be used within an ActiveSectionProvider",
        )
    }
    return context
}
