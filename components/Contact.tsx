import clsx from 'clsx'
import Link from 'next/link'
import { TbBrandGithub, TbBrandLinkedin, TbBrandTwitter } from 'react-icons/tb'
import { Button } from '@/components/Button'
import Headline from '@/components/ui/Headline'
import React from 'react'

const socialLinks = [
    {
        href: '',
        icon: <TbBrandGithub />,
        alt: 'GitHub',
    },
    {
        href: '',
        icon: <TbBrandLinkedin />,
        alt: 'LinkedIn',
    },
    {
        href: '',
        icon: <TbBrandTwitter />,
        alt: 'Twitter X',
    },
].map((item) => ({
    ...item,
    icon: React.cloneElement(item.icon, {
        size: 25,
    }),
}))

const Contact = () => (
    <section id="contact" className="pt-28 lg:pt-36">
        <div className="container lg:grid lg:grid-cols-2 lg:items-stretch">
            <div className="mb-12 lg:mb-0 lg:flex lg:flex-col">
                <Headline size="tight" className="cc-reveal-up">
                    Say hi—let’s build
                </Headline>
                <p className="cc-reveal-up mt-3 mb-8 max-w-[50ch] text-zinc-400 lg:max-w-[50ch]">
                    Interested in working together? I’m just a message
                    away—let’s start the conversation!
                </p>
                <div className="mt-auto flex items-center gap-2">
                    {socialLinks.map(({ href, icon }, key) => (
                        <Link
                            key={key}
                            href={href}
                            target="_blank"
                            className={clsx(
                                'grid place-items-center',
                                'size-12',
                                'ring-2ring-zinc-50/5 rounded-lg ring-inset',
                                'transition-colors',
                                'hover:bg-zinc-50 hover:text-zinc-950 active:bg-zinc-50/80',
                                'cc-reveal-up'
                            )}
                        >
                            {icon}
                        </Link>
                    ))}
                </div>
            </div>
            <form
                action="https://getform.io/f/anlxkyea"
                method="post"
                className="xl:pl-10 2xl:pl-20"
            >
                <div className="md:grid md:grid-cols-2 md:items-center md:gap-2">
                    <div className="mb-4">
                        <label htmlFor="name" className="cc-label cc-reveal-up">
                            Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            autoComplete="name"
                            required
                            placeholder="Aymen Ghris"
                            className="cc-text-field cc-reveal-up"
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="email"
                            className="cc-label cc-reveal-up"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            autoComplete="email"
                            required
                            placeholder="aymen@exmaple.com"
                            className="cc-text-field cc-reveal-up"
                        />
                    </div>
                </div>
                <div className="">
                    <label htmlFor="message" className="cc-label cc-reveal-up">
                        Message
                    </label>
                    <textarea
                        name="message"
                        id="message"
                        placeholder="Hi!"
                        required
                        className="cc-text-field cc-reveal-up max-h-80 min-h-32 resize-y"
                    ></textarea>
                </div>
                <Button
                    type="submit"
                    variant="primary"
                    theme="amber"
                    size="full"
                    className="cc-reveal-up my-4 justify-center"
                >
                    Submit
                </Button>
            </form>
        </div>
    </section>
)

export default Contact
