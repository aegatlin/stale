import React, { useState } from 'react'
import PlusSvg from './PlusSvg'
import Popup from './Popup'
import TableHeader from './TableHeader'
import TableRow from './TableRow'
import { useLetters } from './tableState'

export function Table() {
  const letters = useLetters()
  const [showPopup, setShowPopup] = useState(false)
  const toggle = () => setShowPopup(!showPopup)

  return (
    <div className="max-w-[100vw]">
      <div className="w-full overflow-x-auto">
        <table className="table-auto border-collapse">
          <TableHeader />
          <tbody>
            {letters.map((letter, i) => (
              <TableRow key={i} letter={letter} />
            ))}
          </tbody>
        </table>
      </div>
      <div className="sticky bottom-0 h-0 w-full">
        <div className="absolute bottom-28 right-8">
          {showPopup && <Popup />}
        </div>
        <div className="absolute bottom-12 right-8" onClick={toggle}>
          <PlusSvg />
        </div>
      </div>
    </div>
  )
}
