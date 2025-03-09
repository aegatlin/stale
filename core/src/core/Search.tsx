import { Loader, Search as SearchIcon } from 'lucide-react'
import { ReactNode } from 'react'
import { Dropdown } from './Dropdown'
import { InputText } from './InputText'

interface SearchProps {
  query: string
  updateQuery: (q: string) => void
  isFetching: boolean
  results: ReactNode[]
}

export function Search({
  query,
  updateQuery,
  isFetching,
  results,
}: SearchProps) {
  const isResults = results.length > 0

  return (
    <Dropdown>
      <Dropdown.Input>
        <div className="flex items-center justify-between">
          <InputText
            value={query}
            placeholder={'try "is"...'}
            onChange={(e) => updateQuery(e.target.value)}
          />
          <div className="absolute right-0 mx-4 text-gray-400">
            <SearchIcon />
          </div>
        </div>
      </Dropdown.Input>
      {query && (
        <Dropdown.Items>
          {isFetching ? (
            <div className="flex h-32 items-center justify-center">
              <Loader className="animate-spin" />
            </div>
          ) : isResults ? (
            <div>{results}</div>
          ) : (
            <div className="flex h-32 items-center justify-center">
              No Results
            </div>
          )}
        </Dropdown.Items>
      )}
    </Dropdown>
  )
}
