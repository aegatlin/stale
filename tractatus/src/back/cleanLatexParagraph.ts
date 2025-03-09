const cleanEdges = (s: string) => {
  s = s.trim()
  while (s[0] == '{') s = s.slice(1)

  if (!(s.match(/\\end{(gather\*|array)}$/g))) {
    while (s[s.length - 1] == '}') s = s.slice(0, s.length - 1)
  }

  return s
}

const cleanQuoting = (paragraph: string) => {
  return paragraph.replace(/``(.*?)(''|{}'')/g, '"$1"')
    .replace(/`(.*?)'/g, "'$1'")
}

const cleanLatexisms = (paragraph: string) => {
  return paragraph.replace(/\\-/g, '')
    .replace(/\\;|~/g, ' ')
    .replace(/---/g, '—') // em dash
    .replace(/--/g, '–') // en dash
    .replace(/\\ldots\\?/g, '...') // ellipses
    .replace(/\\emph{([\w\d\s\$\-]+)}/g, '$1') // \emph{text}
    .replace(/\\text(it|sc){([\w\d\s']+)}/g, '$2') // \textit{text} && \textsc{text}
    .replace(/\\begin{gather\*}([\s\S]*?)\\end{gather\*}/g, '\\[$1\\]')
}

const cleanCustomLatexCommands = (paragraph: string) => {
  return paragraph.replace(/\\([i|I])dEst\\/g, '$1.e.')
    .replace(/\\([e|E])xempliGratia(?:\\?)/g, '$1.g.')
    .replace(/\\DotOp/g, '.')
    .replace(/\\fourdots/g, '....')
    .replace(/\\fivedots/g, '.....')
    .replace(/\\BarOp/g, '|')
    .replace(/\\Implies/g, '⊃')
    .replace(/\\BookTitle{([\w\s\-\.\\]+)}/g, (_, cg) => cg.replace(/\\/g, ''))
    .replace(/\\German{([\w\s]+)}/g, '$1')
    .replace(/\\DPtypo{.*?}{(.*?)}/g, '$1')
    .replace(/\\PropERef{([\d\.]+)}/g, '$1')
    .replace(/\\Not{((?:[^{}](?!Not))*)}/g, '\\thicksim $1')
    .replace(/\\Not{((?:[^{}](?!Not))*)}/g, '\\thicksim $1')
    .replace(/\\Not{((?:[^{}](?!Not))*)}/g, '\\thicksim $1')
    .replace(/\\Not{((?:[^{}](?!Not))*)}/g, '\\thicksim $1')
    .replace(/\\(very)?stretchyspace\s/g, '')
    .replace(/\\AllowBreak/g, () => '')
    .replace(/\\Illustration(?:\[.*?\])?{(.*?)}/g, (_, cg) => `IMG_REPLACE_${cg}`)
}

export const cleanLatexParagraph = (paragraph: string) => {
  const cleaners = [cleanQuoting, cleanLatexisms, cleanCustomLatexCommands, cleanEdges]
  return cleaners.reduce((acc, cleaner) => cleaner(acc), paragraph.split('\n').join(' '))
}