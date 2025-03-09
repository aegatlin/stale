import React, { useEffect, useReducer, useRef, useState } from 'react'
import { media, style } from 'typestyle'
import { headerHeight, mobile, notMobile } from '../css'
import {
  getTableViewportState,
  TableViewportState,
  TableViewportVerticalState,
} from './getTableViewportState'
import { Table } from './Table'
import { TableMenu } from './TableMenu'
import { Action, IColumn, IColumns, IRow, reducer, State } from './tableState'

const tableWrapperClass = style(
  {
    marginBottom: '40px',
  },
  media(notMobile, {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  }),
  media(mobile, {
    overflow: 'auto',
    maxHeight: `calc(100vh - ${headerHeight}px)`,
  })
)

const tableContainerClass = style({
  display: 'flex',
})

export interface ITableDataStore {
  state: State
  dispatch: React.Dispatch<Action>
}

const transform = (columns: IColumn[]): IColumns => {
  const transformedColumns: IColumns = {}

  columns.forEach((column, i) => {
    const { name, language } = column

    transformedColumns[i] = {
      id: i,
      name,
      position: i,
      show: true,
    }

    if (!language) return

    transformedColumns[i].language = language
  })

  return transformedColumns
}

export const TableDataStore = React.createContext<ITableDataStore>(null)

export interface ITable {
  rows: IRow[]
  columns: IColumn[]
  rowHeaders?: string[]
  title?: string
}
export const TableWrapper: React.FC<{ table: ITable }> = ({ table }) => {
  const tableContainerRef = useRef(null)
  const [
    tableViewportState,
    setTableViewportState,
  ] = useState<TableViewportState>()

  const { title, rows, columns, rowHeaders = [] } = table
  const onScroll = (): void => {
    const newTableViewportState = getTableViewportState(
      tableContainerRef.current
    )
    setTableViewportState(newTableViewportState)
  }

  useEffect(() => {
    onScroll()
    document.addEventListener('scroll', onScroll)
    return (): void => document.removeEventListener('scroll', onScroll)
  }, [])

  const initialState: State = {
    rows,
    rowHeaders,
    columns: transform(columns),
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  const isVisible =
    tableViewportState &&
    tableViewportState.vertical === TableViewportVerticalState.Visible

  return (
    <TableDataStore.Provider value={{ state, dispatch }}>
      <div className={tableWrapperClass}>
        <div ref={tableContainerRef} className={tableContainerClass}>
          <Table title={title} />
          {isVisible && <TableMenu />}
        </div>
      </div>
    </TableDataStore.Provider>
  )
}
