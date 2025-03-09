import { classes, keyframes, style } from 'typestyle'
import { menuTransitionDurationMs, zIndexHigh } from '../../css'

const fadeIn = keyframes({
  '0%': {
    opacity: 0,
  },
  '100%': {
    opacity: 1,
  },
})

const fadeOut = keyframes({
  '0%': {
    opacity: 1,
  },
  '100%': {
    opacity: 0,
  },
})

const pageMaskClass = style({
  position: 'fixed',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  zIndex: zIndexHigh,
  animation: `${fadeIn} ${menuTransitionDurationMs}ms ease-out both`,
  $nest: {
    '&.closing': {
      animation: `${fadeOut} ${menuTransitionDurationMs}ms ease-out both`,
    },
  },
})

export const PageMask: React.FC<{
  showMenu: boolean
  closeMenu(): void
  isClosing: boolean
}> = ({ showMenu, closeMenu, isClosing }) => {
  if (!showMenu && !isClosing) return null
  return (
    <div
      className={classes(pageMaskClass, isClosing ? 'closing' : '')}
      onClick={closeMenu}
    />
  )
}
