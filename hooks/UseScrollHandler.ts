import { useEffect } from 'react'
import { useLenis } from 'lenis/react'

export const ScrollHandler = () => {
    const lenis = useLenis()

    useEffect(() => {
        if (!lenis) return

        const handleAnchorClick = (e: MouseEvent) => {
            const target = e.target as HTMLAnchorElement
            if (target.tagName === 'A' && target.hash) {
                e.preventDefault()
                const id = target.hash.substring(1) // Remove '#' from hash
                const element = document.getElementById(id)
                if (element) {
                    lenis.scrollTo(element, {
                        offset: 0, // Adjust if you have a fixed header
                        duration: 1.5, // Adjust scroll duration
                        easing: (t: number) =>
                            Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Optional custom easing
                    })
                }
            }
        }

        document.addEventListener('click', handleAnchorClick)
        return () => document.removeEventListener('click', handleAnchorClick)
    }, [lenis])
}
