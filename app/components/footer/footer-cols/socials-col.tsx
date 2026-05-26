interface FooterListProps {
    links: { label: string; href: string }[]
}

export const SocialsCol = ({ links }: FooterListProps) => {
    return (
        <div>
            <p className="cc-reveal-up mb-2">Socials</p>

            <ul>
                {links.map(({ label, href }) => (
                    <li key={label}>
                        <a
                            href={href}
                            className="cc-reveal-up block py-1 text-zinc-400 transition-colors hover:text-zinc-200"
                        >
                            {label}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}
