import { cloneElement } from "react"
import {
    TbBrandDocker,
    TbBrandGit,
    TbBrandGraphql,
    TbBrandMongodb,
    TbBrandNextjs,
    TbBrandNodejs,
    TbBrandPython,
    TbBrandReact,
    TbBrandSass,
    TbBrandTailwind,
    TbBrandTypescript,
    TbDotsCircleHorizontal,
    TbSql,
} from "react-icons/tb"
import { Headline } from "@/components/headline"
import { SkillCard } from "./skill-card"

const skillItem = [
    {
        icon: <TbBrandSass />,
        title: "SASS",
    },
    {
        icon: <TbBrandTailwind />,
        title: "Tailwind",
    },
    {
        icon: <TbBrandTypescript />,
        title: "Typescript",
    },
    {
        icon: <TbBrandReact />,
        title: "React",
    },
    {
        icon: <TbBrandNextjs />,
        title: "Nextjs",
    },
    {
        icon: <TbBrandNodejs />,
        title: "Nodejs",
    },
    {
        icon: <TbBrandMongodb />,
        title: "MongoDB",
    },
    {
        icon: <TbSql />,
        title: "PostgreSQL",
    },
    {
        icon: <TbBrandGraphql />,
        title: "GraphQL",
    },
    {
        icon: <TbBrandPython />,
        title: "Python",
    },
    {
        icon: <TbBrandGit />,
        title: "Git",
    },
    {
        icon: <TbBrandDocker />,
        title: "Docker",
    },
    {
        icon: <TbDotsCircleHorizontal />,
        title: "And More...",
    },
].map((item) => ({
    ...item,
    icon: cloneElement(item.icon, {
        size: 45,
    }),
}))

export const Skills = () => {
    return (
        <section className="cc-section">
            <div className="container">
                <Headline className="cc-reveal-up">
                    Essential Tools I use
                </Headline>
                {/*<h2*/}
                {/*    className={clsx(*/}
                {/*        'text-3xl font-semibold',*/}
                {/*        'bg-gradient-to-b from-[#fafafa] to-[#a1a1aa] bg-clip-text text-transparent',*/}
                {/*        'lg:text-4xl lg:leading-tight'*/}
                {/*    )}*/}
                {/*>*/}
                {/*    Essential Tools I use*/}
                {/*</h2>*/}
                <p className="cc-reveal-up mt-3 mb-10 max-w-[50ch] text-zinc-400">
                    Explore the cutting-edge tools and technologies I leverage
                    to build fast, modern, and scalable websites and
                    applications.
                </p>
                <div className="grid grid-cols-[repeat(auto-fill,_minmax(85px,_1fr))] gap-10">
                    {skillItem.map(({ icon, title }, index) => (
                        <SkillCard
                            key={crypto.randomUUID()}
                            icon={icon}
                            title={title}
                            className="cc-reveal-up"
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
