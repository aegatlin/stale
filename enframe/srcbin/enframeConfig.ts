import { rootDir } from './enframe'
import importFresh from 'import-fresh'

interface EnframeConfig {
  appName: string
  appShortName: string
  appDescription: string
  gitlabRemoteSSH: string
  appCustomDomain?: string
  gtmId?: string
}

const initialEnframeConfig = importFresh(rootDir('enframe.json')) as EnframeConfig

const enframeConfig: Required<EnframeConfig> = {
  ...initialEnframeConfig,
  appCustomDomain: initialEnframeConfig.appCustomDomain || null,
  gtmId: initialEnframeConfig.gtmId || null
}

export { enframeConfig }
