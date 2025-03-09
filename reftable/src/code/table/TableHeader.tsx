import { useContext } from 'react'
import { style } from 'typestyle'
import { darkBlue, white, zIndexLow } from '../css'
import { tableCellMaxWidth } from './tableConstants'
import { TableDataStore } from './TableWrapper'

export const thClass = style({
  padding: '20px 10px',
  position: 'sticky',
  top: 0,
  zIndex: zIndexLow,
  backgroundColor: darkBlue,
  color: white,
  fontWeight: 'normal',
  maxWidth: `${tableCellMaxWidth}px`,
})

export const TableHeader: React.FC = () => {
  const { state } = useContext(TableDataStore)
  const { columns: column, rowHeaders } = state
  const columns = Object.values(column)
  const sortedColumns = columns.sort((a, b) => a.position - b.position)
  const isRowHeaders = !!rowHeaders.length

  return (
    <thead>
      <tr>
        {isRowHeaders && <th className={thClass}></th>}
        {sortedColumns.map(({ name }, i) => (
          <th className={thClass} key={i}>
            {name}
          </th>
        ))}
      </tr>
    </thead>
  )
}
