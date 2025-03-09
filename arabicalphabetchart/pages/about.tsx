import Head from 'next/head'
import { Header } from '../src/Header'

export default function About() {
  const text =
    'Arabic Alphabet Chart can bbe installed like a mobile app. On iPhone, use Safari, and in the share menu select "Add to Home Screen". On Android '
  return (
    <>
      <Head>
        <title>About Arabic Alphabet Chart</title>
        <meta name="description" content="About Arabic Alphabet Chart" />
      </Head>
      <Header />
      <main className="my-16 mx-8 flex flex-col items-center text-center">
        <div className="max-w-lg space-y-16">
          <div>
            Arabic Alphabet Chart is a{' '}
            <a href="https://gatlin.io" className="underline">
              gatlin.io
            </a>{' '}
            project.
          </div>
          <div>
            {
              "Feedback is appreciated. How can I make the site better for you? If you are on desktop or tablet, use the feedback widget on the right side of the screen. (If you can't find it, it might be ad/tracker blocked.)"
            }
          </div>
          <div className="space-y-4">
            <div>
              Arabic Alphabet Chart can be installed like a mobile app on
            </div>
            <ul className="space-y-2">
              <li>
                <a
                  className="underline"
                  href="https://support.google.com/chrome/answer/9658361?co=GENIE.Platform%3DAndroid"
                >
                  Android
                </a>
              </li>
              <li>
                <a
                  className="underline"
                  href="https://support.google.com/chrome/answer/9658361?co=GENIE.Platform%3DDesktop"
                >
                  Desktop
                </a>
              </li>
              <li>iPhone</li>
            </ul>
            <div>
              {
                'To install on iPhone, open in Safari and select "Add to Home Screen" located in the share menu.'
              }
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
