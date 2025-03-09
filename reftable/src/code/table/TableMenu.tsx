import { useEffect, useRef, useState } from 'react'
import { keyframes, style } from 'typestyle'
import { zIndexLow } from '../css'
import { Plus } from './Plus'
import { Popup } from './Popup'

const scaleInKeyframes = keyframes({
  '0%': {
    transform: 'scale(0)',
    opacity: 1,
  },
  '100%': {
    transform: 'scale(1)',
    opacity: 1,
  },
})

const tableMenuClass = style({
  height: 0,
  width: 0,
  alignSelf: 'flex-end',
  display: 'flex',
  animation: `${scaleInKeyframes} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
  position: 'sticky',
  bottom: 0,
  right: 0,
  zIndex: zIndexLow,
})

export const TableMenu: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false)
  const tableMenuRef = useRef(null)

  const checker = (e): void => {
    const parent = tableMenuRef.current
    const child = e.target
    if (!parent.contains(child)) setShowPopup(false)
  }

  useEffect(() => {
    document.addEventListener('click', checker)
    return (): void => document.removeEventListener('click', checker)
  }, [])

  const toggle = (): void => setShowPopup(!showPopup)

  return (
    <div ref={tableMenuRef} className={tableMenuClass}>
      {showPopup && <Popup />}
      <Plus toggle={toggle} />
    </div>
  )
}
