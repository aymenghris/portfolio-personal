"use client"

import { SitemapCol } from "@/app/components/footer/footer-cols/sitemap-col"
import { FOOTER_SITEMAP as SITEMAP } from "@/constants/site-sections"
import { SOCIAL_LINKS } from "@/constants/social-links"
import { useActiveSection } from "@/context/active-section-context"
import { SocialsCol } from "./socials-col"

export const FooterCols = () => {
    const { setActiveSection } = useActiveSection()

    return (
        <div className="grid grid-cols-2 gap-4 lg:pl-20">
            <SitemapCol sites={SITEMAP} onClick={setActiveSection} />
            <SocialsCol links={SOCIAL_LINKS} />
        </div>
    )
}
