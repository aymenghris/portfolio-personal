const SECTION_IDS = ["home", "about", "work", "reviews", "contact"] as const
export type SectionId = (typeof SECTION_IDS)[number]

export interface SiteSection {
    id: SectionId
    label: string
    href: string
}

export const DEFAULT_SECTION: SectionId = "home"

export const SITE_SECTIONS = SECTION_IDS.map((id) => ({
    id,
    label: id,
    href: `#${id}`,
}))

const FOOTER_LABEL_OVERRIDES: Partial<Record<SectionId, string>> = {
    contact: "contact me",
}
export const FOOTER_SITEMAP = SITE_SECTIONS.map((section) => ({
    ...section,
    label: FOOTER_LABEL_OVERRIDES[section.id] ?? section.label,
}))
