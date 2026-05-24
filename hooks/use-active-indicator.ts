import {
    useCallback,
    useEffect,
    useRef,
    useState,
} from "react"
import { NAV_ITEMS, type NavItemLabel } from "@/constants/nav-items"

const getDefaultLabel = () =>
    NAV_ITEMS.find((item) => item.isDefault)?.label ?? NAV_ITEMS[0]?.label

export const useActiveIndicator = () => {
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
        (label: NavItemLabel) => {
            setActiveLabel(label)
        },
        [],
    )

    /**
     * HOW THE BOX GETS ITS INITIAL POSITION WITHOUT USER INTERACTION:
     *
     * This relies on a React feature called "Callback Refs".
     * In the JSX, this function is conditionally passed as a ref ONLY to the active link:
     * ref={isActive ? activeLinkRef : null}
     *
     * 1. INITIAL STATE: On first load, `activeLabel` defaults to an item (e.g., "Home").
     * 2. THE MAGIC: When React draws the "Home" <a> tag on the screen, it sees the ref
     *    is a function. React automatically executes this function immediately, passing
     *    the newly created HTML DOM node as an argument.
     * 3. IMMEDIATE CALCULATION: We receive that node, save it to `activeLinkRef`, and
     *    immediately trigger `updateBoxPosition()`.
     * 4. RESULT: The math runs instantly on mount. The box grabs the X/Y coordinates
     *    of "Home" and snaps behind it before the user even has a chance to click anything.
     */
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
