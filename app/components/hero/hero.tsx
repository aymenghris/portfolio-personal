import { AvailabilityBadge } from "./availability-badge"
import { HeroActions } from "./hero-actions"
import { HeroHeading } from "./hero-heading"
import { HeroImage } from "./hero-image"

export const Hero = () => (
    <section id="home" className="pt-28 lg:pt-36">
        <div className="container items-center lg:grid lg:grid-cols-2 lg:gap-10">
            <div>
                <AvailabilityBadge />
                <HeroHeading />
                <HeroActions />
            </div>
            <HeroImage />
        </div>
    </section>
)
