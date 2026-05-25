export type SectionLabel = "home" | "about" | "work" | "reviews" | "contact"

interface SiteSection {
    label: SectionLabel
    href: string
}

export const DEFAULT_SECTION: SectionLabel = "home"

export const SITE_SECTIONS = [
    { label: "home", href: "#home" },
    { label: "about", href: "#about" },
    { label: "work", href: "#work" },
    { label: "reviews", href: "#reviews" },
    { label: "contact", href: "#contact" },
] as const satisfies readonly SiteSection[]

// FOOTER SITEMAP
const LABEL_OVERRIDES: Partial<Record<string, string>> = {
    contact: "contact me",
}

export const FOOTER_SITEMAP = SITE_SECTIONS.map((item) => ({
    ...item,
    label: LABEL_OVERRIDES[item.label] ?? item.label,
}))
