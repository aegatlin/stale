import { expect } from "chai";
import { PreClaim } from "../PreClaim";
import { makeClaims } from "./makeClaims";
import { Claim } from "../Claim";

describe('makeClaims', () => {
  it('parses members of the first claim group of the tractatus', () => {
    const expectedClaims = [
      new Claim({
        location: '1', text: 'The world is everything that is the case.', subClaims: [
          new Claim({
            location: '1.1', text: 'The world is the totality of facts, not of things.', subClaims: [
              new Claim({ location: '1.11', text: 'The world is determined by the facts, and by these being all the facts.' }),
              new Claim({ location: '1.12', text: 'For the totality of facts determines both what is the case, and also all that is not the case.' }),
              new Claim({ location: '1.13', text: 'The facts in logical space are the world.' }),
            ]
          }),
          new Claim({
            location: '1.2', text: 'The world divides into facts.', subClaims: [
              new Claim({ location: '1.21', text: 'Any one can either be the case or not be the case, and everything else remain the same.' })
            ]
          })
        ], footnote: 'The decimal figures as numbers of the separate propositions indicate the logical importance of the propositions, the emphasis laid upon them in my exposition. The propositions n.1, n.2, n.3, etc., are comments on proposition No. n; the propositions n.m1, n.m2, etc., are comments on the proposition No. n.m; and so on.'
      }),
    ]

    expect(makeClaims()).to.deep.include.members(expectedClaims)
  })

  it('contains some arbitrary members of the second claim group', () => {
    const claims = makeClaims()
    const claim2 = claims[1]
    const claim202 = claims[1].zeroSubClaims[1]

    expect(claim2.location).to.equal('2')
    expect(claim2.text).to.equal('What is the case, the fact, is the existence of atomic facts.')
    expect(claim202.location).to.equal('2.02')
    expect(claim202.text).to.equal('The object is simple.')
  })
})
