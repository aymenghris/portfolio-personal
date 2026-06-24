import Link from "next/link"
import { TbArrowUpRight, TbCode } from "react-icons/tb"
import type { ProjectItem } from "@/types/project"
import { ProjectCardTags } from "./project-card-tags"

interface ProjectCardFooterProps
    extends Pick<ProjectItem, "title" | "tags" | "liveLink" | "repoLink"> {}

export const ProjectCardFooter = ({
    title,
    tags,
    liveLink,
    repoLink,
}: ProjectCardFooterProps) => {
    return (
        <div>
            <div className="mb-3 flex items-center justify-between gap-4">
                <h3 className="font-normal text-xl capitalize">{title}</h3>

                <div className="flex items-center gap-2">
                    <Link
                        href={repoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View project repo: ${title}`}
                        className="grid size-11 shrink-0 place-items-center rounded-lg bg-zinc-950 text-amber-400 transition-opacity hover:opacity-80"
                    >
                        <TbCode size={25} aria-hidden="true" />
                    </Link>

                    <Link
                        href={liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View project: ${title}`}
                        className="grid size-11 shrink-0 place-items-center rounded-lg bg-amber-400 text-zinc-950 transition-opacity hover:opacity-80"
                    >
                        <TbArrowUpRight size={25} aria-hidden="true" />
                    </Link>
                </div>
            </div>
            <ProjectCardTags tags={tags} />
        </div>
    )
}
