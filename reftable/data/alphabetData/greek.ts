import { IColumn, IRow } from '../../src/code/table/tableState'
import { Language } from './languages'

enum ColumnName {
  Name = 'Name',
  UpperCase = 'Upper Case',
  LowerCase = 'Lower Case',
  Transliteration = 'Transliteration',
  Pronunciation = 'Pronunciation'
}

const columns: IColumn[] = [
  { name: ColumnName.Name, language: Language.English },
  { name: ColumnName.UpperCase, language: Language.Greek },
  { name: ColumnName.LowerCase, language: Language.Greek },
  { name: ColumnName.Transliteration, language: Language.English },
  { name: ColumnName.Pronunciation, language: Language.English }
]

const rows: IRow[] = [
  {
    [ColumnName.UpperCase]: 'Α',
    [ColumnName.LowerCase]: 'α',
    [ColumnName.Name]: 'alpha',
    [ColumnName.Transliteration]: 'a',
    [ColumnName.Pronunciation]: 'f{a}ther'
  },
  {
    [ColumnName.UpperCase]: 'Β',
    [ColumnName.LowerCase]: 'β',
    [ColumnName.Name]: 'beta',
    [ColumnName.Transliteration]: 'b',
    [ColumnName.Pronunciation]: '{v}ote'
  },
  {
    [ColumnName.UpperCase]: 'Γ',
    [ColumnName.LowerCase]: 'γ',
    [ColumnName.Name]: 'gamma',
    [ColumnName.Transliteration]: 'g',
    [ColumnName.Pronunciation]: '{y}ellow'
  },
  {
    [ColumnName.UpperCase]: 'Δ',
    [ColumnName.LowerCase]: 'δ',
    [ColumnName.Name]: 'delta',
    [ColumnName.Transliteration]: 'd',
    [ColumnName.Pronunciation]: '{th}en'
  },
  {
    [ColumnName.UpperCase]: 'Ε',
    [ColumnName.LowerCase]: 'ε',
    [ColumnName.Name]: 'epsilon',
    [ColumnName.Transliteration]: 'e',
    [ColumnName.Pronunciation]: 'p{e}t'
  },
  {
    [ColumnName.UpperCase]: 'Ζ',
    [ColumnName.LowerCase]: 'ζ',
    [ColumnName.Name]: 'zeta',
    [ColumnName.Transliteration]: 'z',
    [ColumnName.Pronunciation]: '{z}oo'
  },
  {
    [ColumnName.UpperCase]: 'Η',
    [ColumnName.LowerCase]: 'η',
    [ColumnName.Name]: 'eta',
    [ColumnName.Transliteration]: 'ē',
    [ColumnName.Pronunciation]: 'mach{i}ne'
  },
  {
    [ColumnName.UpperCase]: 'Θ',
    [ColumnName.LowerCase]: 'θ',
    [ColumnName.Name]: 'theta',
    [ColumnName.Transliteration]: 'th',
    [ColumnName.Pronunciation]: '{th}in'
  },
  {
    [ColumnName.UpperCase]: 'Ι',
    [ColumnName.LowerCase]: 'ι',
    [ColumnName.Name]: 'iota',
    [ColumnName.Transliteration]: 'i',
    [ColumnName.Pronunciation]: 'mach{i}ne'
  },
  {
    [ColumnName.UpperCase]: 'Κ',
    [ColumnName.LowerCase]: 'κ',
    [ColumnName.Name]: 'kappa',
    [ColumnName.Transliteration]: 'k',
    [ColumnName.Pronunciation]: 'ma{k}e'
  },
  {
    [ColumnName.UpperCase]: 'Λ',
    [ColumnName.LowerCase]: 'λ',
    [ColumnName.Name]: 'lambda',
    [ColumnName.Transliteration]: 'l',
    [ColumnName.Pronunciation]: '{l}antern'
  },
  {
    [ColumnName.UpperCase]: 'Μ',
    [ColumnName.LowerCase]: 'μ',
    [ColumnName.Name]: 'mu (moo)',
    [ColumnName.Transliteration]: 'm',
    [ColumnName.Pronunciation]: '{m}usic'
  },
  {
    [ColumnName.UpperCase]: 'Ν',
    [ColumnName.LowerCase]: 'ν',
    [ColumnName.Name]: 'nu (noo)',
    [ColumnName.Transliteration]: 'n',
    [ColumnName.Pronunciation]: '{n}et'
  },
  {
    [ColumnName.UpperCase]: 'Ξ',
    [ColumnName.LowerCase]: 'ξ',
    [ColumnName.Name]: 'xi (ksee)',
    [ColumnName.Transliteration]: 'x',
    [ColumnName.Pronunciation]: 'fo{x}'
  },
  {
    [ColumnName.UpperCase]: 'Ο',
    [ColumnName.LowerCase]: 'ο',
    [ColumnName.Name]: 'omicron',
    [ColumnName.Transliteration]: 'o',
    [ColumnName.Pronunciation]: 's{o}ft'
  },
  {
    [ColumnName.UpperCase]: 'Π',
    [ColumnName.LowerCase]: 'π',
    [ColumnName.Name]: 'pi (pee)',
    [ColumnName.Transliteration]: 'p',
    [ColumnName.Pronunciation]: 'to{p}'
  },
  {
    [ColumnName.UpperCase]: 'Ρ',
    [ColumnName.LowerCase]: 'ρ',
    [ColumnName.Name]: 'rho',
    [ColumnName.Transliteration]: 'r, rh',
    [ColumnName.Pronunciation]: 'Spanish: pe{rr}o'
  },
  {
    [ColumnName.UpperCase]: 'Σ',
    [ColumnName.LowerCase]: 'σ/ς',
    [ColumnName.Name]: 'sigma',
    [ColumnName.Transliteration]: 's',
    [ColumnName.Pronunciation]: 'mu{s}e'
  },
  {
    [ColumnName.UpperCase]: 'Τ',
    [ColumnName.LowerCase]: 'τ',
    [ColumnName.Name]: 'tau',
    [ColumnName.Transliteration]: 't',
    [ColumnName.Pronunciation]: 'coa{t}'
  },
  {
    [ColumnName.UpperCase]: 'Υ',
    [ColumnName.LowerCase]: 'υ',
    [ColumnName.Name]: 'upsilon',
    [ColumnName.Transliteration]: 'u, y',
    [ColumnName.Pronunciation]: 'mach{i}ne'
  },
  {
    [ColumnName.UpperCase]: 'Φ',
    [ColumnName.LowerCase]: 'φ',
    [ColumnName.Name]: 'phi (phee)',
    [ColumnName.Transliteration]: 'ph',
    [ColumnName.Pronunciation]: '{f}ive'
  },
  {
    [ColumnName.UpperCase]: 'Χ',
    [ColumnName.LowerCase]: 'χ',
    [ColumnName.Name]: 'chi (khee)',
    [ColumnName.Transliteration]: 'ch/kh',
    [ColumnName.Pronunciation]: 'Scottish: lo{ch}'
  },
  {
    [ColumnName.UpperCase]: 'Ψ',
    [ColumnName.LowerCase]: 'ψ',
    [ColumnName.Name]: 'psi (psee)',
    [ColumnName.Transliteration]: 'ps',
    [ColumnName.Pronunciation]: 'la{ps}e'
  },
  {
    [ColumnName.UpperCase]: 'Ω',
    [ColumnName.LowerCase]: 'ω',
    [ColumnName.Name]: 'omega',
    [ColumnName.Transliteration]: 'ō',
    [ColumnName.Pronunciation]: 's{o}ft'
  }
]

export const greekTable = { columns, rows }
