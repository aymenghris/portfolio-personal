'use client'

import { FC, useEffect, useRef, MouseEvent } from 'react'

type NavbarProps = {
    navOpen: boolean
}

const Navbar: FC<NavbarProps> = ({ navOpen }) => {
    const lastActiveLink = useRef<HTMLAnchorElement>(null)
    const activeBox = useRef<HTMLDivElement>(null)

    const initActiveBox = () => {
        if (activeBox.current && lastActiveLink.current) {
            activeBox.current.style.top = `${lastActiveLink.current.offsetTop}px`
            activeBox.current.style.left = `${lastActiveLink.current.offsetLeft}px`
            activeBox.current.style.width = `${lastActiveLink.current.offsetWidth}px`
            activeBox.current.style.height = `${lastActiveLink.current.offsetHeight}px`
        }
    }

    useEffect(() => {
        initActiveBox()
        window.addEventListener('resize', initActiveBox)

        return () => {
            window.removeEventListener('resize', initActiveBox)
        }
    }, [])

    const activeCurrentLink = (event: MouseEvent<HTMLAnchorElement>) => {
        lastActiveLink.current?.classList.remove('cc-active')
        event.currentTarget.classList.add('cc-active')
        lastActiveLink.current = event.currentTarget

        if (activeBox.current) {
            activeBox.current.style.top = `${event.currentTarget.offsetTop}px`
            activeBox.current.style.left = `${event.currentTarget.offsetLeft}px`
            activeBox.current.style.width = `${event.currentTarget.offsetWidth}px`
            activeBox.current.style.height = `${event.currentTarget.offsetHeight}px`
        }
    }

    const navItems = [
        {
            label: 'Home',
            link: '#home',
            className: 'cc-nav-link cc-active',
            ref: lastActiveLink,
        },
        {
            label: 'About',
            link: '#about',
            className: 'cc-nav-link',
        },
        {
            label: 'Work',
            link: '#work',
            className: 'cc-nav-link',
        },
        {
            label: 'Reviews',
            link: '#reviews',
            className: 'cc-nav-link',
        },
        {
            label: 'Contact',
            link: '#contact',
            className: 'cc-nav-link md:hidden',
        },
    ]

    return (
        <nav className={`cc-navbar ${navOpen ? 'cc-active' : ''}`}>
            {navItems.map(({ label, link, className, ref }, index) => (
                <a
                    href={link}
                    key={index}
                    ref={ref}
                    className={className}
                    onClick={activeCurrentLink}
                >
                    {label}
                </a>
            ))}
            <div className="cc-active-box" ref={activeBox}></div>
        </nav>
    )
}

export default Navbar
