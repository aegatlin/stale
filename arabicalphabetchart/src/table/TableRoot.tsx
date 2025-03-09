import { Table } from './Table'
import { Provider } from './tableState'

export default function TableRoot() {
  return (
    <Provider>
      <Table />
    </Provider>
  )
}
