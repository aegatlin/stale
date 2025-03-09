import { IColumn, IRow } from '../../src/code/table/tableState'

enum ColumnName {
  Type = 'Type',
  StrongAgainst = 'Strong Against',
  WeakAgainst = 'Weak Against'
}

const columns: IColumn[] = [
  { name: ColumnName.Type },
  { name: ColumnName.StrongAgainst },
  { name: ColumnName.WeakAgainst }
]

const rows: IRow[] = [
  {
    [ColumnName.Type]: 'Bug',
    [ColumnName.StrongAgainst]: 'Grass, Dark, Psychic',
    [ColumnName.WeakAgainst]: 'Fire, Flying, Rock'
  },
  {
    [ColumnName.Type]: 'Dark',
    [ColumnName.StrongAgainst]: 'Ghost, Psychic',
    [ColumnName.WeakAgainst]: 'Bug, Fairy, Fighting'
  },
  {
    [ColumnName.Type]: 'Dragon',
    [ColumnName.StrongAgainst]: 'Dragon',
    [ColumnName.WeakAgainst]: 'Dragon, Fairy, Ice'
  },
  {
    [ColumnName.Type]: 'Electric',
    [ColumnName.StrongAgainst]: 'Flying, Water',
    [ColumnName.WeakAgainst]: 'Ground'
  },
  {
    [ColumnName.Type]: 'Fairy',
    [ColumnName.StrongAgainst]: 'Fighting, Dark, Dragon',
    [ColumnName.WeakAgainst]: 'Poison, Steel'
  },
  {
    [ColumnName.Type]: 'Fighting',
    [ColumnName.StrongAgainst]: 'Dark, Ice, Normal, Rock, Steel',
    [ColumnName.WeakAgainst]: 'Fairy, Flying, Psychic'
  },
  {
    [ColumnName.Type]: 'Fire',
    [ColumnName.StrongAgainst]: 'Bug, Grass, Ice, Steel',
    [ColumnName.WeakAgainst]: 'Ground, Rock, Water'
  },
  {
    [ColumnName.Type]: 'Flying',
    [ColumnName.StrongAgainst]: 'Bug, Fighting, Grass',
    [ColumnName.WeakAgainst]: 'Electric, Ice, Rock'
  },
  {
    [ColumnName.Type]: 'Ghost',
    [ColumnName.StrongAgainst]: 'Ghost, Psychic',
    [ColumnName.WeakAgainst]: 'Dark, Ghost'
  },
  {
    [ColumnName.Type]: 'Grass',
    [ColumnName.StrongAgainst]: 'Ground, Rock, Water',
    [ColumnName.WeakAgainst]: 'Bug, Fire, Flying, Ice, Poison'
  },
  {
    [ColumnName.Type]: 'Ground',
    [ColumnName.StrongAgainst]: 'Electric, Fire, Poison, Rock, Steel',
    [ColumnName.WeakAgainst]: 'Grass, Ice, Water'
  },
  {
    [ColumnName.Type]: 'Ice',
    [ColumnName.StrongAgainst]: 'Dragon, Flying, Grass, Ground',
    [ColumnName.WeakAgainst]: 'Fighting, Fire, Rock, Steel'
  },
  {
    [ColumnName.Type]: 'Normal',
    [ColumnName.StrongAgainst]: '',
    [ColumnName.WeakAgainst]: 'Fighting'
  },
  {
    [ColumnName.Type]: 'Poison',
    [ColumnName.StrongAgainst]: 'Fairy, Grass',
    [ColumnName.WeakAgainst]: 'Ground, Psychic'
  },
  {
    [ColumnName.Type]: 'Psychic',
    [ColumnName.StrongAgainst]: 'Fighting, Poison',
    [ColumnName.WeakAgainst]: 'Bug, Dark, Ghost'
  },
  {
    [ColumnName.Type]: 'Rock',
    [ColumnName.StrongAgainst]: 'Bug, Fire, Flying, Ice',
    [ColumnName.WeakAgainst]: 'Fighting, Grass, Ground, Steel, Water'
  },
  {
    [ColumnName.Type]: 'Steel',
    [ColumnName.StrongAgainst]: 'Fairy, Ice, Rock',
    [ColumnName.WeakAgainst]: 'Fighting, Fire, Ground'
  },
  {
    [ColumnName.Type]: 'Water',
    [ColumnName.StrongAgainst]: 'Fire, Ground, Rock',
    [ColumnName.WeakAgainst]: 'Electric, Grass'
  }
]

export const pokemonTable = { columns, rows }
