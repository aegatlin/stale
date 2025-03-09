import React from 'react'
import { enframeConfig } from '../enframeConfig'

const GtmBody: React.FC<{}> = () => {
  return (
    <>
      {/* <!-- Google Tag Manager (noscript) --> */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=ENFRAME_GTM_ID"
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        ></iframe>
      </noscript>
      {/* <!-- End Google Tag Manager (noscript) --> */}
    </>
  )
}

const ServiceWorker: React.FC<{}> = () => {
  const serviceWorkerScriptText = `
// Check that service workers are supported
if ('serviceWorker' in navigator) {
  // Use the window load event to keep the page load performant
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
  })
}
`

  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: serviceWorkerScriptText }}></script>
    </>
  )
}

export const Body: React.FC<{}> = () => {
  return (
    <body>
      {enframeConfig.gtmId && <GtmBody />}
      <noscript>This page requires Javascript to function correctly.</noscript>
      <div id="root"></div>
      <script src="front/index.tsx"></script>
      <link rel="stylesheet" href="front/stylesheet.css" />
      <ServiceWorker />
    </body>
  )
}
