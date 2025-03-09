import Link from 'next/link'
import { style } from 'typestyle'
import { darkBlue, white, fontSizeSmall } from '../css'

const footerClass = style({
  minHeight: '36px',
  backgroundColor: darkBlue,
  color: white,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: '0 20px',
  marginTop: '30px',
})

const aClass = style({
  textDecoration: 'none',
  color: white,
  fontSize: fontSizeSmall,
})

const linkWrapper = style({
  lineHeight: '100%',
})

export const Footer: React.FC = () => {
  return (
    <footer className={footerClass}>
      <div className={linkWrapper}>
        <Link href="/about-us">
          <a className={aClass}>About Us</a>
        </Link>{' '}
        |{' '}
        <Link href="/contact-us">
          <a className={aClass}>Contact Us</a>
        </Link>{' '}
        |{' '}
        <Link href="/privacy-policy">
          <a className={aClass}>Privacy Policy</a>
        </Link>{' '}
        |{' '}
        <Link href="/disclaimer">
          <a className={aClass}>Disclaimer</a>
        </Link>
      </div>
    </footer>
  )
}
