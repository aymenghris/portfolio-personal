import { sitemap, socials } from "@/data/footer"
import { FooterList } from "./footer-list"

export const FooterNav = () => (
    <div className="grid grid-cols-2 gap-4 lg:pl-20">
        <FooterList listName="Sitemap" listItems={sitemap} />
        <FooterList listName="Socials" listItems={socials} />
    </div>
)
