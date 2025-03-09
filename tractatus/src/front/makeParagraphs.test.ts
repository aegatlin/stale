import { expect } from "chai";
import { makeParagraphs } from "./makeParagraphs";

describe('makeParagraphs', () => {
  it('generates simple paragraphs', () => {
    const text = 'blah blah\nyada yada'

    expect(makeParagraphs(text)).to.deep.equal(['blah blah', 'yada yada'])
  })

  it('generates paragraphs with an image', () => {
    const text = 'blah\nblah IMG_REPLACE_cube yada yada'
    const expected = ['blah', 'blah', 'IMG_REPLACE_cube', 'yada yada']
    
    expect(makeParagraphs(text)).to.deep.equal(expected)
  })

  it('generates paragraphs with multiple images', () => {
    const text = 'blah blah IMG_REPLACE_brackets01-en yada yada IMG_REPLACE_brackets05-en hurry hurry IMG_REPLACE_brackets03-en yahtzee!\nHowever, we all need is IMG_REPLACE_space I believe'
    const expected = ['blah blah', 'IMG_REPLACE_brackets01-en', 'yada yada', 'IMG_REPLACE_brackets05-en', 'hurry hurry', 'IMG_REPLACE_brackets03-en', 'yahtzee!','However, we all need is', 'IMG_REPLACE_space', 'I believe']

    expect(makeParagraphs(text)).to.deep.equal(expected)
  })

  it('generates paragraphs with ending images', () => {
    expect(makeParagraphs('blah blah IMG_REPLACE_cube')).to.deep.equal(['blah blah', 'IMG_REPLACE_cube'])
  })
})