import React, { FC } from 'react'
import clsx from 'clsx'

type Theme = 'none' | 'white' | 'amber' | 'custom'
type Size = 'default' | 'larger' | 'full'

interface ButtonProps {
    className?: string
    href?: string
    icon?: React.ReactElement
    children: React.ReactNode
    size?: Size
    target?: string
    theme?: Theme
    type?: 'button' | 'submit'
    variant: 'primary' | 'outline'
}

const getButtonTheme = (theme: Theme): string => {
    switch (theme) {
        case 'white':
            return 'bg-zinc-50 active:bg-zinc-50/80'
        case 'amber':
            return 'bg-amber-400 active:bg-amber-400/80'
        default:
            return ''
    }
}

const getButtonSize = (size: Size): string => {
    switch (size) {
        case 'default':
            return 'px-4 h-9 max-w-max'
        case 'larger':
            return 'px-4 h-11 max-w-max'
        case 'full':
            return 'py-4 w-full max-w-full'
        default:
            return ''
    }
}

export const Button: FC<ButtonProps> = ({
    className,
    href,
    icon,
    target = '_self',
    children,
    variant,
    theme = 'white',
    size = 'default',
    type = 'button',
}) => {
    const baseVariantClass = {
        primary: 'cc-btn-primary',
        outline: 'cc-btn-outline',
    }[variant]

    const buttonClasses = clsx(
        baseVariantClass,
        variant === 'primary' && getButtonTheme(theme),
        getButtonSize(size),
        className
    )

    const content = (
        <>
            {children}
            {icon && <span className="ml-2">{icon}</span>}
        </>
    )

    if (href) {
        return (
            <a href={href} target={target} className={buttonClasses}>
                {content}
            </a>
        )
    }

    return (
        <button type={type} className={buttonClasses}>
            {content}
        </button>
    )
}
