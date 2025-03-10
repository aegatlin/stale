import { Cell } from './Cell'
import { Game, IGameState } from './Game'
import { CellDisplayState } from './CellDisplay'
import { Flag, Loader } from 'lucide-react'

import type { JSX } from "react";

interface ICellUI {
  cell: Cell
  game: Game
  setGameState(newGameState: IGameState): void
}

export const CellUI = ({ cell, game, setGameState }: ICellUI): JSX.Element => {
  const onClick = (): void => {
    cell.click()
    setGameState(game.state)
  }

  const onContextMenuClick = (e: React.MouseEvent): void => {
    e.preventDefault()
    switch (cell.display.state) {
      case CellDisplayState.Flagged:
      case CellDisplayState.Unflagged:
        cell.toggleFlag()
        break
      case CellDisplayState.Revealed:
        cell.sweep()
    }
    setGameState(game.state)
  }

  const staticClasses =
    'flex justify-center items-center h-8 w-8 m-0.5 border border-gray-300 rounded-sm'

  const reactiveClasses = () => {
    let classes = 'shadow-sm bg-gray-200'
    if (cell.display.state === CellDisplayState.Revealed) {
      classes = `shadow-inner bg-gray-100 ${cell.display.color} font-bold`
    }
    return classes
  }

  const content = () => {
    if (cell.display.state === CellDisplayState.Flagged) {
      return <Flag />
    }

    if (cell.display.state === CellDisplayState.RevealedMine) {
      return <Loader color="red" />
    }

    return cell.display.value
  }

  return (
    <div
      className={`${staticClasses} ${reactiveClasses()}`}
      onClick={onClick}
      onContextMenu={onContextMenuClick}
    >
      {content()}
    </div>
  )
}
