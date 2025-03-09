import { useColumns } from './tableState'

export default function TableHeader() {
  const { displayColumns } = useColumns()

  return (
    <thead className="bg-aac-dark-blue text-white">
      <tr>
        {displayColumns.map(({ name }) => (
          <th key={name} className="py-5 px-2.5 font-normal">
            {name}
          </th>
        ))}
      </tr>
    </thead>
  )
}
