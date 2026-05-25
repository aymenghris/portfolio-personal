interface ProjectCardTagsProps {
    tags: string[]
}

export const ProjectCardTags = ({ tags }: ProjectCardTagsProps) => {
    if (tags.length === 0) return null

    return (
        <ul className="flex flex-wrap items-center gap-2">
            {tags.map((label) => (
                <li
                    key={label}
                    className="grid h-8 items-center rounded-lg bg-zinc-50/5 px-4 text-sm text-zinc-400"
                >
                    {label}
                </li>
            ))}
        </ul>
    )
}
