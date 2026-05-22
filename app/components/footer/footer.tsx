import Image from "next/image"
import Link from "next/link"
import { TbChevronRight } from "react-icons/tb"
import { Button } from "@/components/Button"
import { Headline } from "@/components/headline"
import { sitemap, socials } from "@/data/footer"
import { FooterList } from "./footer-list"

export const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="cc-section">
            <div className="container">
                <div className="lg:grid lg:grid-cols-2">
                    <div className="mb-10">
                        <Headline className="cc-reveal-up">
                            Get in Touch
                        </Headline>
                        <Button
                            href="mailto:aymengharis@gmail.com"
                            variant="primary"
                            icon={<TbChevronRight />}
                            className="cc-reveal-up"
                        >
                            Send Message
                        </Button>
                    </div>
                    <div className="grid grid-cols-2 gap-4 lg:pl-20">
                        <FooterList listName="Sitemap" listItems={sitemap} />
                        <FooterList listName="Socials" listItems={socials} />
                    </div>
                </div>
                <div className="flex items-center justify-between pt-10 pb-5">
                    <Link href="/">
                        <Image
                            src="/logo.svg"
                            width={40}
                            height={40}
                            alt="Logo"
                        />
                    </Link>
                    <p className="text-sm text-zinc-400">
                        &copy; {currentYear}
                        <span className="pl-1">Aymen Ghris</span>
                    </p>
                </div>
            </div>
        </footer>
    )
}
