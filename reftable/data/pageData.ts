import { AlphabetArticle } from '../src/code/articles/AlphabetArticle'
import { HebrewArticle } from '../src/code/articles/HebrewArticle'
import { NatoPhoneticArticle } from '../src/code/articles/NatoPhoneticArticle'
import { SpanishArticle } from '../src/code/articles/SpanishArticle'
import { IGroupPage } from '../src/code/GroupPage'
import { gitCheatSheet } from './codingData/gitCheatSheet'
import { formalFallaciesCheatSheet } from './logicData/logicalFallacies'
import { pokemonTable } from './gamingData/pokemon'
import { physicalConstantsTable } from './scienceData/physicalConstants'
import { pixelPrintComparisonTable } from './photographyData/pixelPrintComparison'
import { megapixelPrintSizesTable } from './photographyData/megapixelPrintSizes'
import { arabicTable } from './alphabetData/arabic'
import { frenchTable } from './alphabetData/french'
import { germanTable } from './alphabetData/german'
import { greekTable } from './alphabetData/greek'
import { hebrewConsonantsTable, hebrewVowelsTable } from './alphabetData/hebrew'
import { spanishTable } from './alphabetData/spanish'
import { russianTable } from './alphabetData/russian'
import { natoPhoneticTable } from './alphabetData/natoPhonetic'
import { koreanConsonantsTable, koreanVowelsTable } from './alphabetData/korean'
import {
  japaneseKatakanaTable,
  japaneseHiriganaTable
} from './alphabetData/japanese'

export namespace Page {
  export enum Type {
    Table,
    CheatSheet
  }

  export class Alphabet {
    static toString = () => 'alphabet'
    static Arabic = 'arabic'
    static French = 'french'
    static German = 'german'
    static Greek = 'greek'
    static Hebrew = 'hebrew'
    static Japanese = 'japanese'
    static Korean = 'korean'
    static NatoPhonetic = 'nato-phonetic'
    static Russian = 'russian'
    static Spanish = 'spanish'
  }

  export class Coding {
    static toString = () => 'coding'
    static Git = 'git'
  }

  export class Gaming {
    static toString = () => 'gaming'
    static Pokemon = 'pokemon'
  }

  export class Logic {
    static toString = () => 'logic'
    static FormalFallacies = 'formal-fallacies'
  }

  export class Photography {
    static toString = () => 'photography'
    static MegapixelPrintSize = 'megapixel-print-sizes'
    static PixelPrintComparison = 'pixel-print-comparison'
  }

  export class Science {
    static toString = () => 'science'
    static PhysicalConstants = 'physical-constants'
  }
}

