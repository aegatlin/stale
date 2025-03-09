import { style } from 'typestyle'

const size = 15

const chevronRightIconClass = style({
  width: `${size}px`,
  height: `${size}px`,
})

export const ChevronRightIcon: React.FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={chevronRightIconClass}
    >
      <polyline points="9 18 15 12 9 6"></polyline>
    </svg>
  )
}
