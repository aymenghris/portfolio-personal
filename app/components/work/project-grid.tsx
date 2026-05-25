import { ProjectCard } from "./project-card"

interface Project {
    title: string
    imgSrc: string
    tags: string[]
    projectLink: string
}

interface ProjectGridProps {
    projects: Project[]
}

export const ProjectGrid = ({ projects }: ProjectGridProps) => {
    return (
        <ul className="grid grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))] gap-x-4 gap-y-5">
            {projects.map((_project) => (
                <li key={_project.title}>
                    <ProjectCard
                        key={_project.title}
                        imgSrc="https://imageplaceholder.net/560x560"
                        title=" This title is a temporary placeholder for development purposes."
                        tags={["Tage One", "Tage Two", "Tage Three"]}
                        projectLink=""
                        className="cc-reveal-up"
                    />
                </li>
            ))}
        </ul>
    )
}
