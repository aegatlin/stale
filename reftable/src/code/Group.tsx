import Link from 'next/link'
import { classes, media, style } from 'typestyle'
import { darkBlue, mobile, mobileMarginLeft, offWhite, white } from './css'
import { AlphabetIcon } from './AlphabetIcon'
import { IPages } from './GroupPage'

const radius = 5
const listClass = style(
  {
    display: 'flex',
    flexDirection: 'column',
    width: '210px',
    marginBottom: '20px',
  },
  media(mobile, {
    marginLeft: `${mobileMarginLeft}px`,
  })
)

const titleClass = style({
  display: 'flex',
  alignItems: 'center',
  height: '40px',
  color: offWhite,
  backgroundColor: darkBlue,
  borderTopRightRadius: `${radius}px`,
  borderTopLeftRadius: `${radius}px`,
  $nest: {
    '& > *:first-child': {
      margin: '0 15px',
    },
  },
})

const bodyClass = style({
  backgroundColor: white,
  color: darkBlue,
  borderBottomRightRadius: `${radius}px`,
  borderBottomLeftRadius: `${radius}px`,
  padding: '0 15px 15px',
})

const listUlClass = style({
  margin: 0,
  padding: 0,
  listStyle: 'none',
  $nest: {
    '& > li': {
      paddingTop: '15px',
    },
    '& a': {
      textDecoration: 'none',
      color: darkBlue,
    },
  },
})

export interface IGroup {
  groupName: string
  pages: IPages
}

export const Group: React.FC<{ group: IGroup; masonryClass?: string }> = ({
  group,
  masonryClass,
}) => {
  const { groupName, pages } = group
  const lis = Object.values(pages).map(({ page }, i) => {
    const { pathname, pageTitle } = page
    return (
      <li key={i}>
        <Link href={pathname}>
          <a>{pageTitle}</a>
        </Link>
      </li>
    )
  })

  return (
    <div className={classes(listClass, masonryClass)}>
      <div className={titleClass}>
        <AlphabetIcon />
        <div>{groupName}</div>
      </div>
      <div className={bodyClass}>
        <ul className={listUlClass}>{lis}</ul>
      </div>
    </div>
  )
}
