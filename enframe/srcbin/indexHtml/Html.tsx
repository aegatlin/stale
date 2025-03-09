import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { Head } from './Head'
import { Body } from './Body'

const Html: React.FC<{}> = () => {
  return (
    <html lang="en">
      <Head />
      <Body />
    </html>
  )
}

export const generateBaseIndexHtml = () => {
  const html = ReactDOMServer.renderToStaticMarkup(<Html />)
  const fullHtml = `<!DOCTYPE html>\n${html}`
  return fullHtml
}
