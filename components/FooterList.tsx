import { FC } from 'react'

interface FooterListProps {
    listName: string
    listItems: { label: string; href: string }[]
}

const FooterList: FC<FooterListProps> = ({ listName, listItems }) => {
    return (
        <div>
            <p className="cc-reveal-up mb-2">{listName}</p>
            <ul>
                {listItems.map(({ label, href }, index) => (
                    <li key={index}>
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

export default FooterList
