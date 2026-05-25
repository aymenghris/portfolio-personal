import { cn } from "@/lib/utils"
import { ProjectCardFooter } from "./project-card-footer"
import { ProjectCardImage } from "./project-card-image"

interface ProjectCardProps {
    imgSrc: string
    title: string
    tags: string[]
    projectLink: string
    className?: string
}

export const ProjectCard = ({
    imgSrc,
    title,
    tags,
    projectLink,
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
            <ProjectCardImage src={imgSrc} alt={title} />
            <ProjectCardFooter
                title={title}
                tags={tags}
                projectLink={projectLink}
            />
        </article>
    )
}
