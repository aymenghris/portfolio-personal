import Link from "next/link"
import { TbChevronRight } from "react-icons/tb"
import { Headline } from "@/components/headline"
import { Button } from "@/components/ui/button"

export const FooterCTA = () => (
    <div className="mb-10">
        <Headline className="cc-reveal-up">Get in Touch</Headline>

        <Button variant="primary" className="cc-reveal-up" asChild>
            <Link href="mailto:aymen.quantum@gmail.com">
                Send Message
                <TbChevronRight className="ml-2" />
            </Link>
        </Button>
    </div>
)
