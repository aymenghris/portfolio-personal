import { Headline } from "@/components/headline"
import { PROJECTS_ITEMS } from "@/constants/projects"
import { ProjectGrid } from "./project-grid"

export const Work = () => {
    return (
        <section id="work" className="pt-28 lg:pt-36">
            <div className="container">
                <Headline className="cc-reveal-up">Crafted Projects</Headline>
                <ProjectGrid projects={PROJECTS_ITEMS} />
            </div>
        </section>
    )
}
