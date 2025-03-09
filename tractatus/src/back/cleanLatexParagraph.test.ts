import { cleanLatexParagraph } from "./cleanLatexParagraph";
import { expect } from "chai";

describe('cleanLatexParagraph', () => {
  describe('latex syntax', () => {
    it('cleans paragraphs with \\emph', () => {
      expect(cleanLatexParagraph(`This is \\emph{truth-grounds}.`)).to.equal('This is truth-grounds.')
      expect(cleanLatexParagraph(`This is \\emph{The limits of my language}.`)).to.equal('This is The limits of my language.')
    })

    it('cleans paragraphs with \- sequences', () => {
      const paragraph = `{The picture presents the facts in logical space, the existence and non-ex\\-is\\-tence of atomic facts.}`
      const expected = `The picture presents the facts in logical space, the existence and non-existence of atomic facts.`

      expect(cleanLatexParagraph(paragraph)).to.equal(expected)
    })

    it('cleans paragraphs with double-quotes', () => {
      const paragraph = `{\`\`An atomic fact is thinkable''.}`
      const expected = '"An atomic fact is thinkable".'

      expect(cleanLatexParagraph(paragraph)).to.equal(expected)
    })

    it('cleans \~ when they are intedned as space delimiters', () => {
      const paragraph = `It has been shown by Dr Sheffer (\\BookTitle{Trans.\\ Am.\\ Math.\\ Soc.}, Vol.~XIV. pp.~481--488) that all...`
      const expected = "It has been shown by Dr Sheffer (Trans. Am. Math. Soc., Vol. XIV. pp. 481–488) that all..."

      expect(cleanLatexParagraph(paragraph)).to.equal(expected)
    })

    it('cleans paragraphs with en-dashes and em-dashes', () => {
      const paragraph = `{An atomic fact is thinkable---means: we can imagine it with en--dashes.}`
      const expected = 'An atomic fact is thinkable—means: we can imagine it with en–dashes.'

      expect(cleanLatexParagraph(paragraph)).to.equal(expected)
    })

    it('cleans paragraphs with triple single-quotes', () => {
      const paragraph = `{We must not say, \`\`The complex sign \`$aRb$' says \`$a$ stands in relation $R$ to $b$'{}'';}`
      const expected = `We must not say, "The complex sign '$aRb$' says '$a$ stands in relation $R$ to $b$'";`

      expect(cleanLatexParagraph(paragraph)).to.equal(expected)
    })

    it('cleans a paragraph containing \\textsc', () => {
      const paragraph = `\\textsc{Mr Wittgenstein's} book is good.`
      const expected = 'Mr Wittgenstein\'s book is good.'

      expect(cleanLatexParagraph(paragraph)).to.equal(expected)
    })

    it('cleans paragraphs with \\ldots', () => {
      const paragraph = `A random\\ldots paragraph\\ldots\\ It's pretty sweet, I guess.`
      const expected = 'A random... paragraph... It\'s pretty sweet, I guess.'

      expect(cleanLatexParagraph(paragraph)).to.equal(expected)
    })

    it('cleans paragraphs with \\begin{gather*} ... \\end{gather*}', () => {
      const paragraph = `We begin by looking at this equation:
\\begin{gather*}
a + b = c\\\\
b + c = d
\\end{gather*}
But these are just letters so, duh, it cannot be math!`
      const expected = `We begin by looking at this equation: \\[ a + b = c\\\\ b + c = d \\] But these are just letters so, duh, it cannot be math!`

      expect(cleanLatexParagraph(paragraph)).to.equal(expected)
    })

    it('cleans complex \\begin{gather*} ... \\end{gather*} paragraphs', () => {
      const paragraph = `{And thus we come to numbers: I define
\\begin{gather*}
x = \\Omega^{0}{}' x \\text{ Def. and}\\\\
\\Omega'\\Omega^{\\nu}{}'x = \\Omega^{\\nu+1}{}'x \\text{ Def.}
\\end{gather*}`
      const expected = `And thus we come to numbers: I define \\[ x = \\Omega^{0}{}' x \\text{ Def. and}\\\\ \\Omega'\\Omega^{\\nu}{}'x = \\Omega^{\\nu+1}{}'x \\text{ Def.} \\]`

      expect(cleanLatexParagraph(paragraph)).to.equal(expected)
    })

    it('cleans paragraphs with \\end{gather*} endings', () => {
      expect(cleanLatexParagraph(`I'm a fake paragraph \\end{gather*}`)).to.equal('I\'m a fake paragraph \\end{gather*}')
    })

    it('cleans paragraphs with \\end{array} endings', () => {
      expect(cleanLatexParagraph(`I'm a fake paragraph \\end{array}`)).to.equal('I\'m a fake paragraph \\end{array}')
    })
  })

  describe('custom latex functions', () => {
    it('cleans a paragraph containing \\idEst\\', () => {
      const paragraph = `{I like mangos, \\idEst\\, I like the word mangos. \\IdEst\\, MANGOS.}`
      const expected = 'I like mangos, i.e., I like the word mangos. I.e., MANGOS.'

      expect(cleanLatexParagraph(paragraph)).to.equal(expected)
    })

    it('cleans a paragraph containing \\exempliGratia\\', () => {
      const paragraph = `{I like fruit, \\exempliGratia\\, mangos. \\ExempliGratia\\, MANGOS. And, \\exempliGratia: Bananays!}`
      const expected = 'I like fruit, e.g., mangos. E.g., MANGOS. And, e.g.: Bananays!'

      expect(cleanLatexParagraph(paragraph)).to.equal(expected)
    })

    it('cleans paragraphs with \\German', () => {
      const paragraph = `Finally the Mystical (\\German{das Mystische}).`
      const expected = 'Finally the Mystical (das Mystische).'

      expect(cleanLatexParagraph(paragraph)).to.equal(expected)
    })

    it('cleans a paragraph containing \\BookTitle', () => {
      const paragraph = `\\BookTitle{Tractatus Logico-Philosophicus}, whether or not it prove.`
      const expected = 'Tractatus Logico-Philosophicus, whether or not it prove.'

      expect(cleanLatexParagraph(paragraph)).to.equal(expected)

      const paragraph2 = `It has been shown by Dr Sheffer (\\BookTitle{Trans.\\ Am.\\ Math.\\ Soc.}...).`
      const expected2 = 'It has been shown by Dr Sheffer (Trans. Am. Math. Soc....).'

      expect(cleanLatexParagraph(paragraph2)).to.equal(expected2)
    })

    it('cleans paragraphs with \\PropERef', () => {
      const paragraph = `Pizza, like, so good (\\PropERef{2.161}, \\PropERef{2.17}). See Schemata No.~\\PropERef{4.31} for more.`
      const expected = 'Pizza, like, so good (2.161, 2.17). See Schemata No. 4.31 for more.'

      expect(cleanLatexParagraph(paragraph)).to.equal(expected)
    })

    it('cleans paragraphs with \\DotOp', () => {
      const paragraph = `a.b == a \\DotOp b.`
      const expected = 'a.b == a . b.'

      expect(cleanLatexParagraph(paragraph)).to.equal(expected)
    })

    it('cleans paragraphs with \\fourdots', () => {
      expect(cleanLatexParagraph('I have a \\fourdots cat.')).to.equal('I have a .... cat.')
    })

    it('cleans paragraphs with \\fivedots', () => {
      expect(cleanLatexParagraph('I have a \\fivedots cat.')).to.equal('I have a ..... cat.')
    })

    it('cleans paragraphs with \\DPtypo', () => {
      const paragraph = `\\DPtypo{\\overline{N}}{N} total \\DPtypo{philosopher}{philosophers} are 2 \\DPtypo{+}{+_{c}} years old\\DPtypo{,}{}.`
      const expected = 'N total philosophers are 2 +_{c} years old.'

      expect(cleanLatexParagraph(paragraph)).to.equal(expected)
    })

    it('cleans paragraphs with \\Not', () => {
      const paragraph = `Looky: \`\`$p$'' and \`\`$\\Not{p}$'' in the connexion \`\`$\\Not{(p . \\Not{p})}$''. Neato!`
      const expected = 'Looky: "$p$" and "$\\thicksim p$" in the connexion "$\\thicksim (p . \\thicksim p)$". Neato!'

      expect(cleanLatexParagraph(paragraph)).to.equal(expected)

      const paragraph2 = `... just as in propositions like \`\`$\\Not{(p \\lor q)}$''...`
      const expected2 = "... just as in propositions like \"$\\thicksim (p \\lor q)$\"..."

      expect(cleanLatexParagraph(paragraph2)).to.equal(expected2)

    })

    it('clean paragraphs with a lot of embedded \\Not', () => {
      const paragraph = `namely $\\Not{\\Not{p}}$, $\\Not{\\Not{\\Not{\\Not{p}}}}$, etc., is indeed hardly to be believed`
      const expected = 'namely $\\thicksim \\thicksim p$, $\\thicksim \\thicksim \\thicksim \\thicksim p$, etc., is indeed hardly to be believed'

      expect(cleanLatexParagraph(paragraph)).to.equal(expected)
    })

    it('clean paragraphs with \\BarOp', () => {
      expect(cleanLatexParagraph(`It is the case that $p \\BarOp q$.`)).to.equal('It is the case that $p | q$.')
    })

    it('clean paragraphs with \\Implies', () => {
      expect(cleanLatexParagraph(`It is the case that $p \\Implies q$.`)).to.equal('It is the case that $p ⊃ q$.')
    })

    it('cleans \\DPtypo before \\PropERef', () => {
      const paragraph = `And it is easy to see that the propositional sign in No.~\\DPtypo{\\PropERef{4.42}}{\\PropERef{4.442}} expresses one truth-function.`
      const expected = 'And it is easy to see that the propositional sign in No. 4.442 expresses one truth-function.'

      expect(cleanLatexParagraph(paragraph)).to.equal(expected)
    })

    it('cleans paragraphs with \\stretchyspace', () => {
      const paragraph = `{\\stretchyspace
But here also the negative proposition is indirectly
constructed with the positive.}`
      const expected = 'But here also the negative proposition is indirectly constructed with the positive.'

      expect(cleanLatexParagraph(paragraph)).to.equal(expected)
    })

    it('cleans paragraphs with \\verystretchyspace', () => {
      const paragraph = `{\\verystretchyspace
But here also the negative proposition is indirectly
constructed with the positive.}`
      const expected = 'But here also the negative proposition is indirectly constructed with the positive.'

      expect(cleanLatexParagraph(paragraph)).to.equal(expected)
    })

    it('cleans paragraphs with \\AllowBreak', () => {
      expect(cleanLatexParagraph(`the world\\AllowBreak the presenting`)).to.equal('the world the presenting')
    })

    it('cleans paragraphs with \\Illustration', () => {
      const paragraph = `The form of cheese is written in our notation \\Illustration[0.1\\textwidth]{cheddar03-en} the form cream like dis: \\Illustration[0.4\\textwidth]{brie04-en} it is so \\Illustration{yummy-en}`
      const expected = `The form of cheese is written in our notation IMG_REPLACE_cheddar03-en the form cream like dis: IMG_REPLACE_brie04-en it is so IMG_REPLACE_yummy-en`

      expect(cleanLatexParagraph(paragraph)).to.equal(expected)
    })
  })

  it('cleans multiline paragraphs', () => {
    const paragraph = `{I am
the greatest
paragraph
that was
ever
written.}`
    const expected = 'I am the greatest paragraph that was ever written.'

    expect(cleanLatexParagraph(paragraph)).to.equal(expected)
  })
})