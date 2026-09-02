import { TbArrowDown, TbDownload } from "react-icons/tb"
import { Button } from "@/components/ui/button"

export const HeroActions = () => (
    <div className="flex items-center gap-3">
        <Button variant="primary" size="md" asChild>
            <a href="/cv.pdf" download>
                Download CV
                <TbDownload className="ml-2" />
            </a>
        </Button>

        <Button variant="outline" size="md">
            Scroll Down
            <TbArrowDown className="ml-2" />
        </Button>
    </div>
)
