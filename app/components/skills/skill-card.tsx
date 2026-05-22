import clsx from "clsx"
import type { ReactElement } from "react"

interface SkillCardProps {
    icon: ReactElement
    title: string
    className?: string
}

export const SkillCard = ({ icon, title, className }: SkillCardProps) => {
    return (
        <div
            className={clsx(
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
                {icon}
            </span>
        </div>
    )
}
