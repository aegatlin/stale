import { useEffect, useState } from 'react'
import { media, style } from 'typestyle'
import {
  headerHeight,
  headerMenuOpenClassName,
  marginLeft,
  menuTransitionDurationMs,
  menuWidth,
  mobile,
  mobileMarginLeft,
  notMobile,
  offWhite,
  primaryBlue,
  zIndexHigh,
} from '../../css'
import { Breadcrumbs } from './Breadcrumbs'
import { menuSidePadding } from './Menu'
import { svgMenuIconSize } from './MenuIcon'
import { PageMask } from './PageMask'
import { ITopHeaderProps, TopHeader } from './TopHeader'

const headerClass = style(
  {
    display: 'flex',
    alignItems: 'center',
    color: offWhite,
    zIndex: zIndexHigh,
  },
  media(mobile, {
    maxHeight: `${headerHeight}px`,
    padding: `0 ${mobileMarginLeft}px`,
    backgroundColor: offWhite,
  }),
  media(notMobile, {
    minHeight: `${headerHeight}px`,
    backgroundColor: primaryBlue,
  })
)

const headerContentClass = style(
  {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    maxWidth: '100%',
  },
  media(notMobile, {
    marginLeft: `${marginLeft}px`,
    marginRight: `calc(${menuWidth}px - ${svgMenuIconSize}px - ${menuSidePadding}px - (100vw - 100%))`,
  })
)

export const Header: React.FC<{
  pathname: string
  mobilePageTitle: string
}> = ({ pathname, mobilePageTitle }) => {
  const [showMenu, setShowMenu] = useState(false)
  const [isClosing, setIsClosing] = useState(false)
  useEffect(() => {
    if (showMenu) document.body.classList.add(headerMenuOpenClassName)
    if (!showMenu) document.body.classList.remove(headerMenuOpenClassName)
  })

  const openMenu = (): void => {
    setShowMenu(true)
  }

  const closeMenu = (): void => {
    setIsClosing(true)
    setShowMenu(false)
    setTimeout((): void => setIsClosing(false), menuTransitionDurationMs)
  }

  const toggleMenu = (): void => {
    showMenu ? closeMenu() : openMenu()
  }

  const topHeaderProps: ITopHeaderProps = {
    mobilePageTitle,
    toggleMenu,
    showMenu,
    isClosing,
  }

  const pageMaskProps = {
    showMenu,
    closeMenu,
    isClosing,
  }

  return (
    <>
      <PageMask {...pageMaskProps} />
      <header className={headerClass}>
        <div className={headerContentClass}>
          <TopHeader {...topHeaderProps} />
          <Breadcrumbs pathname={pathname} />
        </div>
      </header>
    </>
  )
}
