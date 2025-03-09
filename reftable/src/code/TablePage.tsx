import { Layout } from './layout/Layout'
import { ITable, TableWrapper } from './table/TableWrapper'

type Content = ITable | (() => JSX.Element)
const isITable = (o: Content): o is ITable => 'rows' in o

export interface ITablePage {
  pathname: string
  pageTitle: string
  description: string
  contents: Content[]
}

export const TablePage: React.FC<{ tablePage: ITablePage }> = ({
  tablePage,
}) => {
  const { pathname, pageTitle, description, contents } = tablePage
  const layoutProps = {
    title: `${pageTitle} | Reftable`,
    description,
    pageTitle,
    pathname,
  }

  return (
    <Layout {...layoutProps}>
      {contents.map((Content, i) => {
        if (!isITable(Content)) return <Content key={i} />
        return <TableWrapper key={i} table={Content} />
      })}
    </Layout>
  )
}
