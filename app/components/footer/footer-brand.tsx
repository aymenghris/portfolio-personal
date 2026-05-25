import { PortfolioLogo } from "@/components/portfolio-logo"

const AUTHOR = "Aymen Ghris"

export const FooterBrand = () => (
    <div className="flex items-center justify-between pt-10 pb-5">
        <PortfolioLogo />

        <p className="text-sm text-zinc-400">
            &copy; {new Date().getFullYear()}
            <span className="pl-1">{AUTHOR}</span>
        </p>
    </div>
)
