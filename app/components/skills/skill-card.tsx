import type { ComponentType } from "react"
import { cn } from "@/lib/utils"

interface SkillCardProps {
    icon: ComponentType<{ size?: number }>
    title: string
    className?: string
}

export const SkillCard = ({ icon: Icon, title, className }: SkillCardProps) => {
    return (
        <div
            className={cn(
                "flex flex-col items-center",
                "w-fit",
                "rounded-2xl ring-2 ring-zinc-50/10 ring-inset",
                "transition-colors",
                "hover:bg-zinc-800",
                "group overflow-hidden",
                className,
            )}
        >
            <span
                title={title}
                className="w-fit rounded-lg bg-zinc-700/50 p-5 opacity-70 transition-all group-hover:opacity-100"
            >
                <Icon size={45} />
            </span>
        </div>
    )
}
