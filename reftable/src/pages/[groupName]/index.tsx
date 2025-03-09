import { useRouter } from 'next/router'
import { pages } from '../../../data/pageData'
import { GroupPage } from '../../code/GroupPage'

export default (): JSX.Element => {
  const router = useRouter()
  const { groupName } = router.query
  if (!groupName) return null
  const groupPage = pages[groupName as string]
  return <GroupPage groupPage={groupPage} />
}
