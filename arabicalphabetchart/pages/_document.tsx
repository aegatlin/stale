import { Html, Head, Main, NextScript } from 'next/document'
import { GtmIFrame, GtmScript, isProd } from '../src/gtm'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* google fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Amiri&family=Montserrat:wght@400;700&display=swap"
          rel="stylesheet"
        ></link>

        {/* icons */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />

        {/* other */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#17224D" />
      </Head>
      <body>
        {isProd() && <GtmIFrame />}
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
