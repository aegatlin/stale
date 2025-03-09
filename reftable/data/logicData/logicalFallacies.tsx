import { ICheatSheet } from '../../src/code/cheat-sheet/CheatSheet'
import { DescriptionType } from '../../src/code/cheat-sheet/CheatSheetDatum'

export const formalFallaciesCheatSheet: ICheatSheet = {
  title: 'Formal Fallacies Cheat Sheet',
  description:
    "A formal fallacy is an error in logic that can be seen in the argument's form. All formal fallacies are specific types of non sequitur.",
  grouplessData: [
    {
      title: 'Appeal to probability',
      description: {
        text:
          'a statement that takes something for granted because it would probably be the case (or might be the case).',
        type: DescriptionType.String
      }
    },
    {
      title: 'Argument from fallacy (also known as the fallacy fallacy)',
      description: {
        text:
          'the assumption that if an argument for some conclusion is fallacious, then the conclusion is false.',
        type: DescriptionType.String
      }
    },
    {
      title: 'Base rate fallacy',
      description: {
        text:
          'making a probability judgment based on conditional probabilities, without taking into account the effect of prior probabilities.',
        type: DescriptionType.String
      }
    },
    {
      title: 'Conjunction fallacy',
      description: {
        text:
          'the assumption that an outcome simultaneously satisfying multiple conditions is more probable than an outcome satisfying a single one of them.',
        type: DescriptionType.String
      }
    },
    {
      title: 'Masked-man fallacy (illicit substitution of identicals)',
      description: {
        text:
          'the substitution of identical designators in a true statement can lead to a false one.',
        type: DescriptionType.String
      }
    }
  ],
  groups: [
    {
      title: 'Syllogistic Fallacies',
      description:
        'A syllogistic fallacy is a logical fallacy that occurs within a syllogism. (A syllogism is a kind of logical argument that applies deductive reasoning to arrive at a conclusion based on two or more propositions that are asserted or assumed to be true.)',
      contents: [
        {
          title:
            'Affirmative conclusion from a negative premise (illicit negative)',
          description: {
            type: DescriptionType.String,
            text:
              'a categorical syllogism has a positive conclusion, but at least one negative premise.'
          }
        },
        {
          title: 'Fallacy of exclusive premises',
          description: {
            type: DescriptionType.String,
            text:
              'a categorical syllogism that is invalid because both of its premises are negative.'
          }
        },
        {
          title: 'Fallacy of four terms (quaternio terminorum)',
          description: {
            type: DescriptionType.String,
            text: 'a categorical syllogism that has four terms.'
          }
        },
        {
          title: 'Illicit major',
          description: {
            type: DescriptionType.String,
            text:
              'a categorical syllogism that is invalid because its major term is not distributed in the major premise but distributed in the conclusion.'
          }
        },
        {
          title: 'Illicit minor',
          description: {
            type: DescriptionType.String,
            text:
              'a categorical syllogism that is invalid because its minor term is not distributed in the minor premise but distributed in the conclusion.'
          }
        },
        {
          title:
            'Negative conclusion from affirmative premises (illicit affirmative)',
          description: {
            type: DescriptionType.String,
            text:
              'a categorical syllogism has a negative conclusion but affirmative premises.'
          }
        },
        {
          title: 'Fallacy of the undistributed middle',
          description: {
            type: DescriptionType.String,
            text:
              'the middle term in a categorical syllogism is not distributed.'
          }
        },
        {
          title: 'Modal fallacy',
          description: {
            type: DescriptionType.String,
            text: 'confusing possibility with necessity.'
          }
        },
        {
          title: 'Modal scope fallacy',
          description: {
            type: DescriptionType.String,
            text:
              'a degree of unwarranted necessity is placed in the conclusion.'
          }
        }
      ]
    },
    {
      title: 'Propositional Fallacies',
      description:
        'A propositional fallacy is an error in logic that concerns compound propositions. For a compound proposition to be true, the truth values of its constituent parts must satisfy the relevant logical connectives that occur in it (most commonly: [and], [or], [not], [only if], [if and only if]). The following fallacies involve inferences whose correctness is not guaranteed by the behavior of those logical connectives, and hence, which are not logically guaranteed to yield true conclusions.',
      contents: [
        {
          title: 'Affirming a disjunct',
          description: {
            text:
              'concluding that one disjunct of a logical disjunction must be false because the other disjunct is true; A or B; A, therefore not B.',
            type: DescriptionType.String
          }
        },
        {
          title: 'Affirming the consequent',
          description: {
            text:
              'the antecedent in an indicative conditional is claimed to be true because the consequent is true; if A, then B; B, therefore A.',
            type: DescriptionType.String
          }
        },
        {
          title: 'Denying the antecedent',
          description: {
            text:
              'the consequent in an indicative conditional is claimed to be false because the antecedent is false; if A, then B; not A, therefore not B.',
            type: DescriptionType.String
          }
        }
      ]
    },
    {
      title: 'Quantification Fallacies',
      description:
        'A quantification fallacy is an error in logic where the quantifiers of the premises are in contradiction to the quantifier of the conclusion.',
      contents: [
        {
          title: 'Existential Fallacy',
          description: {
            type: DescriptionType.String,
            text:
              'an argument that has a universal premise and a particular conclusion.'
          }
        }
      ]
    }
  ]
}
