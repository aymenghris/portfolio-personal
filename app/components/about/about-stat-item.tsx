interface AboutStatItemProps {
    label: string
    number: string | number
}

export const AboutStatItem = ({ label, number }: AboutStatItemProps) => {
    return (
        <div>
            <div className="flex items-center md:mb-2">
                <span className="font-semibold text-2xl md:text-4xl">
                    {number}
                </span>
                <span className="font-semibold text-amber-400 md:text-3xl">
                    +
                </span>
            </div>
            <p className="font-semibold text-sm text-zinc-400 md:text-3xl">
                {label}
            </p>
        </div>
    )
}
