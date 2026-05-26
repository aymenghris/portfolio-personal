import { TbStarFilled } from "react-icons/tb"

interface StarRatingProps {
    rating?: number // out of 5
}

export const StarRating = ({ rating = 5 }: StarRatingProps) => (
    <div className="flex items-center gap-1">
        {Array.from({ length: 5 }, (_, i) => (
            <TbStarFilled
                // biome-ignore lint/suspicious/noArrayIndexKey: Fixed 5-item array, never reorders
                key={i}
                size={18}
                className={i < rating ? "text-yellow-400" : "text-zinc-600"}
                aria-hidden="true"
            />
        ))}
    </div>
)
