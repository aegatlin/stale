import NextHead from 'next/head'
import { getStyles } from 'typestyle'
import { darkBlue } from '../css'

const inProd = process.env.NODE_ENV === 'production'

const serviceWorkerJavascript = `
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/service-worker.js');
  });
}`

const gtmHeadCode = `
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-M8BVT59');`

export const Head: React.FC<{ title: string; description: string }> = ({
  title,
  description,
}) => {
  return (
    <NextHead>
      {inProd && <script dangerouslySetInnerHTML={{ __html: gtmHeadCode }} />}
      <link
        href="https://fonts.googleapis.com/css?family=Amiri|Montserrat&display=swap&subset=arabic"
        rel="stylesheet"
      />
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
      <link rel="manifest" href="/manifest.json" />
      <style>{getStyles()}</style>
      <script dangerouslySetInnerHTML={{ __html: serviceWorkerJavascript }} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="theme-color" content={darkBlue} />
    </NextHead>
  )
}
