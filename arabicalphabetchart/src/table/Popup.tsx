import { Column } from './tableData'
import { toggleColumnShow, useColumns, useDispatch } from './tableState'

export default function Popup() {
  const { allColumns } = useColumns()

  return (
    <div className="flex flex-col rounded-md border bg-aac-off-white p-2.5 text-aac-dark-blue shadow-md">
      {allColumns.map(c => (
        <PopupColumn key={c.id} column={c} />
      ))}
    </div>
  )
}

function PopupColumn({ column }: { column: Column }) {
  const dispatch = useDispatch()
  const { name, show, id } = column
  const toggle = () => dispatch(toggleColumnShow(id))

  return (
    <div className="flex items-center py-2.5 px-5">
      <input
        className="mr-2.5 h-5 w-5"
        type="checkbox"
        id={name}
        onChange={toggle}
        checked={show}
      ></input>
      <label htmlFor={name}>{name}</label>
    </div>
  )
}
