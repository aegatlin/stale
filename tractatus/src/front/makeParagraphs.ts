export const makeParagraphs = (text: string): string[] => {
  const newParagraphs: string[] = []
  text.split('\n').forEach(p => newParagraphs.push(...imageReplace(p)))
  return newParagraphs
}

export const IMG_REGEX = / ?IMG_REPLACE_([^ ]*) ?/

const imageReplace = (paragraph: string): string[] => {
  if (!IMG_REGEX.test(paragraph)) return [paragraph]

  const newParagraphs: string[] = []
  let remainingParagraph = paragraph
  while (!!remainingParagraph) {
    if (!IMG_REGEX.test(remainingParagraph)) {
      newParagraphs.push(remainingParagraph)
      remainingParagraph = ''
    } else {
      const index = remainingParagraph.search(IMG_REGEX)
      newParagraphs.push(remainingParagraph.slice(0, index))
      const [match, ..._] = remainingParagraph.match(IMG_REGEX)
      newParagraphs.push(match.trim())
      remainingParagraph = remainingParagraph.slice(index + match.length)
    }
  }

  return newParagraphs
}