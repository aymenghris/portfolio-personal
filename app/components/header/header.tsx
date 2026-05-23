"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { TbMenu2, TbX } from "react-icons/tb"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Navbar } from "./navbar"

export const Header = () => {
    const [isNavOpen, setIsNavOpen] = useState(false)

    return (
        <header
            className={cn(
                "fixed top-0 left-0 z-40 h-20 w-full",
                "flex items-center",
                "bg-gradient-to-b from-zinc-900 to-zinc-900/0",
            )}
        >
            <div
                className={cn(
                    "mx-auto w-full max-w-screen-2xl px-4",
                    "flex items-center justify-between",
                    "md:grid md:grid-cols-[1fr_3fr_1fr] md:px-6",
                )}
            >
                <h1>
                    <Link href="/">
                        <Image
                            src="/logo.svg"
                            alt="Aymen Ghris Logo"
                            width={40}
                            height={40}
                        />
                    </Link>
                </h1>

                <div className="relative md:justify-self-center">
                    <Button
                        variant="menu"
                        size="icon-lg"
                        className="md:hidden"
                        onClick={() => setIsNavOpen((prev) => !prev)}
                    >
                        {isNavOpen ? <TbX /> : <TbMenu2 />}
                    </Button>

                    <Navbar isNavOpen={isNavOpen} />
                </div>

                <Button
                    variant="primary"
                    className="max-md:hidden md:justify-self-end"
                    size="md"
                    asChild
                >
                    <Link href="#contact">Contact Me</Link>
                </Button>
            </div>
        </header>
    )
}
