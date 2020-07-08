import React from 'react'
import {ChevronLeft, Globe, Home, Thermometer} from 'react-feather'
import {Link, useLocation} from 'react-router-dom'

export interface SidebarProps {
  activeNavItem: NavigationIcons | null
  navMenuOpen: boolean
  closeMenu: () => void
  setActiveNavItem: React.Dispatch<
    React.SetStateAction<{
      activeNavItem: NavigationIcons
      open: boolean
    }>
  >
}

type Navigation = {
  [key in NavigationIcons]: {
    Icon: React.ComponentType<any>
    routeRegex: string
    to?: string
    navigationMenu?: {
      [x: string]: NavItem[]
    }
  }
}

interface NavItem {
  text: string
  to: string
  activeIsExact?: boolean
}

export type NavigationIcons = 'home' | 'coffee' | 'geography' | 'sensory'

const navigation: Navigation = {
  home: {
    Icon: Home,
    routeRegex: '^/$',
    to: '/',
  },
  coffee: {
    Icon: Home,
    routeRegex: '^/(coffees)',
    navigationMenu: {
      Coffees: [
        {
          text: 'List',
          to: '/coffees',
        },
      ],
    },
  },
  geography: {
    Icon: Globe,
    routeRegex: '^/(countries|regions)',
    navigationMenu: {
      Countries: [
        {
          text: 'List',
          to: '/countries',
        },
      ],
      Regions: [
        {
          text: 'List',
          to: '/regions',
          activeIsExact: true,
        },
      ],
    },
  },
  sensory: {
    Icon: Thermometer,
    routeRegex: '^/(cupping-sessions)',
    navigationMenu: {
      'Cupping Sessions': [
        {
          text: 'List',
          to: '/cupping-sessions',
        },
      ],
    },
  },
}

const Sidebar = ({activeNavItem, setActiveNavItem, closeMenu, navMenuOpen}: SidebarProps) => {
  const location = useLocation()

  React.useEffect(() => {
    const locationNavItem = ((Object.keys(navigation) as unknown) as NavigationIcons[]).find(key =>
      location.pathname.match(navigation[key].routeRegex),
    )
    if (locationNavItem && !navMenuOpen && locationNavItem !== activeNavItem) {
      setActiveNavItem({activeNavItem: locationNavItem, open: navMenuOpen})
    }
  }, [location.pathname, navMenuOpen, activeNavItem])

  const activeMenu = activeNavItem ? navigation[activeNavItem].navigationMenu : null
  return (
    <div className="fixed left-0 z-10 flex min-h-screen">
      <div className="flex flex-col w-16 pt-16 overflow-x-hidden bg-gray-500">
        {((Object.keys(navigation) as unknown) as NavigationIcons[]).map(key => {
          const {Icon, to} = navigation[key]
          return to ? (
            <Link
              to={to}
              onClick={() => setActiveNavItem({activeNavItem: key, open: false})}
              className={`p-4 outline-none ${activeNavItem === key ? 'bg-gray-300 text-primary-500' : 'text-gray-200'}`}
            >
              <Icon height="inherit" width="inherit" />
            </Link>
          ) : (
            <button
              onClick={() => setActiveNavItem({activeNavItem: key, open: true})}
              className={`p-4 outline-none ${activeNavItem === key ? 'bg-gray-300 text-primary-500' : 'text-gray-200'}`}
            >
              <Icon height="inherit" width="inherit" />
            </button>
          )
        })}
      </div>
      <div
        className={`flex flex-col overflow-x-hidden whitespace-no-wrap z-10 sidebar-nav bg-gray-300 pt-16  ${
          activeNavItem && activeMenu && navMenuOpen ? 'w-64 px-6' : 'w-0'
        }`}
      >
        <div className="pt-4 text-right text-primary-500">
          <button onClick={closeMenu}>
            <ChevronLeft />
          </button>
        </div>
        {activeNavItem && activeMenu
          ? Object.keys(activeMenu).map(key => {
              const navItems = activeMenu[key]

              return (
                <div key={key} className="my-4">
                  <h3 className="text-xs font-semibold tracking-wide text-gray-600 uppercase">{key}</h3>
                  {navItems.map((navItem, index) => {
                    return (
                      <NavLink key={index} to={navItem.to} exactPath={navItem.activeIsExact}>
                        {navItem.text}
                      </NavLink>
                    )
                  })}
                </div>
              )
            })
          : null}
      </div>
    </div>
  )
}

interface NavLinkProps {
  to: string
  children: React.ReactNode
  exactPath?: boolean
}

const NavLink = ({to, exactPath, children}: NavLinkProps) => {
  const location = useLocation()
  const isActivePath = !!location.pathname.match(`^${to}${exactPath ? '$' : ''}`)
  return (
    <div>
      <Link
        to={to}
        className={`block py-1 px-2 m-1 border-l-4 border-${
          isActivePath ? 'primary-500 bg-gray-400' : 'transparent'
        } rounded text-gray-800 hover:bg-gray-400 hover:text-gray-900`}
      >
        {children}
      </Link>
    </div>
  )
}

export default Sidebar
