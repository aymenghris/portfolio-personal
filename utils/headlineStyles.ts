export type Size = 'default' | 'tight' | 'large'

export function getHeadlineResponsiveStyles(size: Size): string {
    switch (size) {
        case 'default':
            return 'lg:text-4xl lg:leading-tight'
        case 'tight':
            return 'lg:max-w-[12ch] lg:text-4xl lg:leading-tight'
        case 'large':
            return 'sm:max-w-[20ch] lg:text-[55px] lg:leading-[1.15]'
        default:
            return ''
    }
}
