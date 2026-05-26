import { FooterBrand } from "./footer-brand"
import { FooterCols } from "./footer-cols"
import { FooterCTA } from "./footer-cta"

export const Footer = () => (
    <footer className="pt-28 lg:pt-36">
        <div className="container">
            <div className="lg:grid lg:grid-cols-2">
                <FooterCTA />
                <FooterCols />
            </div>
            <FooterBrand />
        </div>
    </footer>
)
