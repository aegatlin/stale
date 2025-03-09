import { writeFileSync } from 'fs'
import { rootDir } from '../enframe'
import importFresh from 'import-fresh'
import { dependenciesMaker } from './dependencies'
import { enframeConfig } from '../enframeConfig'

export namespace Package {
  export enum Key {
    Name = 'name',
    Version = 'version',
    Description = 'description',
    Scripts = 'scripts',
    Repository = 'repository',
    Dependencies = 'dependencies',
    DevDependencies = 'devDependencies'
  }

  export interface Json {
    [key: string]: object | string | boolean
  }
}

const BASE_PACKAGE_JSON: Package.Json = {
  [Package.Key.Name]: enframeConfig.appName,
  [Package.Key.Version]: '0.0.1',
  [Package.Key.Description]: enframeConfig.appDescription,
  [Package.Key.Scripts]: {
    build: 'parcel build src/index.html',
    start: 'ts-node src/back/server.ts',
    'watch-front': 'parcel src/index.html',
    'watch-back': 'nodemon',
    test: 'mocha',
    'integration-test': './scripts/integration-test.sh',
    cy: 'yarn cypress open',
    lint: 'eslint --ext .ts,.tsx ./'
  },
  [Package.Key.Repository]: enframeConfig.gitlabRemoteSSH,
  [Package.Key.Dependencies]: {},
  [Package.Key.DevDependencies]: {}
}

const getPackageJson = () => importFresh(rootDir('package.json')) as Package.Json

export const packageJsonMaker = () => {
  let packageJson: Package.Json = getPackageJson()
  dependenciesMaker(packageJson)
  packageJson = getPackageJson()
  packageJson = { ...BASE_PACKAGE_JSON, ...packageJson }
  writeFileSync(rootDir('package.json'), `${JSON.stringify(packageJson, null, 2)}\n`)
}
