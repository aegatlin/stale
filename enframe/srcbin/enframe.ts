import { pore } from '@aegatlin/pore'
import { join } from 'path'

const enframePath = join(process.cwd(), 'node_modules/enframe')
export const enframeDir = (file: string) => join(enframePath, file)
export const rootDir = (file: string) => join(process.cwd(), file)

import { execSync, exec } from 'child_process'
import { packageJsonMaker } from './packageJson/packageJsonMaker'
import { gitPush, gitInit } from './git'
import { herokuMaker, herokuChecker } from './herokuMaker'
import { fileMaker } from './fileMaker'
import { promisify } from 'util'

export const elog = (message: string) => {
  console.log(`Enframe: ${message}`)
}

export const enframeExec = (command: string, stdioInherit?: boolean) => {
  elog(`Executing: ${command}\n`)
  const execOptions = { encoding: 'utf8' }
  if (stdioInherit) execOptions['stdio'] = 'inherit'
  const stdout = execSync(command, execOptions)
  if (stdout) console.log(stdout)
}

export const commandDoesNotError = (command: string): boolean => {
  try {
    execSync(command, { encoding: 'utf8', stdio: 'ignore' })
    return true
  } catch {
    return false
  }
}

export const commandDoesNotErrorAsync = async (command: string): Promise<boolean> => {
  const pExec = promisify(exec)
  const [, err] = await pore(pExec(command))
  return !err
}

const outro = (customDomainInfo: string) => {
  if (customDomainInfo) {
    const prelude =
      'You have successfully created a custom domain. Use the information below to set up your domain DNS\n'
    elog(`${prelude}${customDomainInfo}`)
  }
  elog("You've been framed! Have a nice day :)")
}

const enframe = async () => {
  const herokuStatusPromise = herokuChecker()
  gitInit()
  fileMaker()
  packageJsonMaker()
  const customDomainInfo = herokuMaker(await herokuStatusPromise)
  gitPush()
  outro(customDomainInfo)
  process.exit()
}

enframe()
