import { classes, style, media } from 'typestyle'
import { menuTransitionDurationMs, mobile, darkBlue } from '../../css'

const lineClass = style({
  transition: `transform ${menuTransitionDurationMs}ms`,
  transformOrigin: 'center',
})

const svgClass = style(
  {
    $nest: {
      '&:hover': {
        cursor: 'pointer',
      },
      '&.close': {
        $nest: {
          '&>*:first-child': {
            transformOrigin: 'center',
            transform: 'rotate(45deg) translate(0, 3px)',
          },
          '&>*:last-child': {
            transformOrigin: 'center',
            transform: 'rotate(-45deg) translate(0, -3px)',
          },
        },
      },
    },
  },
  media(mobile, {
    stroke: darkBlue,
  })
)

export const svgMenuIconSize = 24

export const MenuIcon: React.FC<{
  toggleMenu(): void
  showMenu: boolean
}> = ({ toggleMenu, showMenu }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={svgMenuIconSize}
      height={svgMenuIconSize}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={classes(svgClass, showMenu ? 'close' : '')}
      onClick={toggleMenu}
    >
      <line className={lineClass} x1="3" y1="9" x2="21" y2="9"></line>
      <line className={lineClass} x1="3" y1="15" x2="21" y2="15"></line>
    </svg>
  )
}
