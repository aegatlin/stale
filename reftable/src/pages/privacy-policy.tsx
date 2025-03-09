import { Article } from '../code/Article'
import { Layout } from '../code/layout/Layout'
import { useRouter } from 'next/router'

const PrivacyPolicy: React.FC = () => {
  const title = 'Privacy Policy | Reftable'
  const description =
    'This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.'
  const { pathname } = useRouter()

  return (
    <Layout
      title={title}
      description={description}
      pathname={pathname}
      pageTitle="Privacy Policy"
    >
      <Article>
        <p>Effective date: November 17, 2019</p>
        <p>
          Reftable (&quot;us&quot;, &quot;we&quot;, or &quot;our&quot;) operates
          the https://reftable.com/ website (hereinafter referred to as the
          &quot;Service&quot;).
        </p>
        <p>
          This page informs you of our policies regarding the collection, use,
          and disclosure of personal data when you use our Service and the
          choices you have associated with that data. Our Privacy Policy for
          reftable is created with the help of the PrivacyPolicies.com Privacy
          Policy Generator.
        </p>
        <p>
          We use your data to provide and improve the Service. By using the
          Service, you agree to the collection and use of information in
          accordance with this policy. Unless otherwise defined in this Privacy
          Policy, the terms used in this Privacy Policy have the same meanings
          as in our Terms and Conditions, accessible from https://reftable.com/
        </p>
        <h2>Information Collection And Use</h2>
        <p>
          We collect several different types of information for various purposes
          to provide and improve our Service to you.
        </p>
        <h2>Types of Data Collected</h2>
        <h3>Personal Data</h3>
        <p>
          While using our Service, we may ask you to provide us with certain
          personally identifiable information that can be used to contact or
          identify you (&quot;Personal Data&quot;). Personally identifiable
          information may include, but is not limited to:
        </p>
        <ul>
          <li>Cookies and Usage Data</li>
        </ul>
        <h3>Usage Data</h3>
        <p>
          We may also collect information on how the Service is accessed and
          used (&quot;Usage Data&quot;). This Usage Data may include information
          such as your computer&apos;s Internet Protocol address (e.g. IP
          address), browser type, browser version, the pages of our Service that
          you visit, the time and date of your visit, the time spent on those
          pages, unique device identifiers and other diagnostic data.
        </p>
        <h3>Tracking & Cookies Data</h3>
        <p>
          We use cookies and similar tracking technologies to track the activity
          on our Service and hold certain information.
        </p>
        <p>
          Cookies are files with small amount of data which may include an
          anonymous unique identifier. Cookies are sent to your browser from a
          website and stored on your device. Tracking technologies also used are
          beacons, tags, and scripts to collect and track information and to
          improve and analyze our Service.
        </p>
        <p>
          You can instruct your browser to refuse all cookies or to indicate
          when a cookie is being sent. However, if you do not accept cookies,
          you may not be able to use some portions of our Service. You can learn
          more how to manage cookies in the Browser Cookies Guide.
        </p>
        <p>Examples of Cookies we use:</p>
        <ul>
          <li>
            Session Cookies. We use Session Cookies to operate our Service.
          </li>
          <li>
            Preference Cookies. We use Preference Cookies to remember your
            preferences and various settings.
          </li>
          <li>
            Security Cookies. We use Security Cookies for security purposes.
          </li>
        </ul>
        <p>We use cookies from the following third parties:</p>
        <ul>
          <li>
            Google Analytics: We use{' '}
            <a href="https://www.google.com/analytics/">Google Analytics</a>{' '}
            Google Analytics to collect statistical information regarding how
            the website is used. This information is not personally
            identifiable.
          </li>
          <li>
            Google AdSense: We use{' '}
            <a href="https://www.google.com/adsense/">Google AdSense</a> to
            display ads on some of our pages. Google AdSense may use user data.
            You can review Google&apos;s privacy policy regarding advertising{' '}
            <a href="https://www.google.com/policies/privacy/ads/">here</a>.
            That page also provides information on how to manage what
            information is collected and how to opt out of collection.
          </li>
          <li>
            reCAPTCHA: We have implemented reCAPTCHA on our site and your their
            use of reCAPTCHA is subject to the{' '}
            <a href="https://www.google.com/intl/en/policies/privacy/">
              Google Privacy Policy
            </a>{' '}
            and{' '}
            <a href="https://www.google.com/intl/en/policies/terms/">
              Terms of Use
            </a>
            .
          </li>
          <li>
            Hotjar: We use <a href="http://www.hotjar.com">Hotjar</a> in order
            to better understand our users’ needs and to optimize this service
            and experience. Hotjar is a technology service that helps us better
            understand our users experience (e.g. how much time they spend on
            which pages, which links they choose to click, what users do and
            don’t like, etc.) and this enables us to build and maintain our
            service with user feedback. Hotjar uses cookies and other
            technologies to collect data on our users’ behavior and their
            devices (in particular device&apos;s IP address (captured and stored
            only in anonymized form), device screen size, device type (unique
            device identifiers), browser information, geographic location
            (country only), preferred language used to display our website).
            Hotjar stores this information in a pseudonymized user profile.
            Neither Hotjar nor we will ever use this information to identify
            individual users or to match it with further data on an individual
            user. For further details, please see Hotjar’s privacy policy by
            clicking on{' '}
            <a href="https://www.hotjar.com/legal/policies/privacy">
              this link
            </a>
            . You can opt-out to the creation of a user profile, Hotjar’s
            storing of data about your usage of our site and Hotjar’s use of
            tracking cookies on other websites by following this{' '}
            <a href="https://www.hotjar.com/legal/compliance/opt-out">
              opt-out link
            </a>
            .
          </li>
        </ul>
        <h2>How to disable cookies</h2>
        <p>
          Most modern browsers allow you to control your cookie settings for all
          websites that you browse. You can disable cookie deployment completely
          by editing your browser settings, however in doing this you may be
          limiting the functionality that is displayed on our website. To learn
          how to disable cookies on your preferred browser we recommend reading{' '}
          <a href="https://support.google.com/accounts/bin/answer.py?hl=en&answer=61416">
            this advice posted by Google
          </a>
          .
        </p>
        <p>
          If you are concerned about cookies tracking your movements on the
          Internet then you may be concerned about spyware. Spyware is the name
          given to a particular band of cookies that track personal information
          about you. There are many antispyware programs that you can use to
          prevent this from happening. To learn more about antispyware software,
          visit http://en.wikipedia.org/wiki/Spyware. You call also disable
          Google Analytics on all websites by downloading the{' '}
          <a href="https://tools.google.com/dlpage/gaoptout">
            Google Analytics Opt-out Browser Add-on
          </a>
          .
        </p>
        <h2>Use of Data</h2>
        <p>Reftable uses the collected data for various purposes:</p>
        <ul>
          <li>To provide and maintain the Service</li>
          <li>To notify you about changes to our Service</li>
          <li>
            To allow you to participate in interactive features of our Service
            when you choose to do so
          </li>
          <li>To provide customer care and support</li>
          <li>
            To provide analysis or valuable information so that we can improve
            the Service
          </li>
          <li>To monitor the usage of the Service</li>
          <li>To detect, prevent and address technical issues</li>
        </ul>
        <h2>Transfer Of Data</h2>
        <p>
          Your information, including Personal Data, may be transferred to — and
          maintained on — computers located outside of your state, province,
          country or other governmental jurisdiction where the data protection
          laws may differ than those from your jurisdiction.
        </p>
        <p>
          If you are located outside United States and choose to provide
          information to us, please note that we transfer the data, including
          Personal Data, to United States and process it there.
        </p>
        <p>
          Your consent to this Privacy Policy followed by your submission of
          such information represents your agreement to that transfer.
        </p>
        <p>
          Reftable will take all steps reasonably necessary to ensure that your
          data is treated securely and in accordance with this Privacy Policy
          and no transfer of your Personal Data will take place to an
          organization or a country unless there are adequate controls in place
          including the security of your data and other personal information.
        </p>
        <h2>Disclosure Of Data</h2>
        <h3>Legal Requirements</h3>
        <p>
          Reftable may disclose your Personal Data in the good faith belief that
          such action is necessary to:
        </p>
        <ul>
          <li>To comply with a legal obligation</li>
          <li>To protect and defend the rights or property of Reftable</li>
          <li>
            To prevent or investigate possible wrongdoing in connection with the
            Service
          </li>
          <li>
            To protect the personal safety of users of the Service or the public
          </li>
          <li>To protect against legal liability</li>
        </ul>
        <h2>Security Of Data</h2>
        <p>
          The security of your data is important to us, but remember that no
          method of transmission over the Internet, or method of electronic
          storage is 100% secure. While we strive to use commercially acceptable
          means to protect your Personal Data, we cannot guarantee its absolute
          security.
        </p>
        <h2>Service Providers</h2>
        <p>
          We may employ third party companies and individuals to facilitate our
          Service (&quot;Service Providers&quot;), to provide the Service on our
          behalf, to perform Service-related services or to assist us in
          analyzing how our Service is used.
        </p>
        <p>
          These third parties have access to your Personal Data only to perform
          these tasks on our behalf and are obligated not to disclose or use it
          for any other purpose.
        </p>
        <h3>Analytics</h3>
        <p>
          We may use third-party Service Providers to monitor and analyze the
          use of our Service.
        </p>
        <ul>
          <li>
            Google Analytics Google Analytics is a web analytics service. Read
            the Privacy Policy for Google Analytics here:
            https://policies.google.com/privacy?hl=en-US
          </li>
          <li>
            Hotjar: We use <a href="http://www.hotjar.com">Hotjar</a> in order
            to better understand our users’ needs and to optimize this service
            and experience. Hotjar is a technology service that helps us better
            understand our users experience (e.g. how much time they spend on
            which pages, which links they choose to click, what users do and
            don’t like, etc.) and this enables us to build and maintain our
            service with user feedback.
          </li>
        </ul>
        <h2>Links To Other Sites</h2>
        <p>
          Our Service may contain links to other sites that are not operated by
          us. If you click on a third party link, you will be directed to that
          third party&apos;s site. We strongly advise you to review the Privacy
          Policy of every site you visit.
        </p>
        <p>
          We have no control over and assume no responsibility for the content,
          privacy policies or practices of any third party sites or services.
        </p>
        <h2>Children&apos;s Privacy</h2>
        <p>
          Our Service does not address anyone under the age of 18
          (&quot;Children&quot;).
        </p>
        <p>
          We do not knowingly collect personally identifiable information from
          anyone under the age of 18. If you are a parent or guardian and you
          are aware that your Children has provided us with Personal Data,
          please contact us. If we become aware that we have collected Personal
          Data from children without verification of parental consent, we take
          steps to remove that information from our servers.
        </p>
        <h2>Changes To This Privacy Policy</h2>
        <p>
          We may update our Privacy Policy from time to time. We will notify you
          of any changes by posting the new Privacy Policy on this page.
        </p>
        <p>
          We will let you know via email and/or a prominent notice on our
          Service, prior to the change becoming effective and update the
          &quot;effective date&quot; at the top of this Privacy Policy.
        </p>
        <p>
          You are advised to review this Privacy Policy periodically for any
          changes. Changes to this Privacy Policy are effective when they are
          posted on this page.
        </p>
        <h2>Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us
          by email: team@aegleg.com
        </p>
      </Article>
    </Layout>
  )
}

export default PrivacyPolicy
