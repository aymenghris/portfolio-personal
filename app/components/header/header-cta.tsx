import Link from "next/link"
import { Button } from "@/components/ui/button"

export const HeaderCta = () => {
    return (
        <Button
            variant="primary"
            size="md"
            className="max-md:hidden md:justify-self-end"
            asChild
        >
            <Link href="#contact">Contact Me</Link>
        </Button>
    )
}
