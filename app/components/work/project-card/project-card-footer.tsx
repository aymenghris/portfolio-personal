import Link from "next/link"
import { TbArrowUpRight } from "react-icons/tb"
import { ProjectCardTags } from "./project-card-tags"

interface ProjectCardFooterProps {
    title: string
    tags: string[]
    projectLink: string
}

export const ProjectCardFooter = ({
    title,
    tags,
    projectLink,
}: ProjectCardFooterProps) => {
    return (
        <div>
            <div className="mb-3 flex items-center justify-between gap-4">
                <h3 className="font-normal text-[22px]">{title}</h3>
                <Link
                    href={projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View project: ${title}`}
                    className="grid size-11 shrink-0 place-items-center rounded-lg bg-amber-400 text-zinc-950 transition-opacity hover:opacity-80"
                >
                    <TbArrowUpRight size={25} aria-hidden="true" />
                </Link>
            </div>
            <ProjectCardTags tags={tags} />
        </div>
    )
}
