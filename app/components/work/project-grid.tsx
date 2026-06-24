import type { ProjectItem } from "@/types/project"
import { ProjectCard } from "./project-card"

interface ProjectGridProps {
    projects: ProjectItem[]
}

export const ProjectGrid = ({ projects }: ProjectGridProps) => {
    return (
        <ul className="grid grid-cols-2 gap-x-4 gap-y-5">
            {projects.map((project) => (
                <li key={project.title}>
                    <ProjectCard
                        key={project.title}
                        screenshot={project.screenshot}
                        title={project.title}
                        tags={project.tags}
                        liveLink={project.liveLink}
                        repoLink={project.repoLink}
                        className="cc-reveal-up"
                    />
                </li>
            ))}
        </ul>
    )
}
