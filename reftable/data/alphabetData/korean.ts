import { IColumn, IRow } from '../../src/code/table/tableState'
import { Language } from './languages'

enum ConsonantColumnName {
  Consonant = 'Consonant',
  Transliteration = 'Transliteration',
  Name = 'Consonant Name',
  NameTransliteration = 'Consonant Name Transliteration'
}

const consonantColumns: IColumn[] = [
  { name: ConsonantColumnName.Consonant, language: Language.Korean },
  { name: ConsonantColumnName.Transliteration, language: Language.English },
  { name: ConsonantColumnName.Name, language: Language.Korean },
  { name: ConsonantColumnName.NameTransliteration, language: Language.English }
]

const consonantRows: IRow[] = [
  {
    [ConsonantColumnName.Consonant]: 'ㄱ',
    [ConsonantColumnName.Transliteration]: 'g/k',
    [ConsonantColumnName.Name]: '기역',
    [ConsonantColumnName.NameTransliteration]: 'giyeok'
  },
  {
    [ConsonantColumnName.Consonant]: 'ㄲ',
    [ConsonantColumnName.Transliteration]: 'kk/k',
    [ConsonantColumnName.Name]: '쌍기역',
    [ConsonantColumnName.NameTransliteration]: 'ssangiyeok'
  },
  {
    [ConsonantColumnName.Consonant]: 'ㄴ',
    [ConsonantColumnName.Transliteration]: 'n/n',
    [ConsonantColumnName.Name]: '니은',
    [ConsonantColumnName.NameTransliteration]: 'nieun'
  },
  {
    [ConsonantColumnName.Consonant]: 'ㄷ',
    [ConsonantColumnName.Transliteration]: 'd/t',
    [ConsonantColumnName.Name]: '디귿',
    [ConsonantColumnName.NameTransliteration]: 'digeut'
  },
  {
    [ConsonantColumnName.Consonant]: 'ㄸ',
    [ConsonantColumnName.Transliteration]: 'tt/-',
    [ConsonantColumnName.Name]: '쌍디귿',
    [ConsonantColumnName.NameTransliteration]: 'ssangdigeut'
  },
  {
    [ConsonantColumnName.Consonant]: 'ㄹ',
    [ConsonantColumnName.Transliteration]: 'r/l',
    [ConsonantColumnName.Name]: '리을',
    [ConsonantColumnName.NameTransliteration]: 'rieul'
  },
  {
    [ConsonantColumnName.Consonant]: 'ㅁ',
    [ConsonantColumnName.Transliteration]: 'm/m',
    [ConsonantColumnName.Name]: '미음',
    [ConsonantColumnName.NameTransliteration]: 'mieum'
  },
  {
    [ConsonantColumnName.Consonant]: 'ㅂ',
    [ConsonantColumnName.Transliteration]: 'b/p',
    [ConsonantColumnName.Name]: '비읍',
    [ConsonantColumnName.NameTransliteration]: 'bieup'
  },
  {
    [ConsonantColumnName.Consonant]: 'ㅃ',
    [ConsonantColumnName.Transliteration]: 'pp/-',
    [ConsonantColumnName.Name]: '쌍비읍',
    [ConsonantColumnName.NameTransliteration]: 'ssangbieup'
  },
  {
    [ConsonantColumnName.Consonant]: 'ㅅ',
    [ConsonantColumnName.Transliteration]: 's/t',
    [ConsonantColumnName.Name]: '시옷',
    [ConsonantColumnName.NameTransliteration]: 'siot'
  },
  {
    [ConsonantColumnName.Consonant]: 'ㅆ',
    [ConsonantColumnName.Transliteration]: 'ss/t',
    [ConsonantColumnName.Name]: '쌍시옷',
    [ConsonantColumnName.NameTransliteration]: 'ssangsiot'
  },
  {
    [ConsonantColumnName.Consonant]: 'ㅇ',
    [ConsonantColumnName.Transliteration]: '-/ng',
    [ConsonantColumnName.Name]: '이응',
    [ConsonantColumnName.NameTransliteration]: "'ieung"
  },
  {
    [ConsonantColumnName.Consonant]: 'ㅈ',
    [ConsonantColumnName.Transliteration]: 'j/t',
    [ConsonantColumnName.Name]: '지읒',
    [ConsonantColumnName.NameTransliteration]: 'jieut'
  },
  {
    [ConsonantColumnName.Consonant]: 'ㅉ',
    [ConsonantColumnName.Transliteration]: 'jj/-',
    [ConsonantColumnName.Name]: '쌍지읒',
    [ConsonantColumnName.NameTransliteration]: 'ssangjieut'
  },
  {
    [ConsonantColumnName.Consonant]: 'ㅊ',
    [ConsonantColumnName.Transliteration]: 'ch/t',
    [ConsonantColumnName.Name]: '치읓',
    [ConsonantColumnName.NameTransliteration]: 'chieut'
  },
  {
    [ConsonantColumnName.Consonant]: 'ㅋ',
    [ConsonantColumnName.Transliteration]: 'k/k',
    [ConsonantColumnName.Name]: '키읔',
    [ConsonantColumnName.NameTransliteration]: 'ḳieuk'
  },
  {
    [ConsonantColumnName.Consonant]: 'ㅌ',
    [ConsonantColumnName.Transliteration]: 't/t',
    [ConsonantColumnName.Name]: '티읕',
    [ConsonantColumnName.NameTransliteration]: 'ṭieut'
  },
  {
    [ConsonantColumnName.Consonant]: 'ㅍ',
    [ConsonantColumnName.Transliteration]: 'p/p',
    [ConsonantColumnName.Name]: '피읖',
    [ConsonantColumnName.NameTransliteration]: 'p̣ieup'
  },
  {
    [ConsonantColumnName.Consonant]: 'ㅎ',
    [ConsonantColumnName.Transliteration]: 'h/t',
    [ConsonantColumnName.Name]: '히읗',
    [ConsonantColumnName.NameTransliteration]: 'hieut'
  }
]

