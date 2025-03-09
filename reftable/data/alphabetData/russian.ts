import { Language } from './languages'
import { IColumn, IRow } from '../../src/code/table/tableState'

enum ColumnName {
  UpperCaseLetter = 'Upper Case Letter',
  LowerCaseLetter = 'Lower Case Letter',
  Transliteration = 'Transliterastion',
  Pronunciation = 'Pronunciation'
}

const columns: IColumn[] = [
  { name: ColumnName.UpperCaseLetter, language: Language.Russian },
  { name: ColumnName.LowerCaseLetter, language: Language.Russian },
  { name: ColumnName.Transliteration, language: Language.English },
  { name: ColumnName.Pronunciation, language: Language.English }
]

const rows: IRow[] = [
  {
    [ColumnName.UpperCaseLetter]: 'А',
    [ColumnName.LowerCaseLetter]: 'а',
    [ColumnName.Transliteration]: 'a',
    [ColumnName.Pronunciation]: 'f{a}ther'
  },
  {
    [ColumnName.UpperCaseLetter]: 'Б',
    [ColumnName.LowerCaseLetter]: 'б',
    [ColumnName.Transliteration]: 'b',
    [ColumnName.Pronunciation]: '{b}ad'
  },
  {
    [ColumnName.UpperCaseLetter]: 'В',
    [ColumnName.LowerCaseLetter]: 'в',
    [ColumnName.Transliteration]: 'v',
    [ColumnName.Pronunciation]: '{v}ine'
  },
  {
    [ColumnName.UpperCaseLetter]: 'Г',
    [ColumnName.LowerCaseLetter]: 'г',
    [ColumnName.Transliteration]: 'g',
    [ColumnName.Pronunciation]: '{g}o'
  },
  {
    [ColumnName.UpperCaseLetter]: 'Д',
    [ColumnName.LowerCaseLetter]: 'д',
    [ColumnName.Transliteration]: 'd',
    [ColumnName.Pronunciation]: '{d}o'
  },
  {
    [ColumnName.UpperCaseLetter]: 'Е',
    [ColumnName.LowerCaseLetter]: 'е',
    [ColumnName.Transliteration]: 'e, ye',
    [ColumnName.Pronunciation]: '{ye}s'
  },
  {
    [ColumnName.UpperCaseLetter]: 'Ё',
    [ColumnName.LowerCaseLetter]: 'ё',
    [ColumnName.Transliteration]: 'yo, jo',
    [ColumnName.Pronunciation]: '{yo}ur'
  },
  {
    [ColumnName.UpperCaseLetter]: 'Ж',
    [ColumnName.LowerCaseLetter]: 'ж',
    [ColumnName.Transliteration]: 'zh',
    [ColumnName.Pronunciation]: 'plea{s}ure'
  },
  {
    [ColumnName.UpperCaseLetter]: 'З',
    [ColumnName.LowerCaseLetter]: 'з',
    [ColumnName.Transliteration]: 'z',
    [ColumnName.Pronunciation]: '{z}oo'
  },
  {
    [ColumnName.UpperCaseLetter]: 'И',
    [ColumnName.LowerCaseLetter]: 'и',
    [ColumnName.Transliteration]: 'i',
    [ColumnName.Pronunciation]: 'pol{i}ce'
  },
  {
    [ColumnName.UpperCaseLetter]: 'Й',
    [ColumnName.LowerCaseLetter]: 'й',
    [ColumnName.Transliteration]: 'y, i, j',
    [ColumnName.Pronunciation]: 'to{y}'
  },
  {
    [ColumnName.UpperCaseLetter]: 'К',
    [ColumnName.LowerCaseLetter]: 'к',
    [ColumnName.Transliteration]: 'k',
    [ColumnName.Pronunciation]: '{k}ept'
  },
  {
    [ColumnName.UpperCaseLetter]: 'Л',
    [ColumnName.LowerCaseLetter]: 'л',
    [ColumnName.Transliteration]: 'l',
    [ColumnName.Pronunciation]: '{l}amp'
  },
  {
    [ColumnName.UpperCaseLetter]: 'М',
    [ColumnName.LowerCaseLetter]: 'м',
    [ColumnName.Transliteration]: 'm',
    [ColumnName.Pronunciation]: '{m}ap'
  },
  {
    [ColumnName.UpperCaseLetter]: 'Н',
    [ColumnName.LowerCaseLetter]: 'н',
    [ColumnName.Transliteration]: 'n',
    [ColumnName.Pronunciation]: '{n}ot'
  },
  {
    [ColumnName.UpperCaseLetter]: 'О',
    [ColumnName.LowerCaseLetter]: 'о',
    [ColumnName.Transliteration]: 'o',
    [ColumnName.Pronunciation]: 'm{o}re'
  },
  {
    [ColumnName.UpperCaseLetter]: 'П',
    [ColumnName.LowerCaseLetter]: 'п',
    [ColumnName.Transliteration]: 'p',
    [ColumnName.Pronunciation]: '{p}et'
  },
  {
    [ColumnName.UpperCaseLetter]: 'Р',
    [ColumnName.LowerCaseLetter]: 'р',
    [ColumnName.Transliteration]: 'r',
    [ColumnName.Pronunciation]: 'rolled {r}'
  },
  {
    [ColumnName.UpperCaseLetter]: 'С',
    [ColumnName.LowerCaseLetter]: 'с',
    [ColumnName.Transliteration]: 's',
    [ColumnName.Pronunciation]: '{s}et'
  },
  {
    [ColumnName.UpperCaseLetter]: 'Т',
    [ColumnName.LowerCaseLetter]: 'т',
    [ColumnName.Transliteration]: 't',
    [ColumnName.Pronunciation]: '{t}op'
  },
  {
    [ColumnName.UpperCaseLetter]: 'У',
    [ColumnName.LowerCaseLetter]: 'у',
    [ColumnName.Transliteration]: 'u',
    [ColumnName.Pronunciation]: 't{oo}l'
  },
  {
    [ColumnName.UpperCaseLetter]: 'Ф',
    [ColumnName.LowerCaseLetter]: 'ф',
    [ColumnName.Transliteration]: 'f',
    [ColumnName.Pronunciation]: '{f}ace'
  },
  {
    [ColumnName.UpperCaseLetter]: 'Х',
    [ColumnName.LowerCaseLetter]: 'х',
    [ColumnName.Transliteration]: 'kh, h, x',
    [ColumnName.Pronunciation]: 'lo{ch}'
  },
  {
    [ColumnName.UpperCaseLetter]: 'Ц',
    [ColumnName.LowerCaseLetter]: 'ц',
    [ColumnName.Transliteration]: 'ts, c',
    [ColumnName.Pronunciation]: 'si{ts}'
  },
  {
    [ColumnName.UpperCaseLetter]: 'Ч',
    [ColumnName.LowerCaseLetter]: 'ч',
    [ColumnName.Transliteration]: 'ch',
    [ColumnName.Pronunciation]: '{ch}at'
  },
  {
    [ColumnName.UpperCaseLetter]: 'Ш',
    [ColumnName.LowerCaseLetter]: 'ш',
    [ColumnName.Transliteration]: 'sh',
    [ColumnName.Pronunciation]: '{sh}arp'
  },
  {
    [ColumnName.UpperCaseLetter]: 'Щ',
    [ColumnName.LowerCaseLetter]: 'щ',
    [ColumnName.Transliteration]: 'shch',
    [ColumnName.Pronunciation]: '{sh}eer, pu{shch}air'
  },
  {
    [ColumnName.UpperCaseLetter]: 'Ъ',
    [ColumnName.LowerCaseLetter]: 'ъ',
    [ColumnName.Transliteration]: '',
    [ColumnName.Pronunciation]: 'silent, prevents palatalization'
  },
  {
    [ColumnName.UpperCaseLetter]: 'Ы',
    [ColumnName.LowerCaseLetter]: 'ы',
    [ColumnName.Transliteration]: 'y',
    [ColumnName.Pronunciation]: 'ros{e}s, h{i}t'
  },
  {
    [ColumnName.UpperCaseLetter]: 'Ь',
    [ColumnName.LowerCaseLetter]: 'ь',
    [ColumnName.Transliteration]: '',
    [ColumnName.Pronunciation]: 'silent, palatalizes'
  },
  {
    [ColumnName.UpperCaseLetter]: 'Э',
    [ColumnName.LowerCaseLetter]: 'э',
    [ColumnName.Transliteration]: 'e',
    [ColumnName.Pronunciation]: 'm{e}t'
  },
  {
    [ColumnName.UpperCaseLetter]: 'Ю',
    [ColumnName.LowerCaseLetter]: 'ю',
    [ColumnName.Transliteration]: 'yu, ju',
    [ColumnName.Pronunciation]: '{u}se'
  },
  {
    [ColumnName.UpperCaseLetter]: 'Я',
    [ColumnName.LowerCaseLetter]: 'я',
    [ColumnName.Transliteration]: 'ya, ja',
    [ColumnName.Pronunciation]: '{ya}rd'
  }
]

export const russianTable = { columns, rows }
