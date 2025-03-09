import { classes, media, style } from 'typestyle'
import { pages } from '../../data/pageData'
import { notMobile } from './css'
import { Group } from './Group'
import { useMasonry } from './useMasonry'

export const Groups: React.FC = () => {
  const containerSelector = 'home-page-lists'
  const itemSelector = 'home-page-list'
  useMasonry({
    containerSelector,
    itemSelector,
    gutter: 20,
  })

  return (
    <div className={style(media(notMobile, { maxWidth: '80vw' }))}>
      <div className={classes(containerSelector)}>
        {Object.values(pages).map(({ groupName, pages }, i) => {
          return (
            <Group
              key={i}
              group={{ groupName, pages }}
              masonryClass={itemSelector}
            />
          )
        })}
      </div>
    </div>
  )
}
