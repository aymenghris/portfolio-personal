import clsx from "clsx"
import Image from "next/image"
import { TbArrowDown, TbDownload } from "react-icons/tb"
import { Button } from "@/components/Button"

export const Hero = () => {
    return (
        <section id="home" className="cc-section">
            <div className="container items-center lg:grid lg:grid-cols-2 lg:gap-10">
                <div>
                    <div className="flex items-center gap-3">
                        <figure className="cc-image-box size-9 rounded-lg">
                            <Image
                                src="/moon.png"
                                width={40}
                                height={40}
                                alt="aymen ghris portrait"
                                className="cc-image-cover"
                            />
                        </figure>
                        <div className="flex items-center gap-1.5 text-sm text-zinc-400 tracking-wide">
                            <span className="relative size-2 rounded-full bg-emerald-400">
                                <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400"></span>
                            </span>
                            Available for work
                        </div>
                    </div>
                    <h2
                        className={clsx(
                            "mt-5 mb-8 max-w-[15ch]",
                            "font-semibold text-5xl leading-tight",
                            "bg-gradient-to-b from-[#fafafa] to-[#a1a1aa] bg-clip-text text-transparent",
                            "sm:max-w-[20ch] lg:mb-10 lg:text-[55px] lg:leading-[1.15]",
                        )}
                    >
                        Digital Products that Scale with Your Ambition
                    </h2>
                    <div className={clsx("flex items-center gap-3")}>
                        <Button variant="primary" icon={<TbDownload />}>
                            Download CV
                        </Button>
                        <Button variant="outline" icon={<TbArrowDown />}>
                            Scroll Down
                        </Button>
                    </div>
                </div>
                <div className="hidden lg:block">
                    <figure>
                        <Image
                            src="/moon.png"
                            width={656}
                            height={800}
                            alt="moon"
                            className="w-full"
                        />
                    </figure>
                </div>
            </div>
        </section>
    )
}
