import { useRouter } from 'next/router'
import { pages, Page } from '../../../data/pageData'
import { CheatSheetPage, ICheatSheetPage } from '../../code/CheatSheetPage'
import { ITablePage, TablePage } from '../../code/TablePage'

export default (): JSX.Element => {
  const router = useRouter()
  const { groupName, pageName } = router.query
  if (!groupName || !pageName) return null
  const page = pages[groupName as string].pages[pageName as string]

  if (page.pageType === Page.Type.Table) {
    return <TablePage tablePage={page.page as ITablePage} />
  }

  if (page.pageType === Page.Type.CheatSheet) {
    return <CheatSheetPage cheatSheetPage={page.page as ICheatSheetPage} />
  }

  return null
}
