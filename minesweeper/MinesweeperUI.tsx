import { useState, type JSX } from 'react';
import { Game, GameDifficulty, IGameState } from './Game'
import { GameUI } from './GameUI'

export const MinesweeperGame = (): JSX.Element => {
  const [game, setGame] = useState(new Game(GameDifficulty.Beginner))
  const [records, setRecords] = useState<IGameState[]>([])

  const addRecord = (gameState: IGameState): void => {
    setRecords(records.concat([gameState]))
  }

  return (
    <div className="p-x-16 mb-24 flex flex-col items-center">
      <Buttons setGame={setGame} />
      <GameUI game={game} addRecord={addRecord} />
      {records.length > 0 && (
        <div className="mt-8 mb-12 flex flex-col items-center space-y-2">
          <div>Session Times</div>
          {records.map(({ difficulty, time, playState }, i) => {
            return (
              <div key={i}>
                {difficulty} | {playState} | {(time / 1000).toFixed(3)}
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

function Buttons({ setGame }) {
  const makeNewGame = (difficulty = GameDifficulty.Beginner): void => {
    const newGame = new Game(difficulty)
    setGame(newGame)
  }

  const buttonBaseClass = 'px-6 py-4 text-center rounded-sm shadow-sm'

  return (
    <div className="space-x-4">
      <button
        className={`${buttonBaseClass} bg-green-400`}
        onClick={() => makeNewGame(GameDifficulty.Beginner)}
      >
        Beginner
      </button>
      <button
        className={`${buttonBaseClass} bg-yellow-400`}
        onClick={() => makeNewGame(GameDifficulty.Intermediate)}
      >
        Intermediate
      </button>
      <button
        className={`${buttonBaseClass} bg-red-400`}
        onClick={() => makeNewGame(GameDifficulty.Expert)}
      >
        Expert
      </button>
    </div>
  )
}
