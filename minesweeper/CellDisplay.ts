import { Cell } from './Cell'

export enum CellDisplayState {
  Flagged,
  Unflagged,
  Revealed,
  RevealedMine,
}

export class CellDisplay {
  private cell: Cell

  constructor(cell: Cell) {
    this.cell = cell
  }

  get state(): CellDisplayState {
    if (!this.cell.isRevealed) {
      return this.cell.isFlagged
        ? CellDisplayState.Flagged
        : CellDisplayState.Unflagged
    }

    return this.cell.isMined
      ? CellDisplayState.RevealedMine
      : CellDisplayState.Revealed
  }

  get value(): string | number {
    switch (this.state) {
      case CellDisplayState.Flagged:
        return 'F'
      case CellDisplayState.Unflagged:
        return ''
      case CellDisplayState.RevealedMine:
        return 'X'
      case CellDisplayState.Revealed: {
        const n = this.cell.numericalValue
        return n || ''
      }
      default:
        throw new Error('Something went wrong')
    }
  }

  get color(): string {
    const numberColors = {
      1: 'text-blue-400',
      2: 'text-green-400',
      3: 'text-red-400',
      4: 'text-purple-400',
      5: 'text-maroon-400',
      6: 'text-turqoise-400',
      7: 'text-black-400',
      8: 'text-gray-400',
    }

    switch (this.state) {
      case CellDisplayState.Flagged:
        return 'red'
      case CellDisplayState.Revealed:
        return numberColors[this.cell.numericalValue]
      default:
        return 'black'
    }
  }

  get backgroundColor(): string {
    switch (this.state) {
      case CellDisplayState.RevealedMine:
        return 'red'
      default:
        return 'lightgrey'
    }
  }

  get border(): string {
    switch (this.state) {
      case CellDisplayState.Flagged:
      case CellDisplayState.Unflagged:
        return 'outset'
      default:
        return 'inset'
    }
  }
}
