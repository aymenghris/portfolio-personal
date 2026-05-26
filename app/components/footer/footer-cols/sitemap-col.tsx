import type { SectionId, SiteSection } from "@/constants/site-sections"

interface FooterListProps {
    sites: SiteSection[]
    onClick: (id: SectionId) => void
}

export const SitemapCol = ({ sites, onClick }: FooterListProps) => {
    return (
        <div>
            <p className="cc-reveal-up mb-2">Sitemap</p>

            <ul>
                {sites.map(({ id, label, href }) => (
                    <li key={label}>
                        <a
                            href={href}
                            onClick={() => onClick(id)}
                            className="cc-reveal-up block py-1 text-zinc-400 capitalize transition-colors hover:text-zinc-200"
                        >
                            {label}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}
