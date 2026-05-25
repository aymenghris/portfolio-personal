import { FooterBrand } from "./footer-brand"
import { FooterCTA } from "./footer-cta"
import { FooterNav } from "./footer-nav"

export const Footer = () => (
    <footer className="pt-28 lg:pt-36">
        <div className="container">
            <div className="lg:grid lg:grid-cols-2">
                <FooterCTA />
                <FooterNav />
            </div>
            <FooterBrand />
        </div>
    </footer>
)
