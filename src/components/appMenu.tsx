import clsx from 'clsx'
import { Collapse } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'

import { Pages } from '@/constants/globals'
import { type MenuItemType } from '@/helpers/legacy/menu'

type AppMenuProps = {
  mobileMenuOpen: boolean
  menuClassName?: string
}

const AppMenu = ({ mobileMenuOpen, menuClassName }: AppMenuProps) => {
  const { pathname } = useLocation()

  return (
    <Collapse in={mobileMenuOpen} className="navbar-collapse">
      <div>
        <ul className={clsx('navbar-nav navbar-nav-scroll me-auto', menuClassName)}>
          {Pages.map((item: MenuItemType) => {
            const isActive = pathname === item.url

            return (
              <li key={item.key} className="nav-item">
                <Link
                  to={item.url ?? '#'}
                  className={clsx(
                    'nav-link d-flex align-items-center gap-2',
                    { active: isActive }
                  )}
                >
                  {item.label}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </Collapse>
  )
}

export default AppMenu
