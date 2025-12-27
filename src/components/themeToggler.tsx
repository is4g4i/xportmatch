import { type LayoutState, useLayoutContext } from '@/states/legacy'
import { toSentenceCase } from '@/utils/legacy'
import clsx from 'clsx'
import {
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle
} from 'react-bootstrap'
import { type IconType } from 'react-icons'
import { BsCircleHalf, BsMoonStarsFill, BsSunFill } from 'react-icons/bs'

type ThemeModeType = {
    theme: LayoutState['theme']
    icon: IconType
}
const ThemeToggler = () => {
    const { theme, updateTheme } = useLayoutContext()

    const themeModes: ThemeModeType[] = [
        {
            icon: BsSunFill,
            theme: 'light',
        },
        {
            icon: BsMoonStarsFill,
            theme: 'dark',
        },
        {
            icon: BsCircleHalf,
            theme: 'auto',
        },
    ]

    return (
        <Dropdown className="nav-item ms-3">
            <DropdownToggle
                className="nav-notification lh-0 btn btn-light p-0 mb-0 arrow-none"
                type="button"
                aria-expanded="false"
                data-bs-toggle="dropdown"
                data-bs-display="static"
            >
                <BsCircleHalf size={16} />
            </DropdownToggle>
            <DropdownMenu align={'end'} className="min-w-auto">
                {(themeModes ?? []).map((mode, idx) => {
                    const Icon = mode.icon
                    return (
                        <li className="mb-1" key={idx}>
                            <DropdownItem
                                type="button"
                                onClick={() => updateTheme(mode.theme)}
                                className={clsx('d-flex align-items-center', { active: theme === mode.theme })}
                            >
                                <Icon size={16} className="me-1" />
                                {toSentenceCase(mode.theme)}
                            </DropdownItem>
                        </li>
                    )
                })}
            </DropdownMenu>
        </Dropdown>
    )
}

export default ThemeToggler
