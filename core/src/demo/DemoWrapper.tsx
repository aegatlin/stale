import { Github } from 'lucide-react'
import Link from 'next/link'
import { Card } from '../core/Card'

export function DemoWrapper({ title, children }) {
  return (
    <Card>
      <div className="w-80 p-8">
        <div className="mb-4 flex items-center justify-between border-b pb-4 text-4xl">
          <h2>{title}</h2>
          <Link
            href={`https://github.com/aegatlin/core/blob/main/src/core/${title}.tsx`}
          >
            <a>
              <Github />
            </a>
          </Link>
        </div>
        {children}
      </div>
    </Card>
  )
}
