import React, { FC } from 'react'
import clsx from 'clsx'

interface SkillCardProps {
    icon: React.ReactElement
    title: string
    className?: string
}

const SkillCard: FC<SkillCardProps> = ({ icon, title, className }) => {
    return (
        <div
            className={clsx(
                'flex flex-col items-center',
                'w-fit',
                'rounded-2xl ring-2 ring-zinc-50/10 ring-inset',
                'transition-colors',
                'hover:bg-zinc-800',
                'group overflow-hidden',
                className
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

export default SkillCard
