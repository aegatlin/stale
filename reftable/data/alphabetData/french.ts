import { IColumn, IRow } from '../../src/code/table/tableState'
import { Language } from './languages'

enum ColumnName {
  UpperCase = 'Upper Case',
  LowerCase = 'Lower Case',
  Name = 'Name',
  NameIpa = 'Name (IPA)',
  DiacriticsAndLigatures = 'Diacritics and Ligatures'
}

const columns: IColumn[] = [
  { name: ColumnName.UpperCase, language: Language.English },
  { name: ColumnName.LowerCase, language: Language.English },
  { name: ColumnName.Name, language: Language.English },
  { name: ColumnName.NameIpa, language: Language.English },
  { name: ColumnName.DiacriticsAndLigatures, language: Language.English }
]

const rows: IRow[] = [
  {
    [ColumnName.UpperCase]: 'A',
    [ColumnName.LowerCase]: 'a',
    [ColumnName.Name]: 'a',
    [ColumnName.NameIpa]: '/a/',
    [ColumnName.DiacriticsAndLigatures]: 'Àà, Ââ, Ææ'
  },
  {
    [ColumnName.UpperCase]: 'B',
    [ColumnName.LowerCase]: 'b',
    [ColumnName.Name]: 'bé',
    [ColumnName.NameIpa]: '/be/',
    [ColumnName.DiacriticsAndLigatures]: ''
  },
  {
    [ColumnName.UpperCase]: 'C',
    [ColumnName.LowerCase]: 'c',
    [ColumnName.Name]: 'cé',
    [ColumnName.NameIpa]: '/se/',
    [ColumnName.DiacriticsAndLigatures]: 'Çç'
  },
  {
    [ColumnName.UpperCase]: 'D',
    [ColumnName.LowerCase]: 'd',
    [ColumnName.Name]: 'dé',
    [ColumnName.NameIpa]: '/de/',
    [ColumnName.DiacriticsAndLigatures]: ''
  },
  {
    [ColumnName.UpperCase]: 'E',
    [ColumnName.LowerCase]: 'e',
    [ColumnName.Name]: 'e',
    [ColumnName.NameIpa]: '/ə/',
    [ColumnName.DiacriticsAndLigatures]: 'Éé, Èè, Êê, Ëë'
  },
  {
    [ColumnName.UpperCase]: 'F',
    [ColumnName.LowerCase]: 'f',
    [ColumnName.Name]: 'effe',
    [ColumnName.NameIpa]: '/ɛf/',
    [ColumnName.DiacriticsAndLigatures]: ''
  },
  {
    [ColumnName.UpperCase]: 'G',
    [ColumnName.LowerCase]: 'g',
    [ColumnName.Name]: 'gé',
    [ColumnName.NameIpa]: '/ʒe/',
    [ColumnName.DiacriticsAndLigatures]: ''
  },
  {
    [ColumnName.UpperCase]: 'H',
    [ColumnName.LowerCase]: 'h',
    [ColumnName.Name]: 'ache',
    [ColumnName.NameIpa]: '/aʃ/',
    [ColumnName.DiacriticsAndLigatures]: ''
  },
  {
    [ColumnName.UpperCase]: 'I',
    [ColumnName.LowerCase]: 'i',
    [ColumnName.Name]: 'i',
    [ColumnName.NameIpa]: '/i/',
    [ColumnName.DiacriticsAndLigatures]: 'Îî, Ïï'
  },
  {
    [ColumnName.UpperCase]: 'J',
    [ColumnName.LowerCase]: 'j',
    [ColumnName.Name]: 'ji',
    [ColumnName.NameIpa]: '/ʒi/',
    [ColumnName.DiacriticsAndLigatures]: ''
  },
  {
    [ColumnName.UpperCase]: 'K',
    [ColumnName.LowerCase]: 'k',
    [ColumnName.Name]: 'ka',
    [ColumnName.NameIpa]: '/ka/',
    [ColumnName.DiacriticsAndLigatures]: ''
  },
  {
    [ColumnName.UpperCase]: 'L',
    [ColumnName.LowerCase]: 'l',
    [ColumnName.Name]: 'elle',
    [ColumnName.NameIpa]: '/ɛl/',
    [ColumnName.DiacriticsAndLigatures]: ''
  },
  {
    [ColumnName.UpperCase]: 'M',
    [ColumnName.LowerCase]: 'm',
    [ColumnName.Name]: 'emme',
    [ColumnName.NameIpa]: '/ɛm/',
    [ColumnName.DiacriticsAndLigatures]: ''
  },
  {
    [ColumnName.UpperCase]: 'N',
    [ColumnName.LowerCase]: 'n',
    [ColumnName.Name]: 'enne',
    [ColumnName.NameIpa]: '/ɛn/',
    [ColumnName.DiacriticsAndLigatures]: ''
  },
  {
    [ColumnName.UpperCase]: 'O',
    [ColumnName.LowerCase]: 'o',
    [ColumnName.Name]: 'o',
    [ColumnName.NameIpa]: '/o/',
    [ColumnName.DiacriticsAndLigatures]: 'Ôô, Œœ'
  },
  {
    [ColumnName.UpperCase]: 'P',
    [ColumnName.LowerCase]: 'p',
    [ColumnName.Name]: 'pé',
    [ColumnName.NameIpa]: '/pe/',
    [ColumnName.DiacriticsAndLigatures]: ''
  },
  {
    [ColumnName.UpperCase]: 'Q',
    [ColumnName.LowerCase]: 'q',
    [ColumnName.Name]: 'qu',
    [ColumnName.NameIpa]: '/ky/',
    [ColumnName.DiacriticsAndLigatures]: ''
  },
  {
    [ColumnName.UpperCase]: 'R',
    [ColumnName.LowerCase]: 'r',
    [ColumnName.Name]: 'erre',
    [ColumnName.NameIpa]: '/ɛʁ/',
    [ColumnName.DiacriticsAndLigatures]: ''
  },
  {
    [ColumnName.UpperCase]: 'S',
    [ColumnName.LowerCase]: 's',
    [ColumnName.Name]: 'sesse',
    [ColumnName.NameIpa]: '/ɛs/',
    [ColumnName.DiacriticsAndLigatures]: ''
  },
  {
    [ColumnName.UpperCase]: 'T',
    [ColumnName.LowerCase]: 't',
    [ColumnName.Name]: 'té',
    [ColumnName.NameIpa]: '/te/',
    [ColumnName.DiacriticsAndLigatures]: ''
  },
  {
    [ColumnName.UpperCase]: 'U',
    [ColumnName.LowerCase]: 'u',
    [ColumnName.Name]: 'u',
    [ColumnName.NameIpa]: '/y/',
    [ColumnName.DiacriticsAndLigatures]: 'Ùù, Ûû, Üü'
  },
  {
    [ColumnName.UpperCase]: 'V',
    [ColumnName.LowerCase]: 'v',
    [ColumnName.Name]: 'vé',
    [ColumnName.NameIpa]: '/ve/',
    [ColumnName.DiacriticsAndLigatures]: ''
  },
  {
    [ColumnName.UpperCase]: 'W',
    [ColumnName.LowerCase]: 'w',
    [ColumnName.Name]: 'double vé',
    [ColumnName.NameIpa]: '/dubləve/',
    [ColumnName.DiacriticsAndLigatures]: ''
  },
  {
    [ColumnName.UpperCase]: 'X',
    [ColumnName.LowerCase]: 'x',
    [ColumnName.Name]: 'ixe',
    [ColumnName.NameIpa]: '/iks/',
    [ColumnName.DiacriticsAndLigatures]: ''
  },
  {
    [ColumnName.UpperCase]: 'Y',
    [ColumnName.LowerCase]: 'y',
    [ColumnName.Name]: 'i grec',
    [ColumnName.NameIpa]: '/iɡʁɛk/',
    [ColumnName.DiacriticsAndLigatures]: 'Ÿÿ'
  },
  {
    [ColumnName.UpperCase]: 'Z',
    [ColumnName.LowerCase]: 'z',
    [ColumnName.Name]: 'zède',
    [ColumnName.NameIpa]: '/zɛd/',
    [ColumnName.DiacriticsAndLigatures]: ''
  }
]

export const frenchTable = {columns, rows}