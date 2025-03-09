import { Claim } from "../Claim";
import { PreClaim } from "../PreClaim";

enum ClaimType { ZeroZeroSubClaim, ZeroSubClaim, SubClaim }

interface IStep { claimType: ClaimType, index: number }
class Step {
  public claimType: ClaimType
  public index: number

  constructor({ claimType, index }: IStep) {
    this.claimType = claimType
    this.index = index
  }
}

export const makeClaimsFromPreClaims = (preClaims: PreClaim[]): Claim[] => {
  const claims: Claim[] = []

  preClaims.forEach((preClaim: PreClaim) => {
    const claim = makeClaimFromPreClaim(preClaim)
    const claimArray = findClaimArray(preClaim.location, claims)
    claimArray.push(claim)
  })

  return claims
}

const makeClaimFromPreClaim = ({ location, text, footnote }: PreClaim) => {
  const claim = new Claim({ location, text })
  if (footnote) claim.footnote = footnote
  return claim
}

const findClaimArray = (location: string, claims: Claim[]): Claim[] => {
  if (location.length == 1) return claims

  const [firstIndex, path, lastType] = locator(location)
  let claim: Claim = claims[firstIndex]

  claim = walkThePath(path, claim)
  return getTheLastArray(lastType, claim)
}

const locator = (location: string): [number, Step[], ClaimType] => {
  const path: Step[] = pathMaker(location)
  const firstIndex = path.shift().index
  const lastType = path.pop().claimType
  return [firstIndex, path, lastType]
}

const pathMaker = (location: string): Step[] => {
  const locationPath = location.replace('.', '').split(/(0*\d)/g).filter(Boolean)

  return locationPath.map(preStep => {
    let claimType: ClaimType
    if (preStep.length == 1) claimType = ClaimType.SubClaim
    if (preStep.length == 2) claimType = ClaimType.ZeroSubClaim
    if (preStep.length == 3) claimType = ClaimType.ZeroZeroSubClaim
    return new Step({ claimType, index: parseInt(preStep) - 1 })
  })
}

const walkThePath = (path: Step[], claim: Claim) => {
  path.forEach(({ claimType, index }: Step) => {
    if (claimType == ClaimType.SubClaim) claim = claim.subClaims[index]
    if (claimType == ClaimType.ZeroSubClaim) claim = claim.zeroSubClaims[index]
    if (claimType == ClaimType.ZeroZeroSubClaim) claim = claim.zeroZeroSubClaims[index]
  })

  return claim
}

const getTheLastArray = (claimType: ClaimType, claim: Claim): Claim[] => {
  if (claimType == ClaimType.SubClaim) {
    claim.subClaims = claim.subClaims || []
    return claim.subClaims
  }

  if (claimType == ClaimType.ZeroSubClaim) {
    claim.zeroSubClaims = claim.zeroSubClaims || []
    return claim.zeroSubClaims
  }

  if (claimType == ClaimType.ZeroZeroSubClaim) {
    claim.zeroZeroSubClaims = claim.zeroZeroSubClaims || []
    return claim.zeroZeroSubClaims
  }
}
