import { Headline } from "@/components/headline"
import { SOCIAL_LINKS } from "@/constants/social-links"
import { SocialLink } from "./social-link"

export const ContactInfo = () => (
    <div className="mb-12 lg:mb-0 lg:flex lg:flex-col">
        <Headline size="tight" className="cc-reveal-up">
            Say hi—let’s build
        </Headline>

        <p className="cc-reveal-up mt-3 mb-8 max-w-[50ch] text-zinc-400">
            Interested in working together? I’m just a message away—let’s start
            the conversation!
        </p>

        <div className="mt-auto flex items-center gap-2">
            {SOCIAL_LINKS.map(({ href, icon, label }) => (
                <SocialLink key={label} href={href} icon={icon} label={label} />
            ))}
        </div>
    </div>
)
