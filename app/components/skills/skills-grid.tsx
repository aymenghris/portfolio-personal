import type { SkillItem } from "@/types/skills"
import { SkillCard } from "./skill-card"

interface SkillsGridProps {
    items: SkillItem[]
}

export const SkillsGrid = ({ items }: SkillsGridProps) => {
    return (
        <div className="grid grid-cols-[repeat(auto-fill,_minmax(85px,_1fr))] gap-10">
            {items.map(({ icon, title }) => (
                <SkillCard
                    key={`skill-${title}`}
                    icon={icon}
                    title={title}
                    className="cc-reveal-up"
                />
            ))}
        </div>
    )
}
