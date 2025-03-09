import { Article } from '../code/Article'
import { Layout } from '../code/layout/Layout'
import { useRouter } from 'next/router'

const Contact: React.FC = () => {
  const title = 'Contact Us | Reftable'
  const description =
    'Please get in contact with us if your have corrections, feedback or suggestions. We’re also looking for contributors if you’re a domain expert in any of the topics we feature.'
  const { pathname } = useRouter()

  return (
    <Layout
      title={title}
      description={description}
      pathname={pathname}
      pageTitle="Contact Us"
    >
      <Article>
        <p>
          If you would like to get in contact with us for any reason, send us an
          email at team@aegleg.com.
        </p>
        <h2>Contribute</h2>
        <p>We’re looking for contributors!</p>
        <p>
          If you have an idea for a reference table, we’d love to hear it! Or,
          if you have expertise in any of Reftable’s topic areas, let us know.
          We’d love to feature content from domain experts that would add value
          to Reftable’s users.
        </p>
        <p>Please contact us at: team@aegleg.com</p>
        <h2>Collaborate</h2>
        <p>
          Reftable’s primary goal is to give people access to information in an
          uncluttered and intuitive format. We are open to collaborations if
          they are of value to our users. Please contact us at team@aegleg.com
          to discuss.
        </p>
      </Article>
    </Layout>
  )
}

export default Contact
