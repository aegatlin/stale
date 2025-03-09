import { useRouter } from 'next/router'
import { Groups } from '../code/Groups'
import { Layout } from '../code/layout/Layout'

const Index: React.FC = () => {
  const { pathname } = useRouter()

  return (
    <Layout
      title={'reftable.com'}
      description={'Find the reference table you need, fast.'}
      pathname={pathname}
      pageTitle="Reftable"
    >
      <Groups />
    </Layout>
  )
}

export default Index
