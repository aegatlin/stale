import { media, style } from 'typestyle'
import {
  breadcrumbsHeight,
  darkBlue,
  fontSizeSmall,
  mobile,
  notMobile,
  offWhite,
} from '../../css'
import { ChevronRightIcon } from './ChevronRightIcon'
import Link from 'next/link'
import { breadcrumbBuilder } from './breadcrumbBuilder'

const breadcrumbsClass = style(
  {
    height: `${breadcrumbsHeight}px`,
    display: 'flex',
    fontSize: fontSizeSmall,
  },
  media(mobile, {
    color: darkBlue,
  })
)

const breadcrumbAClass = style(
  {
    textDecoration: 'none',
  },
  media(notMobile, {
    color: offWhite,
  }),
  media(mobile, {
    color: darkBlue,
  })
)

export interface IBreadcrumb {
  href: string
  displayName: string
}

export const Breadcrumbs: React.FC<{ pathname: string }> = ({ pathname }) => {
  const breadcrumbs: IBreadcrumb[] = breadcrumbBuilder(pathname)
  const elements = []
  const lastIndex = breadcrumbs.length - 1
  let i = 0

  breadcrumbs.forEach(({ href, displayName }, index) => {
    elements.push(
      <Link href={href} key={i++}>
        <a className={breadcrumbAClass}>{displayName}</a>
      </Link>
    )

    if (index !== lastIndex) {
      elements.push(<ChevronRightIcon key={i++} />)
    }
  })

  return <div className={breadcrumbsClass}>{elements}</div>
}
