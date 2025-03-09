import { TableHeader } from './TableHeader'
import { TableBody } from './TableBody'
import { style, media } from 'typestyle'
import { fontSizeH3, mobile } from '../css'
import { Column } from './tableState'
import { useContext } from 'react'
import { TableDataStore } from './TableWrapper'

const getTableClass = (columns: Column[], hasRowHeaders: boolean): string => {
  const nest = {}
  columns.forEach(({ show, position }) => {
    if (show) return

    const columnPosition = position + (hasRowHeaders ? 2 : 1)
    nest[`& tr td:nth-child(${columnPosition})`] = { display: 'none' }
    nest[`& tr th:nth-child(${columnPosition})`] = { display: 'none' }
  })

  return style(
    {
      borderCollapse: 'collapse',
      $nest: nest,
    },
    media(mobile, {
      width: '100%',
    })
  )
}

const captionClass = style({
  textAlign: 'left',
  padding: '10px 0',
  fontSize: fontSizeH3,
})

export const Table: React.FC<{ title?: string }> = ({ title }) => {
  const { state } = useContext(TableDataStore)
  const hasRowHeaders = !!state.rowHeaders.length
  const tableClass = getTableClass(Object.values(state.columns), hasRowHeaders)

  return (
    <table className={tableClass}>
      {title && <caption className={captionClass}>{title}</caption>}
      <TableHeader />
      <TableBody />
    </table>
  )
}
