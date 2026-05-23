import { cn } from "@/lib/utils"

export const HeroHeading = () => (
    <h2
        className={cn(
            "mt-5 mb-8 max-w-[15ch]",
            "font-semibold text-5xl leading-tight",
            "bg-gradient-to-b from-[#fafafa] to-[#a1a1aa] bg-clip-text text-transparent",
            "sm:max-w-[20ch] lg:mb-10 lg:text-[55px] lg:leading-[1.15]",
        )}
    >
        Digital Products that Scale with Your Ambition
    </h2>
)
