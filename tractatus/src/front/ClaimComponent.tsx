import * as React from 'react'
import { useMathJax } from './useMathJax';
import { Claim } from '../Claim';
import { Svg } from './Svg';
import { ParagraphsComponent } from './ParagraphsComponent';

export const ClaimComponent: React.FC<{ claim: Claim }> = ({ claim }) => {
  const { location, text, zeroZeroSubClaims, zeroSubClaims, subClaims, footnote } = claim
  const [isOpen, setIsOpen] = React.useState(false)
  useMathJax()
  const hasSubClaim = !!(zeroZeroSubClaims || zeroSubClaims || subClaims)
  const toggle = () => setIsOpen(!isOpen)

  return (
    <div className={`claim${hasSubClaim ? ' with-subclaim' : ''}`} id={`_${location}`}>
      <LocationComponent {...{ isOpen, hasSubClaim, toggle, location }} />
      <ParagraphsComponent {...{ text, footnote }} />
      {isOpen && <SubClaimComponent {...{ zeroZeroSubClaims, zeroSubClaims, subClaims }} />}
    </div>
  )
}

interface LocationProps {
  hasSubClaim: boolean
  isOpen: boolean
  toggle(): void
  location: string
};

const LocationComponent: React.FC<LocationProps> = ({ hasSubClaim, isOpen, toggle, location }) => {
  const chevron = isOpen ? <Svg.Chevron.Down /> : <Svg.Chevron.Right />
  return (
    <div onClick={toggle} className='location'>
      {hasSubClaim && chevron}
      <div>{location}</div>
    </div>
  )
}

interface SubClaimProps {
  zeroZeroSubClaims: Claim[]
  zeroSubClaims: Claim[]
  subClaims: Claim[]
}

const SubClaimComponent: React.FC<SubClaimProps> = ({ zeroZeroSubClaims, zeroSubClaims, subClaims }) => {
  return (
    <div>
      {zeroZeroSubClaims && zeroZeroSubClaims.map((claim, index) => <ClaimComponent claim={claim} key={index} />)}
      {zeroSubClaims && zeroSubClaims.map((claim, index) => <ClaimComponent claim={claim} key={index} />)}
      {subClaims && subClaims.map((claim, index) => <ClaimComponent claim={claim} key={index} />)}
    </div>
  )
}
