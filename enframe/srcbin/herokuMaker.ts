import { enframeExec, elog, commandDoesNotErrorAsync } from './enframe'
import { enframeConfig } from './enframeConfig'

const { appName } = enframeConfig
const stagingName = `${appName}-staging`
const prodName = `${appName}-prod`

const appExists = (app: string): Promise<boolean> => {
  return commandDoesNotErrorAsync(`heroku apps:info ${app}`)
}

interface HerokuStatus {
  isHeroku: boolean
  isStaging: boolean
  isProd: boolean
  shouldRunHerokuMaker: boolean
}
export const herokuChecker = async (): Promise<HerokuStatus> => {
  const isHeroku = await commandDoesNotErrorAsync('heroku')
  const herokuPromises = [appExists(stagingName), appExists(prodName)]
  const [isStaging, isProd] = await Promise.all(herokuPromises)

  const shouldRunHerokuMaker = isHeroku && !isStaging && !isProd
  return { isHeroku, isStaging, isProd, shouldRunHerokuMaker }
}

function dore<T>(fn: (...args: any[]) => T, ...args: any[]) {
  try {
    return [fn.apply(null, args), null]
  } catch (e) {
    return [null, e]
  }
}

const createApp = (app: string) => {
  const [, er] = dore(enframeExec, `heroku apps:create ${app}`)
  if (er) elog(`Failed to create ${app}\n${er}`)

  const addPg = `heroku addons:create --app ${app} heroku-postgresql:hobby-dev`
  const [, err] = dore(enframeExec, addPg)
  if (err) elog(`Failed to create database for ${app}\n${err}`)
}

const createCustomDomain = (app: string): string | null => {
  if (enframeConfig.appCustomDomain) {
    const addCustomDomain = `heroku domains:add ${enframeConfig.appCustomDomain} --app ${app}`
    const [info, err] = dore(enframeExec, addCustomDomain)
    if (err) {
      elog(`Failed to create custom domain ${enframeConfig.appCustomDomain}\n${err}`)
      return null
    }
    return info
  }
}

const createStaging = (app: string) => createApp(app)

const createProd = (app: string) => {
  createApp(app)
  return createCustomDomain(app)
}

export const herokuMaker = ({ shouldRunHerokuMaker }: HerokuStatus) => {
  if (!shouldRunHerokuMaker) {
    elog('Skipping Heroku app creation.')
    return
  }

  createStaging(stagingName)
  const customDomainInfo = createProd(prodName)
  return customDomainInfo
}
