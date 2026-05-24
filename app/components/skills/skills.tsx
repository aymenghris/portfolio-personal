import { Headline } from "@/components/headline"
import { SKILLS_ITEMS } from "@/constants/skills-items"
import { SkillsDescription } from "./skills-description"
import { SkillsGrid } from "./skills-grid"

export const Skills = () => {
    return (
        <section className="pt-28 lg:pt-36">
            <div className="container">
                <Headline className="cc-reveal-up">
                    Essential Tools I use
                </Headline>

                <SkillsDescription />
                <SkillsGrid items={SKILLS_ITEMS} />
            </div>
        </section>
    )
}
