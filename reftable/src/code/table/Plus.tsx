import { style } from 'typestyle'
import { darkBlue, white } from '../css'
import { tableMenuIconSize, tableMenuOffsetPx } from './tableConstants'

const svgPlusClass = style({
  fill: darkBlue,
  stroke: white,
  '-webkit-tap-highlight-color': 'transparent',
  $nest: {
    '& circle': {
      stroke: darkBlue,
    },
  },
})

const plusWrapperClass = style({
  position: 'absolute',
  bottom: `${tableMenuOffsetPx}px`,
  right: `${tableMenuOffsetPx}px`,
  height: 0,
  width: 0,
  $nest: {
    '&:hover': {
      cursor: 'pointer',
    },
  },
})

export const Plus: React.FC<{ toggle(): void }> = ({ toggle }) => {
  return (
    <div className={plusWrapperClass}>
      <svg
        onClick={toggle}
        xmlns="http://www.w3.org/2000/svg"
        width={tableMenuIconSize}
        height={tableMenuIconSize}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={svgPlusClass}
      >
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="12" y1="8" x2="12" y2="16"></line>
        <line x1="8" y1="12" x2="16" y2="12"></line>
      </svg>
    </div>
  )
}
