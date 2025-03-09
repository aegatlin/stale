import { IColumn, IRow } from '../../src/code/table/tableState'
import { Language } from '../alphabetData/languages'

enum ColumnName {
  Quantity = 'Quantity',
  Equation = 'Equation',
  Symbol = 'Symbol',
  Value = 'Value',
  Unit = 'Unit',
  RSU = 'Relative Standard Uncertainty'
}

const columns: IColumn[] = [
  { name: ColumnName.Quantity, language: Language.English },
  { name: ColumnName.Equation, language: Language.English },
  { name: ColumnName.Symbol, language: Language.English },
  { name: ColumnName.Value, language: Language.English },
  { name: ColumnName.Unit, language: Language.English },
  { name: ColumnName.RSU, language: Language.English }
]

const rows: IRow[] = [
  {
    [ColumnName.Quantity]: 'speed of light in a vacuum',
    [ColumnName.Equation]: '',
    [ColumnName.Symbol]: 'c',
    [ColumnName.Value]: '299792458',
    [ColumnName.Unit]: 'm s^-1',
    [ColumnName.RSU]: 'exact'
  },
  {
    [ColumnName.Quantity]: 'Newtonian constant of gravitation',
    [ColumnName.Equation]: '',
    [ColumnName.Symbol]: 'G',
    [ColumnName.Value]: '6.67430(15) x 10^-11',
    [ColumnName.Unit]: 'm^3 kg^-1 s^-2',
    [ColumnName.RSU]: '2.2x10^-5'
  },
  {
    [ColumnName.Quantity]: 'Planck constant',
    [ColumnName.Equation]: '',
    [ColumnName.Symbol]: 'h',
    [ColumnName.Value]: '6.62607015x10^-34',
    [ColumnName.Unit]: 'J Hz^-1',
    [ColumnName.RSU]: 'exact'
  },
  {
    [ColumnName.Quantity]: 'Planck constant',
    [ColumnName.Equation]: '',
    [ColumnName.Symbol]: 'h-bar',
    [ColumnName.Value]: '1.054571817x10^-34',
    [ColumnName.Unit]: 'J s',
    [ColumnName.RSU]: 'exact'
  },
  {
    [ColumnName.Quantity]: 'elementary charge',
    [ColumnName.Equation]: '',
    [ColumnName.Symbol]: 'e',
    [ColumnName.Value]: '1.602176634x10^-19',
    [ColumnName.Unit]: 'C',
    [ColumnName.RSU]: 'exact'
  },
  {
    [ColumnName.Quantity]: 'vacuum magnetic permeability',
    [ColumnName.Equation]: '4πα(h-bar)/((e^2)c)',
    [ColumnName.Symbol]: 'μ_0',
    [ColumnName.Value]: '1.25663706212(19)x10^-12',
    [ColumnName.Unit]: 'N A^-2',
    [ColumnName.RSU]: '1.5x10^-10'
  },
  {
    [ColumnName.Quantity]: 'vacuum electric permittivity',
    [ColumnName.Equation]: '1/((μ_0)(c^2))',
    [ColumnName.Symbol]: 'ε_0',
    [ColumnName.Value]: '8.8541878128(13)x10^-12',
    [ColumnName.Unit]: 'F m^-1',
    [ColumnName.RSU]: '1.5x10^-10'
  },
  {
    [ColumnName.Quantity]: 'Josephson constant',
    [ColumnName.Equation]: '2e/h',
    [ColumnName.Symbol]: 'K_J',
    [ColumnName.Value]: '483597.8484x10^9',
    [ColumnName.Unit]: 'Hz V^-1',
    [ColumnName.RSU]: 'exact'
  },
  {
    [ColumnName.Quantity]: 'von Klitzing constant',
    [ColumnName.Equation]: '(μ_0)c/2α = 2π(h-bar)/e^2',
    [ColumnName.Symbol]: 'R_K',
    [ColumnName.Value]: '25812.80745',
    [ColumnName.Unit]: 'Ω',
    [ColumnName.RSU]: 'exact'
  },
  {
    [ColumnName.Quantity]: 'magnetic flux quantum',
    [ColumnName.Equation]: '2π(h-bar)/2e',
    [ColumnName.Symbol]: 'Φ_0',
    [ColumnName.Value]: '2.067833848x10^-15',
    [ColumnName.Unit]: 'Wb',
    [ColumnName.RSU]: 'exact'
  },
  {
    [ColumnName.Quantity]: 'conductance quantum',
    [ColumnName.Equation]: '(2e^2)/2π(h-bar)',
    [ColumnName.Symbol]: 'G_0',
    [ColumnName.Value]: '7.748091729x10^-5',
    [ColumnName.Unit]: 'S',
    [ColumnName.RSU]: 'exact'
  },
  {
    [ColumnName.Quantity]: 'electron mass',
    [ColumnName.Equation]: '',
    [ColumnName.Symbol]: 'm_e',
    [ColumnName.Value]: '9.1093837015(28)x10^-31',
    [ColumnName.Unit]: 'kg',
    [ColumnName.RSU]: '3.0x10^-10'
  },
  {
    [ColumnName.Quantity]: 'proton mass',
    [ColumnName.Equation]: '',
    [ColumnName.Symbol]: 'm_p',
    [ColumnName.Value]: '1.67262192369(51)x10^-27',
    [ColumnName.Unit]: 'kg',
    [ColumnName.RSU]: '3.1x10^-10'
  },
  {
    [ColumnName.Quantity]: 'proton-electron mass ratio',
    [ColumnName.Equation]: '',
    [ColumnName.Symbol]: 'm_p/m_e',
    [ColumnName.Value]: '1836.15267343(11)',
    [ColumnName.Unit]: '',
    [ColumnName.RSU]: '6x10^-11'
  },
  {
    [ColumnName.Quantity]: 'fine-structure constant',
    [ColumnName.Equation]: '(e^2)/4π(ε_0)(h-bar)c',
    [ColumnName.Symbol]: 'α',
    [ColumnName.Value]: '7.2973525693(11)x10^-3',
    [ColumnName.Unit]: '',
    [ColumnName.RSU]: '1.5x10^-10'
  },
  {
    [ColumnName.Quantity]: 'inverse fine-structure constant',
    [ColumnName.Equation]: '',
    [ColumnName.Symbol]: 'α^-1',
    [ColumnName.Value]: '137.035999084(21)',
    [ColumnName.Unit]: '',
    [ColumnName.RSU]: '1.5x10^-10'
  },
  {
    [ColumnName.Quantity]: 'Rydberg frequency',
    [ColumnName.Equation]: '(α^2)(m_e)(c^2)/2h',
    [ColumnName.Symbol]: 'cR_∞',
    [ColumnName.Value]: '3.2898419602508(64)x10^15',
    [ColumnName.Unit]: 'Hz',
    [ColumnName.RSU]: '1.9x10^-12'
  },
  {
    [ColumnName.Quantity]: 'Boltzmann constant',
    [ColumnName.Equation]: '',
    [ColumnName.Symbol]: 'k',
    [ColumnName.Value]: '1.380649x10^-23',
    [ColumnName.Unit]: 'J K^-1',
    [ColumnName.RSU]: 'exact'
  },
  {
    [ColumnName.Quantity]: 'Avogadro constant',
    [ColumnName.Equation]: '',
    [ColumnName.Symbol]: 'N_A',
    [ColumnName.Value]: '6.02214076x10^23',
    [ColumnName.Unit]: 'mol^-1',
    [ColumnName.RSU]: 'exact'
  },
  {
    [ColumnName.Quantity]: 'molar gas constant',
    [ColumnName.Equation]: '(N_A)k',
    [ColumnName.Symbol]: 'R',
    [ColumnName.Value]: '8.314462618',
    [ColumnName.Unit]: 'J mol^-1 K^-1',
    [ColumnName.RSU]: 'exact'
  },
  {
    [ColumnName.Quantity]: 'Faraday constant',
    [ColumnName.Equation]: '(N_A)e',
    [ColumnName.Symbol]: 'F',
    [ColumnName.Value]: '9648533212',
    [ColumnName.Unit]: 'C mol^-1',
    [ColumnName.RSU]: 'exact'
  },
  {
    [ColumnName.Quantity]: 'Stefan-Boltzmann constant',
    [ColumnName.Equation]: '(((π^2)/60)(k^4))/(((h-bar)^3)c^2)',
    [ColumnName.Symbol]: 'σ',
    [ColumnName.Value]: '5.670374419x10^-8',
    [ColumnName.Unit]: 'W m^-2 K^-4',
    [ColumnName.RSU]: 'exact'
  },
  {
    [ColumnName.Quantity]: 'electron volt',
    [ColumnName.Equation]: '(e/C)J',
    [ColumnName.Symbol]: 'eV',
    [ColumnName.Value]: '1.602176634x10^-19',
    [ColumnName.Unit]: 'J',
    [ColumnName.RSU]: 'exact'
  },
  {
    [ColumnName.Quantity]: '(unified) atomic mass unit',
    [ColumnName.Equation]: '(1/12)m(12^C)',
    [ColumnName.Symbol]: 'u',
    [ColumnName.Value]: '1.66053906660(50)x10^-27',
    [ColumnName.Unit]: 'kg',
    [ColumnName.RSU]: '2.0x10^-10'
  }
]

export const physicalConstantsTable = { columns, rows }
