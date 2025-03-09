import NextLink from 'next/link'
import { Card } from '../src/core/Card'
import { Header } from '../src/core/Header'

function CodeLines({ lines }) {
  return (
    <code className="space-y-2 rounded-2xl bg-gray-50 p-4">
      {lines.map((l, i) => (
        <pre key={l + i}>{l}</pre>
      ))}
    </code>
  )
}

function LinkText({ href, text }) {
  return (
    <NextLink href={href}>
      <a className="text-blue-500">{text}</a>
    </NextLink>
  )
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <div className="mt-16 flex justify-center">
        <Card>
          <div className="flex max-w-lg flex-col space-y-4 p-8">
            <p>
              <LinkText href="https://github.com/aegatlin/core" text="Core" />{' '}
              is an experiment in component reusability.
            </p>
            <p>
              Experimental copying is available via{' '}
              <LinkText
                href="https://github.com/aegatlin/gin"
                text="aegatlin/gin"
              />
              :
            </p>
            <CodeLines
              lines={['npm i -g @aegatlin/gin', 'gin react core -h']}
            />
            <p>
              This is a{' '}
              <NextLink href="https://gatlin.io">
                <a className="text-blue-500">gatlin.io</a>
              </NextLink>{' '}
              project.
            </p>
          </div>
        </Card>
      </div>
    </>
  )
}
