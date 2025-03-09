import { Layout } from './layout/Layout'
import { Group } from './Group'
import { ITablePage } from './TablePage'
import { ICheatSheetPage } from './CheatSheetPage'
import { Page } from '../../data/pageData'

interface IPage {
  pageType: Page.Type
  page: ITablePage | ICheatSheetPage
}

export interface IPages {
  [key: string]: IPage
}

export interface IGroupPage {
  pathname: string
  pageTitle: string
  description: string
  groupName: string
  contents: (() => JSX.Element)[]
  pages: IPages
}

export const GroupPage: React.FC<{ groupPage: IGroupPage }> = ({
  groupPage,
}) => {
  const {
    pathname,
    pageTitle,
    description,
    contents,
    groupName,
    pages,
  } = groupPage

  return (
    <Layout
      title={`${pageTitle} | Reftable`}
      description={description}
      pathname={pathname}
      pageTitle={pageTitle}
    >
      <Group group={{ groupName, pages }} />
      {contents.map((Element, i) => (
        <Element key={i} />
      ))}
    </Layout>
  )
}
