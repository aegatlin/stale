import { Claim } from "../Claim";
import { makeClaimsFromPreClaims } from "./makeClaimsFromPreClaims";
import { expect } from "chai";
import { PreClaim } from "../PreClaim";

describe('makeClaimsFromPreClaims', () => {
  it('makes Claims from PreClaim group 1 of the tractatus', () => {
    const preClaims = [
      new PreClaim(
        '1',
        'The world is everything that is the case.',
        'The decimal figures as numbers of the separate propositions indicate the logical importance of the propositions, the emphasis laid upon them in my exposition. The propositions n.1, n.2, n.3, etc., are comments on proposition No. n; the propositions n.m1, n.m2, etc., are comments on the proposition No. n.m; and so on.'
      ),
      new PreClaim('1.1', 'The world is the totality of facts, not of things.'),
      new PreClaim('1.11', 'The world is determined by the facts, and by these being all the facts.'),
      new PreClaim('1.12', 'For the totality of facts determines both what is the case, and also all that is not the case.'),
      new PreClaim('1.13', 'The facts in logical space are the world.'),
      new PreClaim('1.2', 'The world divides into facts.'),
      new PreClaim('1.21', 'Any one can either be the case or not be the case, and everything else remain the same.'),
    ]
    const expected: Claim[] = [
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
      })
    ]

    const actual = makeClaimsFromPreClaims(preClaims)

    expect(actual).to.deep.equal(expected)
  })

  it('makes Claims from PreClaims with 0-based claims', () => {
    const preClaims = [
      new PreClaim('1', 'I love tacos'),
      new PreClaim('2', 'What is the case, the fact, is the existence of atomic facts'),
      new PreClaim('2.01', 'An atomic fact is a combination of objects (entities, things).'),
      new PreClaim('2.011', 'It is essential to a thing that it can be a constiutent part of an atomic fact.'),
      new PreClaim('2.02', 'The object is simple'),
      new PreClaim('2.0201', 'Every statement about complexes can be analysed into a statement...'),
      new PreClaim('2.021', 'Objects form the substance of the world...'),
      new PreClaim('2.1', 'We make to ourselves pictures of facts.'),
      new PreClaim('2.11', 'The picure presents the facts in logical space, the existence and non-existence of atomic facts.'),
      new PreClaim('3', 'I really really love tacos'),
    ]

    const expected = [
      new Claim({ location: '1', text: 'I love tacos' }),
      new Claim({
        location: '2', text: 'What is the case, the fact, is the existence of atomic facts',
        zeroSubClaims: [
          new Claim({
            location: '2.01', text: 'An atomic fact is a combination of objects (entities, things).',
            subClaims: [
              new Claim({ location: '2.011', text: 'It is essential to a thing that it can be a constiutent part of an atomic fact.' })
            ]
          }),
          new Claim({
            location: '2.02', text: 'The object is simple',
            zeroSubClaims: [
              new Claim({ location: '2.0201', text: 'Every statement about complexes can be analysed into a statement...' })
            ],
            subClaims: [
              new Claim({ location: '2.021', text: 'Objects form the substance of the world...' })
            ]
          })
        ],
        subClaims: [
          new Claim({
            location: '2.1', text: 'We make to ourselves pictures of facts.',
            subClaims: [
              new Claim({ location: '2.11', text: 'The picure presents the facts in logical space, the existence and non-existence of atomic facts.' })
            ]
          })]
      }),
      new Claim({ location: '3', text: 'I really really love tacos' })
    ]

    const actual = makeClaimsFromPreClaims(preClaims)
    expect(actual).to.deep.equal(expected)
  })

  it('makes Claims from PreClaims with 00-based claims', () => {
    const preClaims = [
      new PreClaim('1', 'I am not three.'),
      new PreClaim('2', 'I am not three, either.'),
      new PreClaim('3', 'I am three years old.'),
      new PreClaim('3.001', 'Nobody really likes me.'),
      new PreClaim('3.0011', 'It is because I am three years old.'),
      new PreClaim('3.01', 'When I grow up it will change.'),
      new PreClaim('3.011', 'If it does not change, I will count the clouds.'),
      new PreClaim('3.1', 'I will live a happy life.'),
      new PreClaim('4', 'I also am not three.'),
    ]

    const expected = [
      new Claim({ location: '1', text: 'I am not three.' }),
      new Claim({ location: '2', text: 'I am not three, either.' }),
      new Claim({
        location: '3', text: 'I am three years old.',
        zeroZeroSubClaims: [
          new Claim({
            location: '3.001', text: 'Nobody really likes me.',
            subClaims: [
              new Claim({ location: '3.0011', text: 'It is because I am three years old.' }),
            ]
          })
        ],
        zeroSubClaims: [
          new Claim({
            location: '3.01', text: 'When I grow up it will change.',
            subClaims: [
              new Claim({ location: '3.011', text: 'If it does not change, I will count the clouds.' }),
            ]
          })
        ],
        subClaims: [
          new Claim({ location: '3.1', text: 'I will live a happy life.' })
        ]
      }),
      new Claim({ location: '4', text: 'I also am not three.' })
    ]

    const actual = makeClaimsFromPreClaims(preClaims)
    expect(actual).to.deep.equal(expected)
  })
})