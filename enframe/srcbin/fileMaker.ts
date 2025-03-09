import { copyFileSync, writeFileSync, readFileSync } from 'fs'
import { enframeDir, rootDir, elog } from './enframe'
import { enframeConfig } from './enframeConfig'
import { copySync } from 'fs-extra'
import { generateBaseIndexHtml } from './indexHtml/Html'

const efRootDir = (path: string) => enframeDir(`srcapp/${path}`)

const enframeConfigReplacer = (fileContents: string) => {
  return fileContents
    .replace(/ENFRAME_APP_NAME/g, enframeConfig.appName)
    .replace(/ENFRAME_APP_SHORT_NAME/g, enframeConfig.appShortName)
    .replace(/ENFRAME_APP_DESCRIPTION/g, enframeConfig.appDescription)
    .replace(/ENFRAME_GTM_ID/g, enframeConfig.gtmId)
}

const writeConfigIntoFile = (filePath: string) => {
  const oldFileContents = readFileSync(efRootDir(filePath), 'utf8')
  const newFileContents = enframeConfigReplacer(oldFileContents)
  writeFileSync(rootDir(filePath), newFileContents)
}

const writeRoot = () => {
  const gitIgnore = () => copyFileSync(efRootDir('gitignore'), rootDir('.gitignore'))
  const gitlabCi = () => writeConfigIntoFile('.gitlab-ci.yml')

  gitIgnore()
  gitlabCi()

  const files = [
    '.eslintrc.json',
    '.mocharc.json',
    '.prettierrc',
    'cypress.json',
    'nodemon.json',
    'tsconfig.json'
  ]

  files.forEach((filePath: string) => {
    copyFileSync(efRootDir(filePath), rootDir(filePath))
  })

  const allFiles = files.concat(['.gitignore', '.gitlab-ci.yml'])
  elog(`Updated the following root files, ${allFiles.join(', ')}`)
}

const copyFolders = () => {
  const folders = ['src/', 'cypress/', 'scripts/']
  folders.forEach((folder: string) => {
    copySync(efRootDir(folder), rootDir(folder))
    elog(`Copied the contents of ${efRootDir(folder)} into ${rootDir(folder)}`)
  })
}

const writeIndexHtml = () => {
  const baseIndexHtml = generateBaseIndexHtml()
  const finalIndexHtml = enframeConfigReplacer(baseIndexHtml)
  writeFileSync(rootDir('src/index.html'), finalIndexHtml)
}

const writeConfigIntoFiles = () => {
  const files = [
    'src/manifest.webmanifest',
    'src/front/App.tsx',
    'src/front/App.test.tsx',
    'src/back/server.ts',
    'cypress/integration/index.spec.js'
  ]

  files.forEach(filePath => writeConfigIntoFile(filePath))
}

export const fileMaker = () => {
  writeRoot()
  copyFolders()
  writeConfigIntoFiles()
  writeIndexHtml()
}
