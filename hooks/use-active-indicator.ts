import {
    type MouseEvent,
    useCallback,
    useEffect,
    useRef,
    useState,
} from "react"
import { NAV_ITEMS, type NavItemLabel } from "@/constants/nav-items"

const getDefaultLabel = () =>
    NAV_ITEMS.find((item) => item.isDefault)?.label ?? NAV_ITEMS[0]?.label

export function useActiveIndicator() {
    const [activeLabel, setActiveLabel] = useState(getDefaultLabel)
    const navRef = useRef<HTMLElement>(null)
    const activeBoxRef = useRef<HTMLDivElement>(null)
    const activeLinkRef = useRef<HTMLAnchorElement | null>(null)

    const updateBoxPosition = useCallback(() => {
        const link = activeLinkRef.current
        const box = activeBoxRef.current

        if (link && box) {
            const { offsetTop, offsetLeft, offsetWidth, offsetHeight } = link
            const boxStyle = box.style
            boxStyle.top = `${offsetTop}px`
            boxStyle.left = `${offsetLeft}px`
            boxStyle.width = `${offsetWidth}px`
            boxStyle.height = `${offsetHeight}px`
        }
    }, [])

    useEffect(() => {
        const navElement = navRef.current
        if (!navElement) return

        // ResizeObserver is more robust than window 'resize'
        // It catches layout shifts, flex wraps, and dev tools resizing
        const observer = new ResizeObserver(updateBoxPosition)
        observer.observe(navElement)

        return () => observer.disconnect()
    }, [updateBoxPosition])

    const handleLinkClick = useCallback(
        (event: MouseEvent<HTMLAnchorElement>, label: NavItemLabel) => {
            setActiveLabel(label)
            activeLinkRef.current = event.currentTarget
            updateBoxPosition()
        },
        [updateBoxPosition],
    )

    // Callback ref to ensure we capture the DOM node reliably on initial render
    const setActiveLinkRef = useCallback(
        (node: HTMLAnchorElement | null) => {
            if (node) {
                activeLinkRef.current = node
                updateBoxPosition()
            }
        },
        [updateBoxPosition],
    )

    return {
        activeLabel,
        navRef,
        activeBoxRef,
        setActiveLinkRef,
        handleLinkClick,
    }
}
