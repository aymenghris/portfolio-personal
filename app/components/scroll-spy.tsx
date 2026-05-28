"use client"

import { useEffect } from "react"
import { SITE_SECTIONS } from "@/constants/site-sections"
import { useActiveSection } from "@/context/active-section-context"

/**
 * ScrollSpy - An invisible background component (renders nothing)
 * that watches which section the user is currently reading
 * and updates the navbar highlight accordingly
 */
export const ScrollSpy = () => {
    const { setActiveSection } = useActiveSection()
    useEffect(() => {
        /**
         * For each section defined in SITE_SECTIONS, we create a separate
         * IntersectionObserver that watches that specific section's DOM element.
         * We store them all in an array so we can clean them up later.
         */
        const observers = SITE_SECTIONS.map(({ id }) => {
            // Find the actual HTML element on the page (e.g. <section id="about">)
            const element = document.getElementById(id)

            // If the element doesn't exist in the DOM yet, skip it
            if (!element) return null

            /**
             * IntersectionObserver fires a callback whenever the element
             * enters or leaves the "detection zone" we define below via rootMargin
             *
             * [entry] is array destructuring - IntersectionObserver always passes
             * an array of entries, but since we only observe one element per
             * observer, we just grab the first (and only) entry directly
             */
            const observer = new IntersectionObserver(
                ([entry]) => {
                    /**
                     * isIntersecting = true means the element has entered
                     * our detection zone (defined by rootMargin below)
                     * When that happens, we mark this section as the active one
                     */
                    if (entry.isIntersecting) {
                        setActiveSection(id)
                    }
                },
                {
                    /**
                     * rootMargin shrinks the detection zone away from the viewport edges.
                     * Format is: "top right bottom left" (like CSS margin)
                     *
                     * "-25% 0px -55% 0px" means:
                     *   - Ignore the top    25% of the viewport  ↑
                     *   - Ignore the left/right sides (0px)      ←→
                     *   - Ignore the bottom 55% of the viewport  ↓
                     *
                     * This leaves only a ~20% detection band in the upper-middle
                     * of the screen, so the section only becomes "active" when
                     * the user is actually reading it - not just when it barely
                     * peeked into view at the bottom of the screen
                     *
                     *  ┌─────────────────┐
                     *  │ 25% ignored     │
                     *  │─────────────────│
                     *  │  TRIGGERS HERE  │ ← ~20% detection zone
                     *  │─────────────────│
                     *  │ 55% ignored     │
                     *  └─────────────────┘
                     */
                    rootMargin: "-25% 0px -55% 0px", // Focus triggers on middle area of viewport
                },
            )
            // Tell the observer to start watching this section's element
            observer.observe(element)

            // Return both so we can unobserve them in the cleanup function below
            return { observer, element }
        })

        /**
         * CLEANUP FUNCTION - runs when the component unmounts
         *
         * Without this, the observers would keep running in the background
         * even after this component is gone, causing memory leaks.
         * We loop through every observer we created and tell it to stop watching.
         */
        return () => {
            observers.forEach((obs) => {
                if (obs) {
                    obs.observer.unobserve(obs.element)
                }
            })
        }
    }, [setActiveSection]) // Re-run effect only if setActiveSection reference changes (it won't)

    // This component is logic-only, it renders nothing to the page
    return null
}
