import { IColumn, IRow } from '../../src/code/table/tableState'
import { Language } from './languages'

enum ColumnName {
  Letter = 'Letter',
  Name = 'Name',
  Transliteration = 'Transliteration',
  Pronunciation = 'Pronunciation'
}

const consonantColumns: IColumn[] = [
  { name: ColumnName.Letter, language: Language.Hebrew },
  { name: ColumnName.Name, language: Language.English },
  { name: ColumnName.Transliteration, language: Language.English },
  { name: ColumnName.Pronunciation, language: Language.English }
]

const consonantRows: IRow[] = [
  {
    [ColumnName.Name]: 'Alef',
    [ColumnName.Letter]: 'א',
    [ColumnName.Transliteration]: "'",
    [ColumnName.Pronunciation]: 'unpronounced glottal stop'
  },
  {
    [ColumnName.Name]: 'Bet',
    [ColumnName.Letter]: 'ב',
    [ColumnName.Transliteration]: 'b, v',
    [ColumnName.Pronunciation]: '{b}ig'
  },
  {
    [ColumnName.Name]: 'Gimel',
    [ColumnName.Letter]: 'ג',
    [ColumnName.Transliteration]: 'g',
    [ColumnName.Pronunciation]: '{g}old'
  },
  {
    [ColumnName.Name]: 'Dalet',
    [ColumnName.Letter]: 'ד',
    [ColumnName.Transliteration]: 'd',
    [ColumnName.Pronunciation]: '{d}own'
  },
  {
    [ColumnName.Name]: 'He',
    [ColumnName.Letter]: 'ה',
    [ColumnName.Transliteration]: 'h',
    [ColumnName.Pronunciation]: '{h}ello'
  },
  {
    [ColumnName.Name]: 'Vav',
    [ColumnName.Letter]: 'ו',
    [ColumnName.Transliteration]: 'v',
    [ColumnName.Pronunciation]: 'ali{v}e'
  },
  {
    [ColumnName.Name]: 'Zayin',
    [ColumnName.Letter]: 'ז',
    [ColumnName.Transliteration]: 'z',
    [ColumnName.Pronunciation]: '{z}ebra'
  },
  {
    [ColumnName.Name]: 'Chet',
    [ColumnName.Letter]: 'ח',
    [ColumnName.Transliteration]: 'ch',
    [ColumnName.Pronunciation]: '{c}aught, Scottish: lo{ch}'
  },
  {
    [ColumnName.Name]: 'Tet',
    [ColumnName.Letter]: 'ט',
    [ColumnName.Transliteration]: 't',
    [ColumnName.Pronunciation]: '{t}all'
  },
  {
    [ColumnName.Name]: 'Yod',
    [ColumnName.Letter]: 'י',
    [ColumnName.Transliteration]: 'y',
    [ColumnName.Pronunciation]: '{y}ellow'
  },
  {
    [ColumnName.Name]: 'Kaf',
    [ColumnName.Letter]: 'כ ,ך',
    [ColumnName.Transliteration]: 'k, kh',
    [ColumnName.Pronunciation]: '{k}ey, {c}aught'
  },
  {
    [ColumnName.Name]: 'Lamed',
    [ColumnName.Letter]: 'ל',
    [ColumnName.Transliteration]: 'l',
    [ColumnName.Pronunciation]: '{l}ong'
  },
  {
    [ColumnName.Name]: 'Mem',
    [ColumnName.Letter]: 'ם ,מ',
    [ColumnName.Transliteration]: 'm',
    [ColumnName.Pronunciation]: '{m}other'
  },
  {
    [ColumnName.Name]: 'Nun',
    [ColumnName.Letter]: 'ן ,נ',
    [ColumnName.Transliteration]: 'n',
    [ColumnName.Pronunciation]: '{n}ot'
  },
  {
    [ColumnName.Name]: 'Samech',
    [ColumnName.Letter]: 'ס',
    [ColumnName.Transliteration]: 's',
    [ColumnName.Pronunciation]: '{s}ight'
  },
  {
    [ColumnName.Name]: 'Ayin',
    [ColumnName.Letter]: 'ע',
    [ColumnName.Transliteration]: "'",
    [ColumnName.Pronunciation]: 'unpronounced glottal stop'
  },
  {
    [ColumnName.Name]: 'Pay',
    [ColumnName.Letter]: 'ף ,פ',
    [ColumnName.Transliteration]: 'p, ph',
    [ColumnName.Pronunciation]: '{p}lace, {f}ace, {ph}one'
  },
  {
    [ColumnName.Name]: 'Tsade',
    [ColumnName.Letter]: 'ץ ,צ',
    [ColumnName.Transliteration]: 'ts, tz',
    [ColumnName.Pronunciation]: 'lo{ts}, {ts}ar'
  },
  {
    [ColumnName.Name]: 'Qof',
    [ColumnName.Letter]: 'ק',
    [ColumnName.Transliteration]: 'q',
    [ColumnName.Pronunciation]: '{q}uit'
  },
  {
    [ColumnName.Name]: 'Resh',
    [ColumnName.Letter]: 'ר',
    [ColumnName.Transliteration]: 'r',
    [ColumnName.Pronunciation]: '{r}un'
  },
  {
    [ColumnName.Name]: 'Shin',
    [ColumnName.Letter]: 'ש',
    [ColumnName.Transliteration]: 's, sh',
    [ColumnName.Pronunciation]: '{s}un, {sh}oe'
  },
  {
    [ColumnName.Name]: 'Tav',
    [ColumnName.Letter]: 'ת',
    [ColumnName.Transliteration]: 't',
    [ColumnName.Pronunciation]: '{t}all'
  }
]