export const pages: { [key: string]: IGroupPage } = {
  [`${Page.Alphabet}`]: {
    pathname: `/${Page.Alphabet}`,
    pageTitle: 'Alphabet',
    description:
      'A collection of alphabet tables, charts, and cheatsheets to help you learn your next language.',
    groupName: 'Alphabet',
    contents: [AlphabetArticle],
    pages: {
      [Page.Alphabet.Arabic]: {
        pageType: Page.Type.Table,
        page: {
          pathname: `/${Page.Alphabet}/${Page.Alphabet.Arabic}`,
          pageTitle: 'Arabic Alphabet',
          description: 'Arabic alphabet table by reftable.com.',
          contents: [arabicTable]
        }
      },
      [Page.Alphabet.French]: {
        pageType: Page.Type.Table,
        page: {
          pathname: `/${Page.Alphabet}/${Page.Alphabet.French}`,
          pageTitle: 'French Alphabet',
          description: 'French alphabet table by reftable.com.',
          contents: [frenchTable]
        }
      },
      [Page.Alphabet.German]: {
        pageType: Page.Type.Table,
        page: {
          pathname: `/${Page.Alphabet}/${Page.Alphabet.German}`,
          pageTitle: 'German Alphabet',
          description: 'German alphabet table by reftable.com',
          contents: [germanTable]
        }
      },
      [Page.Alphabet.Greek]: {
        pageType: Page.Type.Table,
        page: {
          pathname: `/${Page.Alphabet}/${Page.Alphabet.Greek}`,
          pageTitle: 'Greek Alphabet',
          description: 'Greek alphabet table by reftable.com.',
          contents: [greekTable]
        }
      },
      [Page.Alphabet.Hebrew]: {
        pageType: Page.Type.Table,
        page: {
          pathname: `/${Page.Alphabet}/${Page.Alphabet.Hebrew}`,
          pageTitle: 'Hebrew Alphabet',
          description:
            'A simple chart designed to help English speakers learn the 22 letters in the Hebrew alphabet in square, cursive and Rashi scripts. ',
          contents: [hebrewConsonantsTable, hebrewVowelsTable, HebrewArticle]
        }
      },
      [Page.Alphabet.Japanese]: {
        pageType: Page.Type.Table,
        page: {
          pathname: `/${Page.Alphabet}/${Page.Alphabet.Japanese}`,
          pageTitle: 'Japanese Alphabet',
          description:
            'Japanese alphabet tables displaying information related to the Katakana character set and the Hirigana character set, by reftable.com.',
          contents: [japaneseKatakanaTable, japaneseHiriganaTable]
        }
      },
      [Page.Alphabet.Korean]: {
        pageType: Page.Type.Table,
        page: {
          pathname: `/${Page.Alphabet}/${Page.Alphabet.Korean}`,
          pageTitle: 'Korean Alphabet',
          description:
            'A consonant table and vowel table for the Korean alphabet',
          contents: [koreanConsonantsTable, koreanVowelsTable]
        }
      },
      [Page.Alphabet.NatoPhonetic]: {
        pageType: Page.Type.Table,
        page: {
          pathname: `/${Page.Alphabet}/${Page.Alphabet.NatoPhonetic}`,
          pageTitle: 'NATO Phonetic Alphabet',
          description: 'A NATO phonetic alphabet table by reftable.com.',
          contents: [natoPhoneticTable, NatoPhoneticArticle]
        }
      },
      [Page.Alphabet.Russian]: {
        pageType: Page.Type.Table,
        page: {
          pathname: `/${Page.Alphabet}/${Page.Alphabet.Russian}`,
          pageTitle: 'Russian Alphabet',
          description:
            'A table of the Russian alphabet, which uses the Cyrillic Script',
          contents: [russianTable]
        }
      },
      [Page.Alphabet.Spanish]: {
        pageType: Page.Type.Table,
        page: {
          pathname: `/${Page.Alphabet}/${Page.Alphabet.Spanish}`,
          pageTitle: 'Spanish Alphabet',
          description:
            'The table is a simple, interactive tool that helps English speakers learn the name and pronunciation of the  27 letters (5 vowels, 21 consonants) in the Spanish alphabet.',
          contents: [spanishTable, SpanishArticle]
        }
      }
    }
  },
  [`${Page.Coding}`]: {
    pathname: `/${Page.Coding}`,
    pageTitle: 'Coding',
    description:
      'A collection of coding and programming related tables, charts, and cheatsheets to help you while you work.',
    groupName: 'Coding',
    contents: [],
    pages: {
      [Page.Coding.Git]: {
        pageType: Page.Type.CheatSheet,
        page: {
          pageTitle: 'Git Cheat Sheet',
          pathname: `/${Page.Coding}/${Page.Coding.Git}`,
          description: 'A cheat sheet for the most common git commands.',
          contents: [gitCheatSheet]
        }
      }
    }
  },
  [`${Page.Gaming}`]: {
    pathname: `/${Page.Gaming}`,
    pageTitle: 'Gaming',
    description:
      'A collection of gaming related tables, charts, and cheatsheets to help you level up you gaming skills.',
    groupName: 'Gaming',
    contents: [],
    pages: {
      [Page.Gaming.Pokemon]: {
        pageType: Page.Type.Table,
        page: {
          pathname: `/${Page.Gaming}/${Page.Gaming.Pokemon}`,
          pageTitle: 'Pokemon Type Strengths and Weaknesses',
          description:
            'A pokemon table displaying each Pokemon type and what other types that type is strong and weak against, by reftable.com.',
          contents: [pokemonTable]
        }
      }
    }
  },
  [`${Page.Logic}`]: {
    pathname: `/${Page.Logic}`,
    pageTitle: 'Logic',
    description:
      'A collection of logic related tables, charts, and cheatsheets to help you improve your critical thinking skills.',
    groupName: 'Logic',
    contents: [],
    pages: {
      [Page.Logic.FormalFallacies]: {
        pageType: Page.Type.CheatSheet,
        page: {
          pathname: `/${Page.Logic}/${Page.Logic.FormalFallacies}`,
          pageTitle: 'Formal Fallacies',
          description: 'A cheat sheet for formal fallacies, by reftable.com.',
          contents: [formalFallaciesCheatSheet]
        }
      }
    }
  },
  [`${Page.Photography}`]: {
    pathname: `/${Page.Photography}`,
    pageTitle: 'Photography',
    description:
      'A collection of photography related tables, charts, and cheatsheets to help you improve as a photographer.',
    groupName: 'Photography',
    contents: [],
    pages: {
      [Page.Photography.MegapixelPrintSize]: {
        pageType: Page.Type.Table,
        page: {
          pathname: `/${Page.Photography}/${Page.Photography.MegapixelPrintSize}`,
          pageTitle: 'Megapixel Print Sizes',
          description: 'A megapixel to print size chart for photography.',
          contents: [megapixelPrintSizesTable]
        }
      },
      [Page.Photography.PixelPrintComparison]: {
        pageType: Page.Type.Table,
        page: {
          pathname: `/${Page.Photography}/${Page.Photography.PixelPrintComparison}`,
          pageTitle: 'Pixel-Print Comparison Chart',
          description: 'A pixel and print comparison chart for photography.',
          contents: [pixelPrintComparisonTable]
        }
      }
    }
  },
  [`${Page.Science}`]: {
    pathname: `/${Page.Science}`,
    pageTitle: 'Science',
    description:
      'A collection of science tables, charts, and cheatsheets to help you while you work.',
    groupName: 'Science',
    contents: [],
    pages: {
      [Page.Science.PhysicalConstants]: {
        pageType: Page.Type.Table,
        page: {
          pathname: `/${Page.Science}/${Page.Science.PhysicalConstants}`,
          pageTitle: 'Physical Constants',
          description: 'A physical constants table by reftable.com.',
          contents: [physicalConstantsTable]
        }
      }
    }
  }
}
