import { style, media } from 'typestyle'
import {
  mobile,
  offWhite,
  notMobile,
  topHeaderContentHeight,
  darkBlue,
  fontSizeH3,
} from '../../css'
import Link from 'next/link'
import { MenuIcon } from './MenuIcon'
import { Menu } from './Menu'

const leftHeaderClass = style(
  {
    display: 'flex',
    alignItems: 'center',
  },
  media(mobile, {
    overflow: 'hidden',
  })
)

const headerTitleClass = style(
  {
    margin: 0,
    fontWeight: 'normal',
    fontSize: '1.7em',
  },
  media(mobile, {
    display: 'none',
  })
)

const headerLinkClass = style({
  textDecoration: 'none',
  color: offWhite,
})

const mobileBrandClass = style(
  {
    width: '40px',
  },
  media(notMobile, {
    display: 'none',
  })
)

const rightHeaderClass = style({})

const headerTopClass = style({
  display: 'flex',
  flex: '1',
  alignItems: 'center',
  justifyContent: 'space-between',
  minHeight: `${topHeaderContentHeight}px`,
})

const mobilePageTitleClass = style(
  {
    color: darkBlue,
    fontSize: fontSizeH3,
    marginLeft: '15px',
    fontWeight: 'normal',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
  },
  media(notMobile, {
    display: 'none',
  })
)

export interface ITopHeaderProps {
  mobilePageTitle: string
  toggleMenu(): void
  showMenu: boolean
  isClosing: boolean
}

export const TopHeader: React.FC<ITopHeaderProps> = ({
  mobilePageTitle,
  toggleMenu,
  showMenu,
  isClosing,
}) => {
  return (
    <div className={headerTopClass}>
      <div className={leftHeaderClass}>
        <div className={headerTitleClass}>
          <Link href="/">
            <a className={headerLinkClass} aria-label="Visit reftable.com">
              Reftable
            </a>
          </Link>
        </div>
        <Link href="/">
          <a aria-label="Visit reftable.com">
            <img
              className={mobileBrandClass}
              src="/android-chrome-192x192.png"
              alt="Brand Logo"
            />
          </a>
        </Link>
        <h1 className={mobilePageTitleClass}>{mobilePageTitle}</h1>
      </div>
      <div className={rightHeaderClass}>
        <MenuIcon showMenu={showMenu} toggleMenu={toggleMenu} />
        <Menu showMenu={showMenu} isClosing={isClosing} />
      </div>
    </div>
  )
}
