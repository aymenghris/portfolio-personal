import { ABOUT_STATS } from "@/constants/about-stats"
import { AboutDescription } from "./about-description"
import { AboutLogo } from "./about-logo"
import { AboutStats } from "./about-stats"

export const About = () => {
    return (
        <section id="about" className="pt-28 lg:pt-36">
            <div className="container">
                <div className="rounded-2xl bg-zinc-800/50 p-7 md:p-12">
                    <AboutDescription />

                    <div className="flex flex-wrap items-center gap-4 md:gap-7">
                        <AboutStats stats={ABOUT_STATS} />
                        <AboutLogo />
                    </div>
                </div>
            </div>
        </section>
    )
}
