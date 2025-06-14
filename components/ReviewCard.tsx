import { FC, ReactElement } from 'react'
import { TbStarFilled } from 'react-icons/tb'
import Image from 'next/image'

interface ReviewCardProps {
    content: string
    name: string
    imgSrc: string
    company: string
}

interface IconItem {
    icon: ReactElement
}

const ReviewCard: FC<ReviewCardProps> = ({
    content,
    name,
    imgSrc,
    company,
}) => {
    const ratings: IconItem[] = Array(5).fill({
        icon: <TbStarFilled className="text-yellow-300" size="18px" />,
    })

    return (
        <div className="flex min-w-[320px] flex-col rounded-xl bg-zinc-800 p-5 lg:min-w-[420px]">
            <div className="mb-3 flex items-center gap-1">
                {ratings.map(({ icon }, index) => (
                    <span key={index}>{icon}</span>
                ))}
            </div>
            <p className="mb-8 text-zinc-400">{content}</p>
            <div className="mt-auto flex items-center gap-2">
                <figure className="overflow-hidden rounded-lg bg-zinc-700">
                    <img
                        src={imgSrc}
                        alt={name}
                        loading="lazy"
                        className="size-full object-cover"
                    />
                </figure>
                <div>
                    <p>{name}</p>
                    <p className="text-xs tracking-wider text-zinc-400">
                        {company}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ReviewCard
