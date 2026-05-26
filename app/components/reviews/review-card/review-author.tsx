import Image from "next/image"

interface ReviewAuthorProps {
    author: string
    imgSrc: string
    company: string
}

export const ReviewAuthor = ({
    author,
    imgSrc,
    company,
}: ReviewAuthorProps) => (
    <div className="mt-auto flex items-center gap-2">
        <figure
            className="size-11 shrink-0 overflow-hidden rounded-lg bg-zinc-700"
            aria-label={`${author}'s avatar`}
        >
            <Image
                src={imgSrc}
                alt={author}
                width={44}
                height={44}
                loading="lazy"
                className="size-full object-cover"
            />
        </figure>

        <div>
            <p className="font-medium text-sm text-white">{author}</p>
            <p className="text-xs text-zinc-400 tracking-wider">{company}</p>
        </div>
    </div>
)
