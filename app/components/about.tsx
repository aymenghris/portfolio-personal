import Image from "next/image"

const aboutItems = [
    {
        label: "Project done",
        number: 6,
    },
    {
        label: "Years of experience",
        number: 1,
    },
]

export const About = () => {
    return (
        <section id="about" className="cc-section">
            <div className="container">
                <div className="rounded-2xl bg-zinc-800/50 p-7 md:p-12">
                    <p className="cc-reveal-up mb-4 text-zinc-300 md:mb-8 md:max-w-[60ch] md:text-xl">
                        I’m at the start of my journey as a software developer,
                        equipped with strong fundamentals and a hunger to grow.
                        I’ve built several projects that mirror real-world
                        challenges and showcase my ability to learn fast and
                        problem-solve. I’m looking for my first opportunity to
                        apply my skills in a real-world setting and become a
                        valuable member of a dev team.
                    </p>
                    <div className="flex flex-wrap items-center gap-4 md:gap-7">
                        {aboutItems.map(({ label, number }) => (
                            <div key={crypto.randomUUID()}>
                                <div className="flex items-center md:mb-2">
                                    <span className="font-semibold text-2xl md:text-4xl">
                                        {number}
                                    </span>
                                    <span className="font-semibold text-amber-400 md:text-3xl">
                                        +
                                    </span>
                                </div>
                                <p className="font-semibold text-sm text-zinc-400 md:text-3xl">
                                    {label}
                                </p>
                            </div>
                        ))}
                        <Image
                            src="/logo.svg"
                            alt="logo"
                            width={30}
                            height={30}
                            className="ml-auto md:size-[40px]"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
