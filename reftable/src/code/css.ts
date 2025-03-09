import { media } from 'typestyle'

export const primaryBlue = '#007FFF'
export const darkBlue = '#17224D'
export const alertBlue = '#17E9E1'
export const offWhite = '#F5FAFA'
export const white = '#FFFFFF' // 'white'

export const marginLeft = 200
export const mobileMarginLeft = 15
export const menuWidth = 350

const mobileMaxWidth = 900
export const mobile = { maxWidth: mobileMaxWidth }
export const notMobile = { minWidth: mobileMaxWidth + 1 }

export const topHeaderContentHeight = 60
export const breadcrumbsHeight = 27
export const headerHeight = topHeaderContentHeight + breadcrumbsHeight
export const headerMenuOpenClassName = 'header-menu-open'
export const zIndexHigh = 2
export const zIndexLow = 1

export const fontSizeH1 = '2.33em'
export const fontSizeH2 = '1.83em'
export const fontSizeH3 = '1.5em'
export const fontSizeH4 = '1.33em'
export const fontSizeSmall = '0.8em'

export const arabicFont = {
  fontFamily: "'Amiri', serif;",
  fontSize: '1.6em',
  ...media(mobile, {
    fontSize: '1.4em',
  }),
}

export const article = {
  margin: 'auto',
  maxWidth: '750px',
  padding: '20px',
}

export const menuTransitionDurationMs = 500
