import Link from 'next/link'
import { classes, keyframes, style } from 'typestyle'
import { pages } from '../../../../data/pageData'
import {
  darkBlue,
  headerHeight,
  menuTransitionDurationMs,
  menuWidth,
  offWhite,
  zIndexHigh,
} from '../../css'
import { IPages } from '../../GroupPage'
import { SubMenu } from './SubMenu'

const slideInRight = keyframes({
  '0%': {
    transform: 'translateX(1000px)',
  },
  '100%': {
    transform: 'translateX(0)',
  },
})

const slideOutRight = keyframes({
  '0%': {
    transform: 'translateX(0px)',
  },
  '100%': {
    transform: 'translateX(1000px)',
  },
})

export const menuSidePadding = 20

const menuClass = style({
  position: 'fixed',
  backgroundColor: offWhite,
  top: `${headerHeight}px`,
  right: 0,
  zIndex: zIndexHigh,
  width: `${menuWidth}px`,
  height: `calc(100vh - ${headerHeight}px)`,
  display: 'flex',
  flexDirection: 'column',
  boxShadow: `-10px 2px 10px -10px ${darkBlue}`,
  animation: `${slideInRight} ${menuTransitionDurationMs}ms cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
  fontSize: '1.2em',
  padding: `30px ${menuSidePadding}px`,
  overflow: 'auto',
  $nest: {
    '&.closing': {
      animation: `${slideOutRight} ${menuTransitionDurationMs}ms cubic-bezier(0.550, 0.085, 0.680, 0.530) both`,
    },
    '& a': {
      color: darkBlue,
      textDecoration: 'none',
    },
    '&>*:not(:last-child)': {
      marginBottom: '20px',
    },
    '&>a': {
      $nest: {
        '&:hover': {
          fontWeight: 'bold',
        },
      },
    },
  },
})

const makeLinks = (pages: IPages): JSX.Element[] => {
  return Object.values(pages).map(({ page }, i) => {
    const { pathname, pageTitle } = page

    return (
      <Link key={i} href={pathname}>
        <a>{pageTitle}</a>
      </Link>
    )
  })
}

export const Menu: React.FC<{ showMenu: boolean; isClosing: boolean }> = ({
  showMenu,
  isClosing,
}) => {
  if (!showMenu && !isClosing) return null

  const subMenusProps = Object.values(pages).map(({ pageTitle, pages }) => {
    return { subMenuTitle: pageTitle, linkList: makeLinks(pages) }
  })

  return (
    <div className={classes(menuClass, isClosing ? 'closing' : '')}>
      {subMenusProps.map((subMenuProps, i) => (
        <SubMenu key={i} {...subMenuProps} />
      ))}
    </div>
  )
}
