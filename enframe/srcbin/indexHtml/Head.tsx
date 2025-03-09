import React from 'react'
import { enframeConfig } from '../enframeConfig'

const GtmHead: React.FC<{}> = () => {
  const gtmScriptText = `
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','ENFRAME_GTM_ID');
  `

  return (
    <>
      {/* <!-- Google Tag Manager --> */}
      <script dangerouslySetInnerHTML={{ __html: gtmScriptText }}></script>
      {/* <!-- End Google Tag Manager --> */}
    </>
  )
}

export const Head: React.FC<{}> = () => {
  return (
    <head>
      {enframeConfig.gtmId && <GtmHead />}
      <link rel="apple-touch-icon" sizes="180x180" href="images/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="images/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="images/favicon-16x16.png" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="ENFRAME_APP_DESCRIPTION" />
      <link rel="manifest" href="/manifest.webmanifest" />
      <title>ENFRAME_APP_NAME</title>
      {/* <!-- Chrome, Firefox OS and Opera --> */}
      <meta name="theme-color" content="#4285f4" />
    </head>
  )
}
