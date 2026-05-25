import Image from "next/image"
import Link from "next/link"

export const PortfolioLogo = () => {
    return (
        <Link
            href="/"
            aria-label="aymen ghris — go to homepage"
            className={"inline-flex shrink-0"}
        >
            <Image src="/logo.svg" alt="" width={40} height={40} priority />
        </Link>
    )
}
