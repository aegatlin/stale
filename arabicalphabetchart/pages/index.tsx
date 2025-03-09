import Head from 'next/head'
import { Header } from '../src/Header'
import TableRoot from '../src/table/TableRoot'

export default function Index() {
  const title = 'Arabic Alphabet Chart'
  const description =
    'Study the Arabic alphabet with Arabic Alphabet Chart. A simple, intuitive, and interactive reference table to quickly learn the Arabic letters.'

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <Header />
      <main className="flex flex-col items-center md:my-12">
        <TableRoot />
      </main>
    </>
  )
}
