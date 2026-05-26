"use client"
import { useEffect } from "react"
import { SITE_SECTIONS } from "@/constants/site-sections"
import { useActiveSection } from "@/context/active-section-context"

export const ScrollSpy = () => {
    const { setActiveSection } = useActiveSection()
    useEffect(() => {
        const observers = SITE_SECTIONS.map(({ id }) => {
            const element = document.getElementById(id)
            if (!element) return null
            const observer = new IntersectionObserver(
                ([entry]) => {
                    // Update active section when it is in the upper middle area of the viewport
                    if (entry.isIntersecting) {
                        setActiveSection(id)
                    }
                },
                {
                    rootMargin: "-25% 0px -55% 0px", // Focus triggers on middle area of viewport
                },
            )
            observer.observe(element)
            return { observer, element }
        })
        return () => {
            observers.forEach((obs) => {
                if (obs) {
                    obs.observer.unobserve(obs.element)
                }
            })
        }
    }, [setActiveSection])
    return null
}
