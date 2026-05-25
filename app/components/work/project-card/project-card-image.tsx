import Image from "next/image"

interface ProjectCardImageProps {
    src: string
    alt: string
}

export const ProjectCardImage = ({ src, alt }: ProjectCardImageProps) => {
    return (
        <div className="mb-4 aspect-square overflow-hidden rounded-lg bg-zinc-700">
            <Image
                src={src}
                alt={alt}
                width={560}
                height={560}
                loading="lazy"
                className="size-full object-cover"
            />
        </div>
    )
}
