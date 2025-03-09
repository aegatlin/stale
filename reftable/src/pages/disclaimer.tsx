import { Article } from '../code/Article'
import { Layout } from '../code/layout/Layout'
import { useRouter } from 'next/router'

const Disclaimer: React.FC = () => {
  const title = 'Disclaimer | Reftable'
  const description =
    'The information contained on https://reftable.com is for general information purposes only. We are open to feedback and suggestions, however Reftable assumes no responsibility for errors or omissions in the contents on the Service.'

  const { pathname } = useRouter()

  return (
    <Layout
      title={title}
      description={description}
      pathname={pathname}
      pageTitle="Disclaimer"
    >
      <Article>
        <h1>Disclaimer</h1>
        <p>Last updated: November 17, 2019</p>
        <p>
          The information contained on https://reftable.com website (the
          &quot;Service&quot;) is for general information purposes only.
        </p>
        <p>
          reftable.com assumes no responsibility for errors or omissions in the
          contents on the Service.
        </p>
        <p>
          In no event shall Reftable be liable for any special, direct,
          indirect, consequential, or incidental damages or any damages
          whatsoever, whether in an action of contract, negligence or other
          tort, arising out of or in connection with the use of the Service or
          the contents of the Service. Reftable reserves the right to make
          additions, deletions, or modification to the contents on the Service
          at any time without prior notice. Our Disclaimer for Reftable is
          managed by{' '}
          <a href="https://www.privacypolicies.com/">Privacy Policies</a>.
        </p>
        <p>
          Reftable does not warrant that the website is free of viruses or other
          harmful components.
        </p>
        <h2>External links disclaimer</h2>
        <p>
          https://reftable.com website may contain links to external websites
          that are not provided or maintained by or in any way affiliated with
          reftable.com.
        </p>
        <p>
          Please note that the Reftable does not guarantee the accuracy,
          relevance, timeliness, or completeness of any information on these
          external websites.
        </p>
      </Article>
    </Layout>
  )
}

export default Disclaimer
