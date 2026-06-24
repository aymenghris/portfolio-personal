import { cn } from "@/lib/utils"
import type { ProjectItem } from "@/types/project"
import { ProjectCardFooter } from "./project-card-footer"
import { ProjectCardImage } from "./project-card-image"

interface ProjectCardProps extends ProjectItem {
    className?: string
}

export const ProjectCard = ({
    screenshot,
    title,
    tags,
    liveLink,
    repoLink,
    className,
}: ProjectCardProps) => {
    return (
        <article
            className={cn(
                "relative p-4",
                "rounded-2xl bg-zinc-800 ring-1 ring-zinc-50/5 ring-inset",
                "transition-colors hover:bg-zinc-700/50 active:bg-zinc-700/60",
                className,
            )}
        >
            <ProjectCardImage src={screenshot} alt={title} />

            <ProjectCardFooter
                title={title}
                tags={tags}
                liveLink={liveLink}
                repoLink={repoLink}
            />
        </article>
    )
}
