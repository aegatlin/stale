import { Article } from '../code/Article'
import { Layout } from '../code/layout/Layout'
import { useRouter } from 'next/router'

const AboutUs: React.FC = () => {
  const title = 'About Us | Reftable'
  const description =
    'We are Austin and Lindsay, a couple building websites and tools that help online communities. Our vision is for reftable.com to contain the most useful and user friendly tables on the internet.'
  const { pathname } = useRouter()

  return (
    <Layout
      title={title}
      description={description}
      pathname={pathname}
      pageTitle="About Us"
    >
      <Article>
        <p>
          We are Austin and Lindsay, a couple building websites and tools that
          help online communities.
        </p>
        <p>
          We started reftable.com when we were frustrated that we couldn’t find
          an easy way to study the Arabic alphabet on mobile.
        </p>
        <p>
          We are not experts in all of the subjects represented within
          reftable.com. But, we are passionate learners that work with subject
          matter experts to make it easier for people to access useful reference
          information.
        </p>
        <p>
          If you’d like to get in contact with us for any reason, send us an
          email at team@aegleg.com.
        </p>
        <h2>Our vision</h2>
        <p>
          Our vision is for reftable.com to contain the most useful and user
          friendly tables on the internet.
        </p>
        <p>We want our users to be able to:</p>
        <ul>
          <li>
            Reference information they need regularly on their mobile phones,
            and offline.
          </li>
          <li>
            Get the information they’re looking for without having to wade
            through paragraphs of text.
          </li>
        </ul>
      </Article>
    </Layout>
  )
}

export default AboutUs
