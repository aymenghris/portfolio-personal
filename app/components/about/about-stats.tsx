import { AboutStatItem } from "./about-stat-item"

interface AboutStatsProps {
    stats: Array<{
        label: string
        number: string | number
    }>
}

export const AboutStats = ({ stats }: AboutStatsProps) => {
    return (
        <>
            {stats.map((stat) => (
                <AboutStatItem
                    key={`stat-${stat.label}`}
                    label={stat.label}
                    number={stat.number}
                />
            ))}
        </>
    )
}
