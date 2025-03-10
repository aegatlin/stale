import React, { useEffect, useState, type JSX } from 'react';
import { Cell } from './Cell'
import { CellUI } from './CellUI'
import { Game, IGameState, IRow, PlayState } from './Game'

export interface IGameUI {
  game: Game
  addRecord(gameState: IGameState): void
}

export const GameUI = ({ game, addRecord }: IGameUI): JSX.Element => {
  const [gameState, setGameState] = useState(game.state)
  const { board, time, playState } = gameState
  const [isRecorded, setIsRecorded] = useState(false)

  useEffect(() => {
    if (isRecorded) return
    if (
      playState === PlayState.PostGameLost ||
      playState === PlayState.PostGameWon
    ) {
      addRecord(gameState)
      setIsRecorded(true)
    }
  }, [isRecorded, playState, addRecord, gameState])

  useEffect(() => {
    setGameState(game.state)
    setIsRecorded(false)
  }, [game])

  useEffect(() => {
    if (playState === PlayState.InGame) {
      setTimeout(() => setGameState(game.state), 100)
    }
  })

  const rows: IRow[] = Object.values(board)
  return (
    <div className="flex select-none flex-col items-center">
      <div className="mt-8 mb-4 -mr-4 w-12 text-left">
        {(time / 1000).toFixed(1)}
      </div>
      <div>
        {rows.map((row, i) => {
          const rowProps = { row, game, setGameState }
          return <RowUI key={i} {...rowProps} />
        })}
      </div>
    </div>
  )
}

interface IRowUI {
  row: IRow
  game: Game
  setGameState(newGameState: IGameState): void
}
const RowUI = ({ row, game, setGameState }: IRowUI): JSX.Element => {
  const cells: Cell[] = Object.values(row)

  return (
    <div className="flex">
      {cells.map((cell, i) => {
        const cellProps = {
          cell,
          game,
          setGameState,
        }
        return <CellUI key={i} {...cellProps} />
      })}
    </div>
  )
}
