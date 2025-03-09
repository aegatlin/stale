import { useContext } from 'react'
import { style } from 'typestyle'
import { darkBlue, offWhite } from '../css'
import { tableMenuOffsetPx } from './tableConstants'
import { toggleColumnShow } from './tableState'
import { TableDataStore } from './TableWrapper'

const checkboxSize = 20

const popupInputClass = style({
  height: checkboxSize,
  width: checkboxSize,
  marginRight: '10px',
})

const popupClass = style({
  position: 'absolute',
  bottom: `${tableMenuOffsetPx + 15}px`,
  right: 0,
  width: '250px',
  minHeight: `350px`,
  backgroundColor: offWhite,
  borderRadius: '4%',
  boxShadow: `0 0 10px -5px ${darkBlue}`,
  color: darkBlue,
  display: 'flex',
  flexDirection: 'column',
  padding: '10px',
})

const columnListItemClass = style({
  display: 'flex',
  alignItems: 'center',
  padding: '10px 20px',
})

const popupLabelClass = style({
  maxWidth: '150px',
})

export const Popup: React.FC = () => {
  const { state, dispatch } = useContext(TableDataStore)
  const { columns } = state
  const cols = Object.values(columns)

  return (
    <div className={popupClass}>
      {cols.map((col) => {
        const { name, show, id } = col
        const toggle = (): void => dispatch(toggleColumnShow(id))

        return (
          <div key={id} className={columnListItemClass}>
            <input
              className={popupInputClass}
              onChange={toggle}
              type="checkbox"
              id={name}
              checked={show}
            ></input>
            <label className={popupLabelClass} htmlFor={name}>
              {name}
            </label>
          </div>
        )
      })}
    </div>
  )
}
