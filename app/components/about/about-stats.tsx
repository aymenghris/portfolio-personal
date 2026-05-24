import { AboutStatItem } from "./about-stat-item"

interface AboutStatsProps {
    items: Array<{
        label: string
        number: string | number
    }>
}

export const AboutStats = ({ items }: AboutStatsProps) => {
    return (
        <>
            {items.map((item) => (
                <AboutStatItem
                    key={`stat-${item.label}`}
                    label={item.label}
                    number={item.number}
                />
            ))}
        </>
    )
}
