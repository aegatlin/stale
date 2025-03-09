import { GtmScript, isProd } from '../src/gtm'
import '../src/styles.css'

function App({ Component, pageProps }) {
  return (
    <>
      {isProd() && <GtmScript />}
      <Component {...pageProps} />
    </>
  )
}

export default App
