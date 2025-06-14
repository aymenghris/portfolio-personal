'use client'

import ReviewCard from '@/components/ReviewCard'
import Headline from '@/components/ui/Headline'
import { reviews } from '@/data/reviews'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP, ScrollTrigger)

const Reviews = () => {
    useGSAP(() => {
        gsap.to('.cc-scrub-slide', {
            scrollTrigger: {
                trigger: '.cc-scrub-slide',
                start: '-200% 80%',
                end: '400% 80%',
                scrub: true,
            },
            x: '-1000',
        })
    })

    return (
        <section id="reviews" className="cc-section overflow-hidden">
            <div className="container">
                <Headline className="cc-reveal-up">
                    Feedback from Partners
                </Headline>
                <div className="cc-scrub-slide flex w-fit items-stretch gap-3">
                    {reviews.map(
                        ({ content, name, imgSrc, company }, index) => (
                            <ReviewCard
                                key={index}
                                content="This placeholder text is ideal for demonstrating how client testimonials will appear on the page. It's a temporary statement used for development and design validation."
                                name={name}
                                imgSrc="https://imageplaceholder.net/44x44"
                                company="Company X"
                            />
                        )
                    )}
                </div>
            </div>
        </section>
    )
}

export default Reviews
