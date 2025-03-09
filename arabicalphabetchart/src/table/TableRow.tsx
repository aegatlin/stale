import { Column, Language, Letter } from './tableData'
import { useColumns } from './tableState'

export default function TableRow({ letter }) {
  const { displayColumns } = useColumns()

  return (
    <tr>
      {displayColumns.map(c => (
        <TableData key={c.id} column={c} letter={letter} />
      ))}
    </tr>
  )
}

function TableData({ letter, column }: { letter: Letter; column: Column }) {
  const BOLD_REGEX = /{([^}]*)}/g
  const text = letter[column.name].replace(BOLD_REGEX, '<strong>$1</strong>')
  const fontFamily = column.language === Language.Arabic ? 'font-arabic' : ''

  return (
    <td
      className={`max-w-[9rem] bg-white py-5 px-2.5 text-center hover:bg-aac-off-white ${fontFamily}`}
      dangerouslySetInnerHTML={{ __html: text }}
    />
  )
}
