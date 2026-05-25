import { TbMenu2, TbX } from "react-icons/tb"
import { Button } from "@/components/ui/button"

interface HeaderMenuToggleProps {
    isOpen: boolean
    onToggle: () => void
}

export const HeaderMenuToggle = ({
    isOpen,
    onToggle,
}: HeaderMenuToggleProps) => {
    return (
        <Button
            variant="menu"
            size="icon-lg"
            className="md:hidden"
            onClick={onToggle}
        >
            {isOpen ? (
                <TbX aria-hidden="true" />
            ) : (
                <TbMenu2 aria-hidden="true" />
            )}
        </Button>
    )
}
