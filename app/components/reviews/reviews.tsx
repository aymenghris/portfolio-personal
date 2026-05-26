"use client"

import { useGSAP } from "@gsap/react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Headline } from "@/components/headline"
import { reviews } from "@/constants/reviews"
import { ReviewCard } from "./review-card"

gsap.registerPlugin(useGSAP, ScrollTrigger)

export const Reviews = () => {
    useGSAP(() => {
        gsap.to(".cc-scrub-slide", {
            scrollTrigger: {
                trigger: ".cc-scrub-slide",
                start: "-200% 80%",
                end: "400% 80%",
                scrub: true,
            },
            x: -1000,
        })
    })

    return (
        <section id="reviews" className="overflow-hidden pt-28 lg:pt-36">
            <div className="container">
                <Headline className="cc-reveal-up">
                    Feedback from Partners
                </Headline>

                <ul className="cc-scrub-slide flex w-fit list-none items-stretch gap-3 p-0">
                    {reviews.map((review) => (
                        <li key={review.id}>
                            <ReviewCard
                                content="This placeholder text is ideal for demonstrating how client testimonials will appear on the page. It's a temporary statement used for development and design validation."
                                author={review.author}
                                imgSrc="https://imageplaceholder.net/44x44"
                                company="Company X"
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}
