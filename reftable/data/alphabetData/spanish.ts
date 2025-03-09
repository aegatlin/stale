import { IColumn, IRow } from '../../src/code/table/tableState'
import { Language } from './languages'

enum ColumnName {
  UpperCase = 'Upper Case',
  LowerCase = 'Lower Case',
  Name = 'Name',
  Pronunciation = 'Pronunciation'
}

const columns: IColumn[] = [
  { name: ColumnName.Name, language: Language.Spanish },
  { name: ColumnName.UpperCase, language: Language.Spanish },
  { name: ColumnName.LowerCase, language: Language.Spanish },
  { name: ColumnName.Pronunciation, language: Language.Spanish }
]

const rows: IRow[] = [
  {
    [ColumnName.LowerCase]: 'a',
    [ColumnName.UpperCase]: 'A',
    [ColumnName.Name]: 'a',
    [ColumnName.Pronunciation]: 'sp{a}'
  },
  {
    [ColumnName.LowerCase]: 'b',
    [ColumnName.UpperCase]: 'B',
    [ColumnName.Name]: 'be',
    [ColumnName.Pronunciation]: 'a{b}out, ele{v}ate'
  },
  {
    [ColumnName.LowerCase]: 'c',
    [ColumnName.UpperCase]: 'C',
    [ColumnName.Name]: 'ce',
    [ColumnName.Pronunciation]: 'ea{sy}, s{c}an,'
  },
  {
    [ColumnName.LowerCase]: 'd',
    [ColumnName.UpperCase]: 'D',
    [ColumnName.Name]: 'de',
    [ColumnName.Pronunciation]: '{d}oor, {th}at'
  },
  {
    [ColumnName.LowerCase]: 'e',
    [ColumnName.UpperCase]: 'E',
    [ColumnName.Name]: 'e',
    [ColumnName.Pronunciation]: 'h{ey}'
  },
  {
    [ColumnName.LowerCase]: 'f',
    [ColumnName.UpperCase]: 'F',
    [ColumnName.Name]: 'efe',
    [ColumnName.Pronunciation]: '{f}ade'
  },
  {
    [ColumnName.LowerCase]: 'g',
    [ColumnName.UpperCase]: 'G',
    [ColumnName.Name]: 'ge',
    [ColumnName.Pronunciation]: '{h}ello, a{g}o'
  },
  {
    [ColumnName.LowerCase]: 'h',
    [ColumnName.UpperCase]: 'H',
    [ColumnName.Name]: 'hache',
    [ColumnName.Pronunciation]: '{h}our, {h}ello, {y}ou'
  },
  {
    [ColumnName.LowerCase]: 'i',
    [ColumnName.UpperCase]: 'I',
    [ColumnName.Name]: 'i',
    [ColumnName.Pronunciation]: 's{ee}'
  },
  {
    [ColumnName.LowerCase]: 'j',
    [ColumnName.UpperCase]: 'J',
    [ColumnName.Name]: 'jota',
    [ColumnName.Pronunciation]: '{h}ello'
  },
  {
    [ColumnName.LowerCase]: 'k',
    [ColumnName.UpperCase]: 'K',
    [ColumnName.Name]: 'ka',
    [ColumnName.Pronunciation]: 's{c}an'
  },
  {
    [ColumnName.LowerCase]: 'l',
    [ColumnName.UpperCase]: 'L',
    [ColumnName.Name]: 'ele',
    [ColumnName.Pronunciation]: '{l}ine, {y}es'
  },
  {
    [ColumnName.LowerCase]: 'm',
    [ColumnName.UpperCase]: 'M',
    [ColumnName.Name]: 'eme',
    [ColumnName.Pronunciation]: '{m}other'
  },
  {
    [ColumnName.LowerCase]: 'n',
    [ColumnName.UpperCase]: 'N',
    [ColumnName.Name]: 'ene',
    [ColumnName.Pronunciation]: '{n}o, si{n}k'
  },
  {
    [ColumnName.LowerCase]: 'ñ',
    [ColumnName.UpperCase]: 'Ñ',
    [ColumnName.Name]: 'eñe',
    [ColumnName.Pronunciation]: 'ca{ny}on'
  },
  {
    [ColumnName.LowerCase]: 'o',
    [ColumnName.UpperCase]: 'O',
    [ColumnName.Name]: 'o',
    [ColumnName.Pronunciation]: 's{o}'
  },
  {
    [ColumnName.LowerCase]: 'p',
    [ColumnName.UpperCase]: 'P',
    [ColumnName.Name]: 'pe',
    [ColumnName.Pronunciation]: '{p}izza'
  },
  {
    [ColumnName.LowerCase]: 'q',
    [ColumnName.UpperCase]: 'Q',
    [ColumnName.Name]: 'cu',
    [ColumnName.Pronunciation]: 's{k}ull'
  },
  {
    [ColumnName.LowerCase]: 'r',
    [ColumnName.UpperCase]: 'R',
    [ColumnName.Name]: 'erre',
    [ColumnName.Pronunciation]:
      "between ga{l}ore and {r}oar, trilled for double r's"
  },
  {
    [ColumnName.LowerCase]: 's',
    [ColumnName.UpperCase]: 'S',
    [ColumnName.Name]: 'ese',
    [ColumnName.Pronunciation]: 'bu{s}y, plea{s}ure'
  },
  {
    [ColumnName.LowerCase]: 't',
    [ColumnName.UpperCase]: 'T',
    [ColumnName.Name]: 'te',
    [ColumnName.Pronunciation]: '{t}all, {th}is'
  },
  {
    [ColumnName.LowerCase]: 'u',
    [ColumnName.UpperCase]: 'U',
    [ColumnName.Name]: 'u',
    [ColumnName.Pronunciation]: 'r{u}de'
  },
  {
    [ColumnName.LowerCase]: 'v',
    [ColumnName.UpperCase]: 'V',
    [ColumnName.Name]: 'uve',
    [ColumnName.Pronunciation]: '{v}ery'
  },
  {
    [ColumnName.LowerCase]: 'w',
    [ColumnName.UpperCase]: 'W',
    [ColumnName.Name]: 'doble',
    [ColumnName.Pronunciation]: '{w}ater'
  },
  {
    [ColumnName.LowerCase]: 'x',
    [ColumnName.UpperCase]: 'X',
    [ColumnName.Name]: 'equis',
    [ColumnName.Pronunciation]: 'ma{x}, {h}ello, {sc}ene'
  },
  {
    [ColumnName.LowerCase]: 'y',
    [ColumnName.UpperCase]: 'Y',
    [ColumnName.Name]: 'ye',
    [ColumnName.Pronunciation]: 'bo{y}, {y}es'
  },
  {
    [ColumnName.LowerCase]: 'z',
    [ColumnName.UpperCase]: 'Z',
    [ColumnName.Name]: 'zeta',
    [ColumnName.Pronunciation]: '{z}ero'
  }
]

export const spanishTable = { columns, rows }
