import { ReviewAuthor } from "./review-author"
import { StarRating } from "./star-rating"

export interface ReviewCardProps {
    content: string
    author: string
    imgSrc: string
    company: string
    rating?: number
}

export const ReviewCard = ({
    content,
    author,
    imgSrc,
    company,
    rating = 5,
}: ReviewCardProps) => (
    <article className="flex min-w-[320px] flex-col rounded-xl bg-zinc-800 p-5 lg:min-w-[420px]">
        <StarRating rating={rating} />

        <blockquote className="mt-3 mb-8 text-zinc-400">
            <p>{content}</p>
        </blockquote>

        <ReviewAuthor author={author} imgSrc={imgSrc} company={company} />
    </article>
)
