import { IColumn, IRow } from '../../src/code/table/tableState'
import { Language } from '../alphabetData/languages'

enum ColumnName {
  Inches = 'Inches',
  Pixels = 'Pixels'
}

const columns: IColumn[] = [
  { name: ColumnName.Inches, language: Language.English },
  { name: ColumnName.Pixels, language: Language.English }
]

const rows: IRow[] = [
  {
    [ColumnName.Inches]: '3 x 5',
    [ColumnName.Pixels]: '900 x 1500'
  },
  {
    [ColumnName.Inches]: '4 x 6',
    [ColumnName.Pixels]: '1200 x 1800'
  },
  {
    [ColumnName.Inches]: '5 x 7',
    [ColumnName.Pixels]: '1500 x 2100'
  },
  {
    [ColumnName.Inches]: '8 x 8',
    [ColumnName.Pixels]: '2400 x 2400'
  },
  {
    [ColumnName.Inches]: '8 x 10',
    [ColumnName.Pixels]: '2400 x 3000'
  },
  {
    [ColumnName.Inches]: '8.5 x 11',
    [ColumnName.Pixels]: '2550 x 3300'
  },
  {
    [ColumnName.Inches]: '9 x 16',
    [ColumnName.Pixels]: '2700 x 4800'
  },
  {
    [ColumnName.Inches]: '11 x 14',
    [ColumnName.Pixels]: '3300 x 4200'
  },
  {
    [ColumnName.Inches]: '11 x 16',
    [ColumnName.Pixels]: '3300 x 4800'
  }
]

export const pixelPrintComparisonTable = { columns, rows }
