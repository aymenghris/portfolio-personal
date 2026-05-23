import Image from "next/image"

export const HeroImage = () => (
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
)
