import { useEffect, useState } from 'react'
import { Search } from '../core/Search'
import { DemoWrapper } from './DemoWrapper'
import { fakePromise } from './fakePromise'

interface Item {
  id: string
  value: string
  relevance?: number
}

const db = [
  { id: 'one', value: 'this is a sentence' },
  { id: 'two', value: 'this is another sentence' },
  { id: 'three', value: 'unsurprisingly, this is yet another sentence' },
  { id: 'four', value: 'this is not another... jk it is' },
]

function search(
  q: string
): Promise<{ id: string; value: string; relevance: number }[]> {
  const results = db
    .map((item) => {
      return {
        ...item,
        relevance: item.value.match(new RegExp(q, 'g'))?.length ?? 0,
      }
    })
    .sort(({ relevance: ra }, { relevance: rb }) => ra - rb)
    .reverse()
    .filter(({ relevance }) => relevance > 0)

  return fakePromise(results, 100)
}

function Result({ hit: { id, value, relevance } }: { hit: Item }) {
  return (
    <div
      key={id}
      className="rounded-2xl p-4 hover:bg-gray-100"
      onClick={() => console.log(id, value, relevance)}
    >
      {value} : {relevance}
    </div>
  )
}

export function DemoSearch() {
  const [query, setQuery] = useState('')
  const [isFetching, setIsFetching] = useState(false)
  const [results, setResults] = useState([])

  useEffect(() => {
    setIsFetching(true)
    search(query).then((r) => {
      setResults(r)
      setIsFetching(false)
    })
  }, [query])

  const resultsComponent = results.map((r) => <Result key={r.id} hit={r} />)

  return (
    <DemoWrapper title="Search">
      <div className="space-y-8">
        <p>Search uses Dropdown and InputText internally.</p>
        <Search
          query={query}
          updateQuery={(q) => setQuery(q)}
          isFetching={isFetching}
          results={resultsComponent}
        />
      </div>
    </DemoWrapper>
  )
}
