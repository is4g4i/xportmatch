import { useLayoutStore } from "@/store/useLayoutStore"
import { toSentenceCase } from "@/utils/changeCasing"
import clsx from "clsx"
import {
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle
} from "react-bootstrap"
import { type IconType } from "react-icons"
import { BsCircleHalf, BsMoonStarsFill, BsSunFill } from "react-icons/bs"

type ThemeMode = "light" | "dark" | "auto"

type ThemeModeType = {
    theme: ThemeMode
    icon: IconType
}

const ThemeToggler = () => {
    const theme = useLayoutStore((s) => s.theme)
    const setTheme = useLayoutStore((s) => s.setTheme)

    const themeModes: ThemeModeType[] = [
        { icon: BsSunFill, theme: "light" },
        { icon: BsMoonStarsFill, theme: "dark" },
        { icon: BsCircleHalf, theme: "auto" }
    ]

    return (
        <Dropdown className="nav-item ms-3">
            <DropdownToggle
                className="nav-notification lh-0 btn btn-light p-0 mb-0 arrow-none"
                type="button"
            >
                <BsCircleHalf size={16} />
            </DropdownToggle>

            <DropdownMenu align="end" className="min-w-auto">
                {themeModes.map((mode) => {
                    const Icon = mode.icon
                    return (
                        <DropdownItem
                            key={mode.theme}
                            type="button"
                            onClick={() => setTheme(mode.theme)}
                            className={clsx("d-flex align-items-center", {
                                active: theme === mode.theme
                            })}
                        >
                            <Icon size={16} className="me-1" />
                            {toSentenceCase(mode.theme)}
                        </DropdownItem>
                    )
                })}
            </DropdownMenu>
        </Dropdown>
    )
}

export default ThemeToggler
