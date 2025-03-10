import { Game, PlayState } from './Game'
import { CellDisplay } from './CellDisplay'

export interface ICell {
  isMined: boolean
  row: number
  column: number
  game: Game
}

export class Cell {
  isRevealed = false
  isRippled = false
  isFlagged = false
  isMined: boolean
  numericalValue?: number
  private row: number
  private column: number
  private neighbors: Cell[]
  private game: Game

  constructor({ isMined, row, column, game }: ICell) {
    this.isMined = isMined
    this.row = row
    this.column = column
    this.game = game
  }

  toggleFlag(): void {
    this.isFlagged = !this.isFlagged
  }

  click(): void {
    if (this.game.state.playState === PlayState.PreGame) {
      this.game.timer.start()
    }

    if (this.isFlagged) return
    if (this.isRevealed) return
    this.isRevealed = true
    if (this.numericalValue === 0) this.ripple()

    if (
      this.game.state.playState === PlayState.PostGameWon ||
      this.game.state.playState === PlayState.PostGameLost
    ) {
      this.game.timer.stop()
    }
  }

  sweep(): void {
    if (!this.isRevealed) return

    let flaggedNeighbors = 0
    this.neighbors.forEach((neighbor) => {
      if (neighbor.isFlagged) flaggedNeighbors++
    })

    if (flaggedNeighbors === this.numericalValue) {
      this.neighbors.forEach((neighbor) => neighbor.click())
    }
  }

  ripple(): void {
    if (this.isRippled) return
    this.isRippled = true

    if (this.isMined) return
    if (this.isFlagged) return
    this.isRevealed = true
    if (this.numericalValue === 0) {
      this.neighbors.forEach((neighbor) => neighbor.ripple())
    }
  }

  getNumericalValue(): void {
    this.getNeighbors()
    if (this.isMined) return
    let n = 0
    this.neighbors.forEach((neighbor) => {
      if (neighbor.isMined) n++
    })
    this.numericalValue = n
  }

  private getNeighbors(): void {
    const neighbors = []
    for (let r = -1; r < 2; r++) {
      for (let c = -1; c < 2; c++) {
        try {
          const cell = this.game.state.board[this.row + r][this.column + c]
          if (!!cell && cell !== this) {
            neighbors.push(cell)
          }
        } catch {
          continue
        }
      }
    }
    this.neighbors = neighbors
  }

  get display(): CellDisplay {
    return new CellDisplay(this)
  }
}
