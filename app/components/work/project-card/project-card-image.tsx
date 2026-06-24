import Image from "next/image"

interface ProjectCardImageProps {
    src: string
    alt: string
}

export const ProjectCardImage = ({ src, alt }: ProjectCardImageProps) => {
    return (
        <div className="mb-4 overflow-hidden rounded-lg bg-zinc-700">
            <Image
                src={src}
                alt={alt}
                width={505}
                height={375}
                loading="lazy"
                className="object-cover"
            />
        </div>
    )
}
