"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { TbMenu2, TbX } from "react-icons/tb"
import { Button } from "@/components/Button"
import { Navbar } from "./navbar"

export const Header = () => {
    const [navOpen, setNavOpen] = useState(false)

    return (
        <header className="fixed top-0 left-0 z-40 flex h-20 w-full items-center bg-gradient-to-b from-zinc-900 to-zinc-900/0">
            <div className="mx-auto flex w-full max-w-screen-2xl items-center justify-between px-4 md:grid md:grid-cols-[1fr_3fr_1fr] md:px-6">
                <h1>
                    <Link href="/" className="logo">
                        <Image
                            src="/logo.svg"
                            alt="Aymen Ghris Logo"
                            width={40}
                            height={40}
                        />
                    </Link>
                </h1>
                <div className="relative md:justify-self-center">
                    <button
                        type="button"
                        className="cc-menu-btn cursor-pointer md:hidden"
                        onClick={() => setNavOpen(!navOpen)}
                    >
                        {navOpen ? <TbX /> : <TbMenu2 />}
                    </button>
                    <Navbar navOpen={navOpen} />
                </div>
                <Button
                    href="#contact"
                    variant="primary"
                    className="max-md:hidden md:justify-self-end"
                >
                    Contact Me
                </Button>
            </div>
        </header>
    )
}
