import { style, classes, media } from 'typestyle'
import { darkBlue, fontSizeH4, white, notMobile, mobile } from '../css'
import { CheatSheetDatum, ICheatSheetDatum } from './CheatSheetDatum'

export interface ICheatSheetGroup {
  title: string
  description?: string
  contents: ICheatSheetDatum[]
}

const groupTitleClass = style({
  backgroundColor: darkBlue,
  color: white,
  padding: '10px',
  fontSize: fontSizeH4,
})

export const cheatSheetGroupClass = style(
  media(notMobile, {
    width: '400px',
  }),
  media(mobile, {
    width: '100%',
  })
)

const groupContentsClass = style({
  backgroundColor: white,
})

export const CheatSheetGroup: React.FC<{
  group: ICheatSheetGroup
  masonryClass: string
}> = ({ group, masonryClass }) => {
  const { title, contents } = group

  return (
    <div className={classes(cheatSheetGroupClass, masonryClass)}>
      <div className={groupTitleClass}>{title}</div>
      <div className={groupContentsClass}>
        {contents.map((content, i) => (
          <CheatSheetDatum key={i} datum={content} />
        ))}
      </div>
    </div>
  )
}
