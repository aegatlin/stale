import { Package } from './packageJsonMaker'
import { elog, enframeExec } from '../enframe'

const DEPENDENCIES = [
  'typescript',
  'ts-node',
  '@types/node',
  'parcel',
  'express',
  '@types/express',
  'ts-node',
  'react',
  '@types/react',
  'react-dom',
  '@types/react-dom',
  'compression',
  '@types/compression',
  'helmet',
  '@types/helmet',
  'redux-starter-kit',
  'react-redux',
  '@types/react-redux',
  'pg',
  '@types/pg',
  '@aegatlin/pore'
]

const DEV_DEPENDENCIES = [
  'prettier',
  'eslint',
  'eslint-config-prettier',
  'eslint-plugin-prettier',
  'eslint-plugin-react',
  '@typescript-eslint/eslint-plugin',
  '@typescript-eslint/parser',
  'mocha',
  '@types/mocha',
  'enzyme',
  '@types/enzyme',
  'chai',
  '@types/chai',
  'enzyme-adapter-react-16',
  '@types/enzyme-adapter-react-16',
  'chai-enzyme',
  '@types/chai-enzyme',
  'cypress',
  'nodemon'
]

const addDeps = (deps: string[], key: Package.Key, packageJson: Package.Json) => {
  const packageDeps = Object.keys(packageJson[key] || {})
  const depsToAdd: string[] = packageDeps
    ? deps.filter(dep => !packageDeps.includes(dep))
    : deps

  if (!depsToAdd.length) {
    elog(`${key} are up to date.`)
    return
  }

  const isDev = key == Package.Key.DevDependencies
  const command = `yarn add ${isDev ? '--dev ' : ''}${depsToAdd.join(' ')}`
  enframeExec(command)
}

export const dependenciesMaker = (packageJson: Package.Json) => {
  addDeps(DEPENDENCIES, Package.Key.Dependencies, packageJson)
  addDeps(DEV_DEPENDENCIES, Package.Key.DevDependencies, packageJson)
}
