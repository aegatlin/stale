import { PreClaim } from "../PreClaim";
import { cleanLatexParagraph } from "./cleanLatexParagraph";

export const makePreClaimFromProposition = ((prop: string): PreClaim => {
  const [locationLine, ...body] = prop.split('\n')
  const location = locationLine.match(/\d(\.\d*)?/g)[0]
  const [text, footnote] = body.join('\n').split('\\footnote')
  const cleanedText = text.split('\n\n').map(paragraph => cleanLatexParagraph(paragraph)).join('\n')
  const preClaim = new PreClaim(location, cleanedText)
  
  if (footnote) preClaim.footnote = cleanLatexParagraph(footnote.split('\n').join(' '))

  return preClaim
})