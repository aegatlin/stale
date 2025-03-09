import { IBreadcrumb } from './Breadcrumbs'

const capitalizeWord = (word: string): string => {
  const chars = word.split('')
  chars[0] = chars[0].toUpperCase()
  return chars.join('')
}

const capitalize = (words: string): string => {
  const wordArray = words.split('-')
  return wordArray.reduce((fullText, currentWord) => {
    fullText += ` ${capitalizeWord(currentWord)}`
    return fullText
  }, '')
}

export const breadcrumbBuilder = (pathname: string): IBreadcrumb[] => {
  const bcs = [{ href: '/', displayName: 'Home' }]
  if (pathname.length <= 1) return bcs

  const pathArray = pathname.split('/')
  let currentPath = '/'
  pathArray.forEach((pathPart, i) => {
    if (i === 0) {
      // do nothing
    } else if (i === 1) {
      currentPath += pathPart
      bcs.push({ href: currentPath, displayName: capitalize(pathPart) })
    } else {
      currentPath += `/${pathPart}`
      bcs.push({ href: currentPath, displayName: capitalize(pathPart) })
    }
  })

  return bcs
}
