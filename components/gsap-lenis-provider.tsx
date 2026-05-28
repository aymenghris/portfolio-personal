"use client"

import { ReactLenis } from "lenis/react"
import type { FC, ReactNode } from "react"
import { useScrollHandler } from "@/hooks/use-scroll-handler"
import "lenis/dist/lenis.css"
import { useGSAP } from "@gsap/react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

interface LenisProviderProps {
    children: ReactNode
}

gsap.registerPlugin(useGSAP, ScrollTrigger)

export const GsapLenisProvider: FC<LenisProviderProps> = ({ children }) => {
    useScrollHandler()
    useGSAP(() => {
        const elements = gsap.utils.toArray<HTMLElement>(".cc-reveal-up")
        elements.forEach((element) => {
            gsap.to(element, {
                scrollTrigger: {
                    trigger: element,
                    start: "-200 bottom",
                    end: "bottom 80%",
                    scrub: true,
                },
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power2.out",
            })
        })
    })
    return <ReactLenis root>{children}</ReactLenis>
}
