import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { TbArrowUpRight } from 'react-icons/tb'

interface ProjectCardProps {
    imgSrc: string
    title: string
    tags: string[]
    projectLink: string
    className?: string
}

const ProjectCard: FC<ProjectCardProps> = ({
    imgSrc,
    title,
    tags,
    projectLink,
    className,
}) => {
    return (
        <div
            className={clsx(
                'relative',
                'p-4',
                'rounded-2xl bg-zinc-800 ring-1 ring-zinc-50/5 ring-inset',
                'transition-colors',
                'hover:bg-zinc-700/50 active:bg-zinc-700/60',
                className
            )}
        >
            <figure className="mb-4 aspect-square overflow-hidden rounded-lg bg-zinc-700">
                <img
                    src={imgSrc}
                    alt={title}
                    loading="lazy"
                    className="size-full object-cover"
                />
            </figure>

            <div className="flex items-center justify-between gap-4">
                <h3 className="mb-3 text-[22px] font-normal">{title}</h3>
                <div className="grid size-11 shrink-0 place-items-center rounded-lg bg-amber-400 text-zinc-950">
                    <TbArrowUpRight size={25} />
                </div>
            </div>
            <div className="flex flex-wrap items-center gap-2">
                {tags.map((label, index) => (
                    <span
                        key={index}
                        className="grid h-8 items-center rounded-lg bg-zinc-50/5 px-4 text-sm text-zinc-400"
                    >
                        {label}
                    </span>
                ))}
            </div>
            <Link
                href={projectLink}
                target="_blank"
                className="absolute inset-0"
            />
        </div>
    )
}

export default ProjectCard
