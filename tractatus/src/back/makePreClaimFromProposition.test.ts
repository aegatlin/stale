import { expect } from "chai";
import { PreClaim } from "../PreClaim";
import { makePreClaimFromProposition } from "./makePreClaimFromProposition";

describe('makePreClaimFromProposition', () => {
  it('makes a preClaim from a one-line proposition', () => {
    const prop = `\\PropositionE{2.225}
{There is no picture which is a priori true.}`
    const expectedPreClaim = new PreClaim('2.225', 'There is no picture which is a priori true.')

    expect(makePreClaimFromProposition(prop)).to.deep.equal(expectedPreClaim)
  })

  it('makes a PreClaim from a multi-paragraph proposition', () => {
    const prop = `\\PropositionE{9.99}
{I am the totality of facts, and of
things.

I am also otherwise.}`
    const expectedPreClaim = new PreClaim('9.99', 'I am the totality of facts, and of things.\nI am also otherwise.')

    expect(makePreClaimFromProposition(prop)).to.deep.equal(expectedPreClaim)
  })
})