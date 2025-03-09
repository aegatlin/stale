import { classes, media, style } from 'typestyle'
import { mobile } from '../css'
import { useMasonry } from '../useMasonry'
import { ICheatSheetDatum } from './CheatSheetDatum'
import { CheatSheetGroup, ICheatSheetGroup } from './CheatSheetGroup'
import { CheatSheetPreGroup, MASONRY_ITEM_CLASS } from './CheatSheetPreGroup'

export interface ICheatSheet {
  title: string
  description?: string
  grouplessData?: ICheatSheetDatum[]
  groups: ICheatSheetGroup[]
}

const cheatSheetClass = style(
  media(mobile, {
    width: '100% !important', // !important is because masonry-layout misbehaves on mobile in a way I don't understand
  })
)

const MASONRY_CONTAINER_CLASS = 'cheat-sheet-container'

export const CheatSheet: React.FC<{ cheatSheet: ICheatSheet }> = ({
  cheatSheet,
}) => {
  useMasonry({
    containerSelector: MASONRY_CONTAINER_CLASS,
    itemSelector: MASONRY_ITEM_CLASS,
  })
  const { title, description, grouplessData, groups } = cheatSheet

  return (
    <div className={classes(cheatSheetClass, MASONRY_CONTAINER_CLASS)}>
      <CheatSheetPreGroup {...{ title, description, grouplessData }} />
      {groups.map((group, i) => (
        <CheatSheetGroup
          key={i}
          group={group}
          masonryClass={MASONRY_ITEM_CLASS}
        />
      ))}
    </div>
  )
}
