interface FooterListProps {
    listName: string
    listItems: { label: string; href: string }[]
}

export const FooterList = ({ listName, listItems }: FooterListProps) => {
    return (
        <div>
            <p className="cc-reveal-up mb-2">{listName}</p>
            <ul>
                {listItems.map(({ label, href }) => (
                    <li key={crypto.randomUUID()}>
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
