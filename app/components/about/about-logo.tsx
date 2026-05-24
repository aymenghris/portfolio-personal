import Image from "next/image"

export const AboutLogo = () => {
    return (
        <Image
            src="/logo.svg"
            alt="logo"
            width={30}
            height={30}
            className="ml-auto md:size-[40px]"
        />
    )
}
