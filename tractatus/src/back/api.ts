import * as path from 'path'
import { Claim } from "../Claim";
import { makeClaims } from "./makeClaims";
import { cleanLatexParagraph } from "./cleanLatexParagraph";
import { readFileSync } from "fs";

const readLatexFile = (file: string): String[] => {
  return readFileSync(file, 'utf8')
    .split('\n\n')
    .map(paragraph => cleanLatexParagraph(paragraph))
}
const introduction: String[] = readLatexFile(path.resolve(`${__dirname}/../../book/introduction.tex`))
const preface: String[] = readLatexFile(path.resolve(`${__dirname}/../../book/preface.tex`))
const claims: Claim[] = makeClaims()

export const api = {
  book: {
    data: {
      introduction,
      preface,
      claims
    }
  }
}
