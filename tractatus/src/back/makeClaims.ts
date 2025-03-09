import { readFileSync } from 'fs'
import * as path from 'path'
import { Claim } from '../Claim';
import { PreClaim } from '../PreClaim';
import { makePreClaimFromProposition } from './makePreClaimFromProposition';
import { makeClaimsFromPreClaims } from './makeClaimsFromPreClaims';

export const makeClaims = (): Claim[] => {
  const file = path.resolve(`${__dirname}/../../book/propositions.tex`)

  const preClaims: PreClaim[] = readFileSync(file, 'utf8')
    .split(('\n\n\n'))
    .map((prop: string) => makePreClaimFromProposition(prop))

  return makeClaimsFromPreClaims(preClaims)
}