import React, { useContext, useReducer } from 'react'
import { column, Column, Letter, letters } from './tableData'

export function Provider({ children }) {
  const initialState = { column, letters }
  const [state, dispatch] = useReducer(reducer, initialState)
  return <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
}

export function useDispatch() {
  const { dispatch } = useContext(Store)
  return dispatch
}

export function useColumns() {
  const { state } = useContext(Store)
  const allColumns = Object.values(state.column)
  const displayColumns = allColumns
    .filter(c => c.show)
    .sort((c1, c2) => c1.position - c2.position)

  return { allColumns, displayColumns }
}

export function useLetters() {
  const { state } = useContext(Store)
  return state.letters
}

export const toggleColumnShow = (columnId: number): Action => {
  return {
    type: ActionType.ToggleColumnShow,
    payload: { columnId: columnId },
  }
}

interface IStore {
  state: State
  dispatch: React.Dispatch<Action>
}

const Store = React.createContext<IStore>({
  state: { column: {}, letters: [] },
  dispatch: () => {},
})

enum ActionType {
  ToggleColumnShow = 'ToggleColumnShow',
}

interface State {
  column: {
    [i: number]: Column
  }
  letters: Letter[]
}

interface Action {
  type: ActionType
  payload: { columnId: number }
}

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionType.ToggleColumnShow: {
      const column = state.column
      const id = action.payload.columnId
      const newCol = { ...column[id], show: !column[id].show }
      return {
        ...state,
        column: { ...column, [id]: newCol },
      }
    }
    default:
      return state
  }
}
