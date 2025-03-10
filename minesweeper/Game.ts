import { Cell, ICell } from './Cell'
import { CellDisplayState } from './CellDisplay'
import { Timer } from './Timer'

export interface IGameState {
  board: IBoard
  time: number
  playState: PlayState
  difficulty: GameDifficulty
}

export interface IRow {
  [column: number]: Cell
}

export interface IBoard {
  [row: number]: IRow
}

export enum PlayState {
  PreGame = 'Pre Game',
  InGame = 'In Game',
  PostGameWon = 'Won',
  PostGameLost = 'Lost',
}

export enum GameDifficulty {
  Beginner = 'Beginner',
  Intermediate = 'Intermediate',
  Expert = 'Expert',
}

export class Game {
  private board: IBoard
  private allCells: Cell[]
  timer: Timer
  private difficulty: GameDifficulty
  private static makeCell = (iCell: ICell): Cell => new Cell(iCell)
  private static makeBoard = (game: Game): IBoard => {
    let rows: number, columns: number, mines: number
    switch (game.difficulty) {
      case GameDifficulty.Beginner:
        rows = columns = 9
        mines = 10
        break
      case GameDifficulty.Intermediate:
        rows = columns = 16
        mines = 40
        break
      case GameDifficulty.Expert:
        rows = 16
        columns = 30
        mines = 99
        break
    }

    const board = {}
    for (let r = 0; r < rows; r++) {
      board[r] = {}
      for (let c = 0; c < columns; c++) {
        board[r][c] = Game.makeCell({ isMined: false, row: r, column: c, game })
      }
    }

    const getRand = (max: number): number => {
      return Math.floor(Math.random() * max)
    }

    for (let i = 0; i < mines; i++) {
      board[getRand(rows)][getRand(columns)].isMined = true
    }

    return board
  }

  constructor(difficulty: GameDifficulty) {
    this.difficulty = difficulty
    this.board = Game.makeBoard(this)
    this.timer = new Timer()
    this.getAllCellValues()
  }

  get state(): IGameState {
    return {
      board: this.board,
      time: this.timer.currentTime,
      playState: this.playState,
      difficulty: this.difficulty,
    }
  }

  private get playState(): PlayState {
    const isPreGame = this.allCells.every(
      (cell) => cell.display.state === CellDisplayState.Unflagged,
    )
    if (isPreGame) {
      return PlayState.PreGame
    }

    const isLost = this.allCells.some(
      (cell) => cell.display.state === CellDisplayState.RevealedMine,
    )
    if (isLost) {
      return PlayState.PostGameLost
    }

    const unrevealedCells = this.allCells.filter((cell) => !cell.isRevealed)
    if (unrevealedCells.every((cell) => cell.isMined)) {
      return PlayState.PostGameWon
    }

    return PlayState.InGame
  }

  private getAllCells = (): void => {
    this.allCells = Object.values(this.board)
      .map((row: IRow) => Object.values(row))
      .flat()
  }

  private getAllCellValues = (): void => {
    this.getAllCells()
    this.allCells.forEach((cell: Cell) => {
      cell.getNumericalValue()
    })
  }
}
