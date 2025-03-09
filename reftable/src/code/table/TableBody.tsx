import { useContext } from 'react'
import { style } from 'typestyle'
import { Language } from '../../../data/alphabetData/languages'
import { arabicFont, darkBlue, offWhite, white } from '../css'
import { tableCellMaxWidth } from './tableConstants'
import { TableDataStore } from './TableWrapper'
import { IRow } from './tableState'

const trClass = style({
  $nest: {
    '&>*': {
      backgroundColor: white,
    },
    '&:hover': {
      $nest: {
        '&>td': {
          backgroundColor: offWhite,
        },
      },
    },
  },
})

export const TableBody: React.FC = () => {
  const { state } = useContext(TableDataStore)
  const { rows, rowHeaders } = state
  const isRowHeader = !!rowHeaders.length

  return (
    <tbody>
      {rows.map((row: IRow, i) => (
        <TableRow key={i} row={row} rowHeader={isRowHeader && rowHeaders[i]} />
      ))}
    </tbody>
  )
}

const getTdClass = (lang: Language): string => {
  return style(
    {
      textAlign: 'center',
      padding: '20px 10px',
      maxWidth: `${tableCellMaxWidth}px`,
    },
    lang === Language.Arabic ? arabicFont : {}
  )
}

const rowHeaderClass = style({
  backgroundColor: darkBlue,
  color: white,
  padding: '10px 20px',
  position: 'sticky',
  left: 0,
})

const TableRow: React.FC<{ row: IRow; rowHeader: string | boolean }> = ({
  row,
  rowHeader,
}) => {
  const { state } = useContext(TableDataStore)
  const { columns: column } = state
  const columns = Object.values(column)
  const sortedColumns = columns.sort((a, b) => a.position - b.position)

  const BOLD_REGEX = /{([^}]*)}/g

  return (
    <tr className={trClass}>
      {rowHeader && <th className={rowHeaderClass}>{rowHeader}</th>}
      {sortedColumns.map((col) => {
        const content = row[col.name]

        if (typeof content === 'string') {
          return (
            <td
              key={col.id}
              className={getTdClass(col.language)}
              dangerouslySetInnerHTML={{
                __html: content.replace(BOLD_REGEX, '<b>$1</b>'),
              }}
            />
          )
        } else {
          return (
            <td key={col.id} className={getTdClass(col.language)}>
              {content.map((text, i) => (
                <div key={i}>{text}</div>
              ))}
            </td>
          )
        }
      })}
    </tr>
  )
}