enum VowelColumnName {
  Vowel = 'Vowel',
  Transliteration = 'Transliteration',
  Pronunciation = 'Pronunciation'
}

const vowelColumns: IColumn[] = [
  { name: VowelColumnName.Vowel, language: Language.Korean },
  { name: VowelColumnName.Transliteration, language: Language.English },
  { name: VowelColumnName.Pronunciation, language: Language.English }
]

const vowelRows: IRow[] = [
  {
    [VowelColumnName.Vowel]: 'ㅏ',
    [VowelColumnName.Transliteration]: 'a',
    [VowelColumnName.Pronunciation]: 'f{a}ther'
  },
  {
    [VowelColumnName.Vowel]: 'ㅐ',
    [VowelColumnName.Transliteration]: 'ae',
    [VowelColumnName.Pronunciation]: 'f{a}ce'
  },
  {
    [VowelColumnName.Vowel]: 'ㅑ',
    [VowelColumnName.Transliteration]: 'ya',
    [VowelColumnName.Pronunciation]: '{ya}rd'
  },
  {
    [VowelColumnName.Vowel]: 'ㅒ',
    [VowelColumnName.Transliteration]: 'yae',
    [VowelColumnName.Pronunciation]: '{yay}'
  },
  {
    [VowelColumnName.Vowel]: 'ㅓ',
    [VowelColumnName.Transliteration]: 'eo',
    [VowelColumnName.Pronunciation]: 'd{o}g'
  },
  {
    [VowelColumnName.Vowel]: 'ㅔ',
    [VowelColumnName.Transliteration]: 'e',
    [VowelColumnName.Pronunciation]: 'f{a}ce'
  },
  {
    [VowelColumnName.Vowel]: 'ㅕ',
    [VowelColumnName.Transliteration]: 'yeo',
    [VowelColumnName.Pronunciation]: '{you}ng'
  },
  {
    [VowelColumnName.Vowel]: 'ㅖ',
    [VowelColumnName.Transliteration]: 'ye',
    [VowelColumnName.Pronunciation]: '{yay}'
  },
  {
    [VowelColumnName.Vowel]: 'ㅗ',
    [VowelColumnName.Transliteration]: 'o',
    [VowelColumnName.Pronunciation]: 'h{o}me'
  },
  {
    [VowelColumnName.Vowel]: 'ㅘ',
    [VowelColumnName.Transliteration]: 'wa',
    [VowelColumnName.Pronunciation]: '{wa}ter'
  },
  {
    [VowelColumnName.Vowel]: 'ㅙ',
    [VowelColumnName.Transliteration]: 'wae',
    [VowelColumnName.Pronunciation]: '{we}t'
  },
  {
    [VowelColumnName.Vowel]: 'ㅚ',
    [VowelColumnName.Transliteration]: 'oe',
    [VowelColumnName.Pronunciation]: '{we}t'
  },
  {
    [VowelColumnName.Vowel]: 'ㅛ',
    [VowelColumnName.Transliteration]: 'yo',
    [VowelColumnName.Pronunciation]: '{yo}'
  },
  {
    [VowelColumnName.Vowel]: 'ㅜ',
    [VowelColumnName.Transliteration]: 'u',
    [VowelColumnName.Pronunciation]: 'm{oo}n'
  },
  {
    [VowelColumnName.Vowel]: 'ㅝ',
    [VowelColumnName.Transliteration]: 'wo',
    [VowelColumnName.Pronunciation]: '{wo}nder'
  },
  {
    [VowelColumnName.Vowel]: 'ㅞ',
    [VowelColumnName.Transliteration]: 'we',
    [VowelColumnName.Pronunciation]: '{we}t'
  },
  {
    [VowelColumnName.Vowel]: 'ㅟ',
    [VowelColumnName.Transliteration]: 'wi',
    [VowelColumnName.Pronunciation]: '{wee}d'
  },
  {
    [VowelColumnName.Vowel]: 'ㅠ',
    [VowelColumnName.Transliteration]: 'yu',
    [VowelColumnName.Pronunciation]: '{you}'
  },
  {
    [VowelColumnName.Vowel]: 'ㅡ',
    [VowelColumnName.Transliteration]: 'eu',
    [VowelColumnName.Pronunciation]: 'g{oo}d'
  },
  {
    [VowelColumnName.Vowel]: 'ㅢ',
    [VowelColumnName.Transliteration]: 'ui',
    [VowelColumnName.Pronunciation]: 'g{ooey}'
  },
  {
    [VowelColumnName.Vowel]: 'ㅣ',
    [VowelColumnName.Transliteration]: 'i',
    [VowelColumnName.Pronunciation]: 's{ee}'
  }
]

export const koreanConsonantsTable = {
  columns: consonantColumns,
  rows: consonantRows
}

export const koreanVowelsTable = {
  columns: vowelColumns,
  rows: vowelRows
}
