import { Github } from 'lucide-react'
import Link from 'next/link'

export function Header() {
  const menuItems = [{ name: 'About', href: '/about' }]

  return (
    <header className="flex items-center justify-between border-b py-8 px-16 hover:border-gray-300">
      <div className="text-4xl">
        <Link href={'/'}>
          <a>Core</a>
        </Link>
      </div>
      <div className="text-lg">
        <div className="hidden space-x-12 md:flex">
          {menuItems.map(({ name, href }) => (
            <div key={name + href} className="">
              <Link href={href}>{name}</Link>
            </div>
          ))}
          <Link href="https://github.com/aegatlin/core">
            <a>
              <Github />
            </a>
          </Link>
        </div>
      </div>
    </header>
  )
}