enum VowelColumnName {
  Sign = 'Sign',
  Name = 'Name',
  Transliteration = 'Transliteration',
  Pronunciation = 'Pronunciation'
}

const vowelColumns: IColumn[] = [
  { name: VowelColumnName.Sign, language: Language.Hebrew },
  { name: VowelColumnName.Name, language: Language.English },
  { name: VowelColumnName.Transliteration, language: Language.English },
  { name: VowelColumnName.Pronunciation, language: Language.English }
]

const aleph = '&#x05D0'
const vowelRows: IRow[] = [
  {
    [VowelColumnName.Sign]: `${aleph}&#x05B7;`,
    [VowelColumnName.Name]: 'patah',
    [VowelColumnName.Transliteration]: 'a',
    [VowelColumnName.Pronunciation]: 'f{a}ther'
  },
  {
    [VowelColumnName.Sign]: `${aleph}&#x05B2;`,
    [VowelColumnName.Name]: 'hatef patah',
    [VowelColumnName.Transliteration]: 'a',
    [VowelColumnName.Pronunciation]: 'f{a}ther'
  },
  {
    [VowelColumnName.Sign]: `${aleph}&#x05B8;`,
    [VowelColumnName.Name]: 'qametz gadol',
    [VowelColumnName.Transliteration]: 'a',
    [VowelColumnName.Pronunciation]: 'f{a}ther'
  },
  {
    [VowelColumnName.Sign]: `${aleph}&#x05B6;`,
    [VowelColumnName.Name]: 'segol',
    [VowelColumnName.Transliteration]: 'e',
    [VowelColumnName.Pronunciation]: 'p{e}t'
  },
  {
    [VowelColumnName.Sign]: `${aleph}&#x05B1;`,
    [VowelColumnName.Name]: 'hatef segol',
    [VowelColumnName.Transliteration]: 'e',
    [VowelColumnName.Pronunciation]: 'p{e}t'
  },
  {
    [VowelColumnName.Sign]: `${aleph}&#x05B5;`,
    [VowelColumnName.Name]: 'tzere haser',
    [VowelColumnName.Transliteration]: 'e',
    [VowelColumnName.Pronunciation]: 'p{e}t'
  },
  {
    [VowelColumnName.Sign]: `${aleph}&#x05B1;&#1497;`,
    [VowelColumnName.Name]: 'tzere male',
    [VowelColumnName.Transliteration]: 'e',
    [VowelColumnName.Pronunciation]: 'th{e}y'
  },
  {
    [VowelColumnName.Sign]: `${aleph}&#x05B0;`,
    [VowelColumnName.Name]: 'shewa na',
    [VowelColumnName.Transliteration]: 'e',
    [VowelColumnName.Pronunciation]: 'silent'
  },
  {
    [VowelColumnName.Sign]: `${aleph}&#x05B4;`,
    [VowelColumnName.Name]: 'hireq haser',
    [VowelColumnName.Transliteration]: 'i',
    [VowelColumnName.Pronunciation]: 'f{ee}t'
  },
  {
    [VowelColumnName.Sign]: `${aleph}&#x05B4;&#1497;`,
    [VowelColumnName.Name]: 'hireq male',
    [VowelColumnName.Transliteration]: 'i',
    [VowelColumnName.Pronunciation]: 'f{ee}t'
  },
  {
    [VowelColumnName.Sign]: `${aleph}&#x05B3;`,
    [VowelColumnName.Name]: 'hatef qametz',
    [VowelColumnName.Transliteration]: 'o',
    [VowelColumnName.Pronunciation]: 'c{o}rd'
  },
  {
    [VowelColumnName.Sign]: `${aleph}&#x05C7;`,
    [VowelColumnName.Name]: 'qametz qatan',
    [VowelColumnName.Transliteration]: 'o',
    [VowelColumnName.Pronunciation]: 'c{o}rd'
  },
  {
    [VowelColumnName.Sign]: `${aleph}&#x05B9;`,
    [VowelColumnName.Name]: 'holem haser',
    [VowelColumnName.Transliteration]: 'o',
    [VowelColumnName.Pronunciation]: 'c{o}rd'
  },
  {
    [VowelColumnName.Sign]: `&#x05D5;&#x05B9;`,
    [VowelColumnName.Name]: 'holem male',
    [VowelColumnName.Transliteration]: 'o',
    [VowelColumnName.Pronunciation]: 'c{o}rd'
  },
  {
    [VowelColumnName.Sign]: `&#x05D5;&#x05BC;`,
    [VowelColumnName.Name]: 'shureq',
    [VowelColumnName.Transliteration]: 'u',
    [VowelColumnName.Pronunciation]: 's{oo}n'
  },
  {
    [VowelColumnName.Sign]: `${aleph}&#x05BB;`,
    [VowelColumnName.Name]: 'qubbutz',
    [VowelColumnName.Transliteration]: 'u',
    [VowelColumnName.Pronunciation]: 's{oo}n'
  }
]

export const hebrewConsonantsTable = {
  columns: consonantColumns,
  rows: consonantRows
}

export const hebrewVowelsTable = {
  columns: vowelColumns,
  rows: vowelRows
}
