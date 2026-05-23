export type NavItemLabel = "home" | "about" | "work" | "reviews" | "contact"

interface NavItem {
    label: NavItemLabel
    isDefault?: boolean
}

export const NAV_ITEMS: NavItem[] = [
    { label: "home", isDefault: true },
    { label: "about" },
    { label: "work" },
    { label: "reviews" },
    { label: "contact" },
] as const
