import { CheatSheet, ICheatSheet } from './cheat-sheet/CheatSheet'
import { Layout } from './layout/Layout'

export interface ICheatSheetPage {
  pathname: string
  pageTitle: string
  description: string
  contents: ICheatSheet[]
}

export const CheatSheetPage: React.FC<{ cheatSheetPage: ICheatSheetPage }> = ({
  cheatSheetPage,
}) => {
  const { pathname, pageTitle, description, contents } = cheatSheetPage
  const layouProps = {
    title: `${pageTitle} | Reftable`,
    pathname,
    pageTitle,
    description,
  }

  return (
    <Layout {...layouProps}>
      {contents.map((cheatSheet, i) => (
        <CheatSheet key={i} cheatSheet={cheatSheet} />
      ))}
    </Layout>
  )
}
