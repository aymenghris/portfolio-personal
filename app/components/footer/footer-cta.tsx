import { TbChevronRight } from "react-icons/tb"
import { Button } from "@/components/Button"
import { Headline } from "@/components/headline"

export const FooterCTA = () => (
    <div className="mb-10">
        <Headline className="cc-reveal-up">Get in Touch</Headline>

        <Button
            href="mailto:aymen.quantum@gmail.com"
            variant="primary"
            icon={<TbChevronRight />}
            className="cc-reveal-up"
        >
            Send Message
        </Button>
    </div>
)
