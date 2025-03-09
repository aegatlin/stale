import { IColumn, IRow } from '../../src/code/table/tableState'

enum ColumnName {
  Megapixels = 'Megapixels',
  PixelResolution = 'Average Pixel Resolution',
  PrintSize300 = 'Print Size at 300ppi',
  PrintSize200 = 'Print Size at 200ppi',
  PrintSize150 = 'Print Size at 150ppi'
}

const columns: IColumn[] = [
  { name: ColumnName.Megapixels },
  { name: ColumnName.PixelResolution },
  { name: ColumnName.PrintSize300 },
  { name: ColumnName.PrintSize200 },
  { name: ColumnName.PrintSize150 }
]

const rows: IRow[] = [
  {
    [ColumnName.Megapixels]: '3',
    [ColumnName.PixelResolution]: '2048 x 1536',
    [ColumnName.PrintSize300]: '6.62" x 5.12"',
    [ColumnName.PrintSize200]: '10.24" x 7.68"',
    [ColumnName.PrintSize150]: '13.65" x 10.24"'
  },
  {
    [ColumnName.Megapixels]: '4',
    [ColumnName.PixelResolution]: '2464 x 1632',
    [ColumnName.PrintSize300]: '8.21" x 5.44"',
    [ColumnName.PrintSize200]: '12.32" x 8.16"',
    [ColumnName.PrintSize150]: '16.42" x 10.88"'
  },
  {
    [ColumnName.Megapixels]: '6',
    [ColumnName.PixelResolution]: '3008 x 2000',
    [ColumnName.PrintSize300]: '10.02" x 6.67"',
    [ColumnName.PrintSize200]: '15.04" x 10.00"',
    [ColumnName.PrintSize150]: '20.05" x 13.34"'
  },
  {
    [ColumnName.Megapixels]: '8',
    [ColumnName.PixelResolution]: '3264 x 2448',
    [ColumnName.PrintSize300]: '10.88" x 6.36"',
    [ColumnName.PrintSize200]: '16.32" x 12.24"',
    [ColumnName.PrintSize150]: '21.76" x 16.32"'
  },
  {
    [ColumnName.Megapixels]: '10',
    [ColumnName.PixelResolution]: '3872 x 2592',
    [ColumnName.PrintSize300]: '12.91" x 6.64"',
    [ColumnName.PrintSize200]: '19.36" x 12.96"',
    [ColumnName.PrintSize150]: '25.81" x 17.28"'
  },
  {
    [ColumnName.Megapixels]: '12',
    [ColumnName.PixelResolution]: '4290 x 2800',
    [ColumnName.PrintSize300]: '14.30" x 9.34"',
    [ColumnName.PrintSize200]: '21.45" x 14.00"',
    [ColumnName.PrintSize150]: '28.60" x 18.67"'
  },
  {
    [ColumnName.Megapixels]: '16',
    [ColumnName.PixelResolution]: '4920 x 3264',
    [ColumnName.PrintSize300]: '16.40" x 10.88"',
    [ColumnName.PrintSize200]: '24.60" x 16.32"',
    [ColumnName.PrintSize150]: '32.80" x 21.76"'
  },
  {
    [ColumnName.Megapixels]: '35mm film',
    [ColumnName.PixelResolution]: '5380 x 3620',
    [ColumnName.PrintSize300]: '17.93" x 12.06"',
    [ColumnName.PrintSize200]: '26.90" x 18.10"',
    [ColumnName.PrintSize150]: '35.87" x 24.13"'
  },
  {
    [ColumnName.Megapixels]: '36',
    [ColumnName.PixelResolution]: '7360 x 4912',
    [ColumnName.PrintSize300]: '24.54" x 16.37"',
    [ColumnName.PrintSize200]: '36.80" x 24.56"',
    [ColumnName.PrintSize150]: '49.06" x 32.74"'
  }
]

export const megapixelPrintSizesTable = { columns, rows }
