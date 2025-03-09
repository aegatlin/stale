import Image from 'next/image'
import Link from 'next/link'

export function Header() {
  const ariaLabel = 'Link to Home page for Arabic Alphabet Chart'

  return (
    <header className="flex h-16 items-center justify-between bg-aac-blue px-8 text-2xl text-white">
      <h1 className="hidden sm:block">
        <Link href="/">
          <a aria-label={ariaLabel}>Arabic Alphabet Chart</a>
        </Link>
      </h1>
      <Link href="/">
        <a className="flex sm:hidden" aria-label={ariaLabel}>
          <Image
            src="/android-chrome-512x512.png"
            alt="Brand Logo"
            width={40}
            height={40}
          />
        </a>
      </Link>
      <div>
        <Link href="/about">
          <a aria-label="Link to About page for Arabic Alphabet Chart">About</a>
        </Link>
      </div>
    </header>
  )
}
