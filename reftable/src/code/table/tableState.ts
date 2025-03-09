import { Language } from '../../../data/alphabetData/languages'

enum ActionType {
  ToggleColumnShow,
}

export interface Column {
  id: number
  name: string
  position: number
  language?: Language
  show: boolean
}

export interface IColumns {
  [id: number]: Column
}

export interface State {
  columns: IColumns
  rows: IRow[]
  rowHeaders: string[]
}

export interface IColumn {
  name: string
  language?: Language
}

export interface IRow {
  [columnName: string]: string | string[]
}

export interface Action {
  type: ActionType
  payload: { columnId: number }
}

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionType.ToggleColumnShow: {
      const { columns } = state
      const id = action.payload.columnId
      const oldCol = columns[id]
      const newCol = { ...oldCol, show: !oldCol.show }
      return {
        ...state,
        columns: { ...columns, [id]: newCol },
      }
    }
    default:
      return state
  }
}

export const toggleColumnShow = (columnId: number): Action => {
  return {
    type: ActionType.ToggleColumnShow,
    payload: { columnId },
  }
}
