import { cn } from "@/lib/utils"
import type { ProjectItem } from "@/types/project"

interface ProjectCardTagsProps extends Pick<ProjectItem, "tags"> {}

export const ProjectCardTags = ({ tags }: ProjectCardTagsProps) => {
    if (tags.length === 0) return null

    // We duplicate the array to ensure a seamless loop
    const displayTags = [...tags, ...tags]

    return (
        <div className="group flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_95%,transparent)]">
            <ul className="flex animate-infinite-scroll gap-2 py-1 hover:[animation-play-state:paused]">
                {displayTags.map((label, index) => (
                    <li
                        key={`${label}-${
                            // biome-ignore lint/suspicious/noArrayIndexKey: The list is static and will never be reordered, filtered, or mutated, making the index a stable identifier.
                            index
                        }`}
                        className={cn(
                            "flex shrink-0 items-center whitespace-nowrap",
                            "h-8 px-4",
                            "text-sm text-zinc-400",
                            "rounded-lg bg-zinc-50/5",
                            "select-none",
                        )}
                    >
                        {label}
                    </li>
                ))}
            </ul>
        </div>
    )
}
