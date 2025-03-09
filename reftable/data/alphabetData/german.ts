import { IColumn, IRow } from '../../src/code/table/tableState'
import { Language } from './languages'

enum ColumnName {
  UpperCase = 'Upper Case',
  LowerCase = 'Lower Case',
  Name = 'Name',
  NameIpa = 'Name (IPA)'
}

const columns: IColumn[] = [
  { name: ColumnName.UpperCase, language: Language.English },
  { name: ColumnName.LowerCase, language: Language.English },
  { name: ColumnName.Name, language: Language.English }
]

const rows: IRow[] = [
  {
    [ColumnName.UpperCase]: 'A',
    [ColumnName.LowerCase]: 'a',
    [ColumnName.Name]: 'ah',
    [ColumnName.NameIpa]: '/aː/'
  },
  {
    [ColumnName.UpperCase]: 'B',
    [ColumnName.LowerCase]: 'b',
    [ColumnName.Name]: 'beh',
    [ColumnName.NameIpa]: '/beː/'
  },
  {
    [ColumnName.UpperCase]: 'C',
    [ColumnName.LowerCase]: 'c',
    [ColumnName.Name]: 'ceh, zeh',
    [ColumnName.NameIpa]: '/t͡seː/'
  },
  {
    [ColumnName.UpperCase]: 'D',
    [ColumnName.LowerCase]: 'd',
    [ColumnName.Name]: 'deh',
    [ColumnName.NameIpa]: '/deː/'
  },
  {
    [ColumnName.UpperCase]: 'E',
    [ColumnName.LowerCase]: 'e',
    [ColumnName.Name]: 'eh',
    [ColumnName.NameIpa]: '/eː/'
  },
  {
    [ColumnName.UpperCase]: 'F',
    [ColumnName.LowerCase]: 'f',
    [ColumnName.Name]: 'ef',
    [ColumnName.NameIpa]: '/ɛf/'
  },
  {
    [ColumnName.UpperCase]: 'G',
    [ColumnName.LowerCase]: 'g',
    [ColumnName.Name]: 'geh',
    [ColumnName.NameIpa]: '/ɡeː/'
  },
  {
    [ColumnName.UpperCase]: 'H',
    [ColumnName.LowerCase]: 'h',
    [ColumnName.Name]: 'hah',
    [ColumnName.NameIpa]: '/haː/'
  },
  {
    [ColumnName.UpperCase]: 'I',
    [ColumnName.LowerCase]: 'i',
    [ColumnName.Name]: 'ih',
    [ColumnName.NameIpa]: '/iː/'
  },
  {
    [ColumnName.UpperCase]: 'J',
    [ColumnName.LowerCase]: 'j',
    [ColumnName.Name]: 'jot, jeh',
    [ColumnName.NameIpa]: '/jɔt/, /jeː/'
  },
  {
    [ColumnName.UpperCase]: 'K',
    [ColumnName.LowerCase]: 'k',
    [ColumnName.Name]: 'kah',
    [ColumnName.NameIpa]: '/kaː/'
  },
  {
    [ColumnName.UpperCase]: 'L',
    [ColumnName.LowerCase]: 'l',
    [ColumnName.Name]: 'el',
    [ColumnName.NameIpa]: '/ɛl/'
  },
  {
    [ColumnName.UpperCase]: 'M',
    [ColumnName.LowerCase]: 'm',
    [ColumnName.Name]: 'em',
    [ColumnName.NameIpa]: '/ɛm/'
  },
  {
    [ColumnName.UpperCase]: 'N',
    [ColumnName.LowerCase]: 'n',
    [ColumnName.Name]: 'en',
    [ColumnName.NameIpa]: '/ɛn/'
  },
  {
    [ColumnName.UpperCase]: 'O',
    [ColumnName.LowerCase]: 'o',
    [ColumnName.Name]: 'oh',
    [ColumnName.NameIpa]: '/oː/'
  },
  {
    [ColumnName.UpperCase]: 'P',
    [ColumnName.LowerCase]: 'p',
    [ColumnName.Name]: 'peh',
    [ColumnName.NameIpa]: '/peː/'
  },
  {
    [ColumnName.UpperCase]: 'Q',
    [ColumnName.LowerCase]: 'q',
    [ColumnName.Name]: 'quh, queh',
    [ColumnName.NameIpa]: '/kuː/, /kveː/'
  },
  {
    [ColumnName.UpperCase]: 'R',
    [ColumnName.LowerCase]: 'r',
    [ColumnName.Name]: 'er',
    [ColumnName.NameIpa]: '/ɛʁ/'
  },
  {
    [ColumnName.UpperCase]: 'S',
    [ColumnName.LowerCase]: 's',
    [ColumnName.Name]: 'es',
    [ColumnName.NameIpa]: '/ɛs/'
  },
  {
    [ColumnName.UpperCase]: 'T',
    [ColumnName.LowerCase]: 't',
    [ColumnName.Name]: 'teh',
    [ColumnName.NameIpa]: '/teː/'
  },
  {
    [ColumnName.UpperCase]: 'U',
    [ColumnName.LowerCase]: 'u',
    [ColumnName.Name]: 'uh',
    [ColumnName.NameIpa]: '/uː/'
  },
  {
    [ColumnName.UpperCase]: 'V',
    [ColumnName.LowerCase]: 'v',
    [ColumnName.Name]: 'vau',
    [ColumnName.NameIpa]: '/faʊ̯/'
  },
  {
    [ColumnName.UpperCase]: 'W',
    [ColumnName.LowerCase]: 'w',
    [ColumnName.Name]: 'weh',
    [ColumnName.NameIpa]: '/veː/'
  },
  {
    [ColumnName.UpperCase]: 'X',
    [ColumnName.LowerCase]: 'x',
    [ColumnName.Name]: 'ix',
    [ColumnName.NameIpa]: '/ɪks/'
  },
  {
    [ColumnName.UpperCase]: 'Y',
    [ColumnName.LowerCase]: 'y',
    [ColumnName.Name]: 'ypsilon',
    [ColumnName.NameIpa]: '/ˈʏpsilɔn/, /ʏˈpsiːlɔn/'
  },
  {
    [ColumnName.UpperCase]: 'Z',
    [ColumnName.LowerCase]: 'z',
    [ColumnName.Name]: 'zett',
    [ColumnName.NameIpa]: '/t͡sɛt/'
  },
  {
    [ColumnName.UpperCase]: 'ẞ',
    [ColumnName.LowerCase]: 'ß',
    [ColumnName.Name]: 'eszett, sharfes s',
    [ColumnName.NameIpa]: '/ɛsˈt͡sɛt/, /ˈʃaʁfəs ɛs/'
  }
]

export const germanTable = { columns, rows }
