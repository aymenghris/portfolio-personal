import clsx from 'clsx'
import { FC, ReactNode } from 'react'
import { getHeadlineResponsiveStyles, Size } from '@/utils/headlineStyles'

interface HeadlineProps {
    children: ReactNode
    size?: Size
    className?: string
}

const Headline: FC<HeadlineProps> = ({
    children,
    size = 'default',
    className,
}) => {
    return (
        <h2
            className={clsx(
                'mb-8',
                'text-3xl font-semibold',
                'bg-gradient-to-b from-[#fafafa] to-[#a1a1aa] bg-clip-text text-transparent',
                getHeadlineResponsiveStyles(size),
                className
            )}
        >
            {children}
        </h2>
    )
}

export default Headline
