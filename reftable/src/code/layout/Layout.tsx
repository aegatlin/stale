import { normalize, setupPage } from 'csstips'
import React from 'react'
import { cssRule, media, style } from 'typestyle'
import {
  marginLeft,
  mobile,
  notMobile,
  offWhite,
  headerMenuOpenClassName,
} from '../css'
import { Footer } from './Footer'
import { Head } from './Head'
import { Header } from './header/Header'

setupPage('#__next')
normalize()

cssRule('#__next', {
  display: 'flex',
  flexDirection: 'column',
})

cssRule('html', {
  backgroundColor: offWhite,
})

cssRule('body', {
  fontFamily: "'Montserrat', sans-serif;",
  $nest: {
    [`&.${headerMenuOpenClassName}`]: {
      overflow: 'hidden',
    },
  },
})

const mainClass = style(
  { flexGrow: 1 },
  media(notMobile, {
    marginLeft: `${marginLeft}px`,
  })
)

const pageTitleClass = style(
  media(notMobile, {
    fontWeight: 'normal',
    marginLeft: marginLeft,
  }),
  media(mobile, {
    display: 'none',
  })
)

export const Layout: React.FC<{
  title: string
  description: string
  pathname: string
  pageTitle: string
}> = (props) => {
  return (
    <>
      <Head title={props.title} description={props.description} />
      <Header pathname={props.pathname} mobilePageTitle={props.pageTitle} />
      <h1 className={pageTitleClass}>{props.pageTitle}</h1>
      <main className={mainClass}>{props.children}</main>
      <Footer />
    </>
  )
}
