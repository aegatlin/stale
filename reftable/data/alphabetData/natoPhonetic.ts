import { IColumn, IRow } from '../../src/code/table/tableState'
import { Language } from './languages'

enum ColumnName {
  Name = 'Name',
  Letter = 'Letter',
  Pronunciation = 'ICAO 2008 Pronunciation'
}

const columns: IColumn[] = [
  { name: ColumnName.Letter, language: Language.English },
  { name: ColumnName.Name, language: Language.English },
  { name: ColumnName.Pronunciation, language: Language.English }
]

const rows: IRow[] = [
  {
    [ColumnName.Letter]: 'A',
    [ColumnName.Name]: 'Alfa',
    [ColumnName.Pronunciation]: '{AL} FAH'
  },
  {
    [ColumnName.Letter]: 'B',
    [ColumnName.Name]: 'Bravo',
    [ColumnName.Pronunciation]: '{BRAH} VOH'
  },
  {
    [ColumnName.Letter]: 'C',
    [ColumnName.Name]: 'Charlie',
    [ColumnName.Pronunciation]: '{CHAR} LEE or {SHAR} LEE'
  },
  {
    [ColumnName.Letter]: 'D',
    [ColumnName.Name]: 'Delta',
    [ColumnName.Pronunciation]: '{DELL} TAH'
  },
  {
    [ColumnName.Letter]: 'E',
    [ColumnName.Name]: 'Echo',
    [ColumnName.Pronunciation]: '{ECK} OH'
  },
  {
    [ColumnName.Letter]: 'F',
    [ColumnName.Name]: 'Foxtrot',
    [ColumnName.Pronunciation]: '{FOKS} TROT'
  },
  {
    [ColumnName.Letter]: 'G',
    [ColumnName.Name]: 'Golf',
    [ColumnName.Pronunciation]: 'GOLF'
  },
  {
    [ColumnName.Letter]: 'H',
    [ColumnName.Name]: 'Hotel',
    [ColumnName.Pronunciation]: 'HO {TELL}'
  },
  {
    [ColumnName.Letter]: 'I',
    [ColumnName.Name]: 'India',
    [ColumnName.Pronunciation]: '{IN} DEE AH'
  },
  {
    [ColumnName.Letter]: 'J',
    [ColumnName.Name]: 'Juliett',
    [ColumnName.Pronunciation]: '{JEW} LEE {ETT}'
  },
  {
    [ColumnName.Letter]: 'K',
    [ColumnName.Name]: 'Kilo',
    [ColumnName.Pronunciation]: '{KEY} LOH'
  },
  {
    [ColumnName.Letter]: 'L',
    [ColumnName.Name]: 'Lima',
    [ColumnName.Pronunciation]: '{LEE} MAH'
  },
  {
    [ColumnName.Letter]: 'M',
    [ColumnName.Name]: 'Mike',
    [ColumnName.Pronunciation]: 'MIKE'
  },
  {
    [ColumnName.Letter]: 'N',
    [ColumnName.Name]: 'November',
    [ColumnName.Pronunciation]: 'NO {VEM} BER'
  },
  {
    [ColumnName.Letter]: 'O',
    [ColumnName.Name]: 'Oscar',
    [ColumnName.Pronunciation]: '{OSS} CAH'
  },
  {
    [ColumnName.Letter]: 'P',
    [ColumnName.Name]: 'Papa',
    [ColumnName.Pronunciation]: 'PAH {PAH}'
  },
  {
    [ColumnName.Letter]: 'Q',
    [ColumnName.Name]: 'Quebec',
    [ColumnName.Pronunciation]: 'KEH {BECK}'
  },
  {
    [ColumnName.Letter]: 'R',
    [ColumnName.Name]: 'Romeo',
    [ColumnName.Pronunciation]: '{ROW} ME OH'
  },
  {
    [ColumnName.Letter]: 'S',
    [ColumnName.Name]: 'Sierra',
    [ColumnName.Pronunciation]: 'SEE {AIR} RAH'
  },
  {
    [ColumnName.Letter]: 'T',
    [ColumnName.Name]: 'Tango',
    [ColumnName.Pronunciation]: '{TANG} GO'
  },
  {
    [ColumnName.Letter]: 'U',
    [ColumnName.Name]: 'Uniform',
    [ColumnName.Pronunciation]: '{YOU} NEE FORM or {OO} NEE FORM'
  },
  {
    [ColumnName.Letter]: 'V',
    [ColumnName.Name]: 'Victor',
    [ColumnName.Pronunciation]: '{VIK} TAH'
  },
  {
    [ColumnName.Letter]: 'W',
    [ColumnName.Name]: 'Whiskey',
    [ColumnName.Pronunciation]: '{WISS} KEY'
  },
  {
    [ColumnName.Letter]: 'X',
    [ColumnName.Name]: 'X-ray',
    [ColumnName.Pronunciation]: '{ECKS} RAY'
  },
  {
    [ColumnName.Letter]: 'Y',
    [ColumnName.Name]: 'Yankee',
    [ColumnName.Pronunciation]: '{YANG} KEY'
  },
  {
    [ColumnName.Letter]: 'Z',
    [ColumnName.Name]: 'Zulu',
    [ColumnName.Pronunciation]: '{ZOO} LOO'
  }
]

export const natoPhoneticTable = { columns, rows }
