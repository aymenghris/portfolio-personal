import { Navbar } from "./navbar"

interface HeaderNavProps {
    isOpen: boolean
}

export const HeaderNav = ({ isOpen }: HeaderNavProps) => {
    return (
        <div>
            <Navbar isNavOpen={isOpen} />
        </div>
    )
}
