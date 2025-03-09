import { classes, style } from 'typestyle'
import { darkBlue, white } from '../css'
import { CheatSheetDatum, ICheatSheetDatum } from './CheatSheetDatum'
import { cheatSheetGroupClass } from './CheatSheetGroup'

export const MASONRY_ITEM_CLASS = 'cheat-sheet-item'

const GrouplessData: React.FC<{ data: ICheatSheetDatum[] }> = ({ data }) => {
  const grouplessDataClass = style({
    backgroundColor: white,
  })

  return (
    <div className={grouplessDataClass}>
      {data.map((datum, i) => (
        <CheatSheetDatum key={i} datum={datum} />
      ))}
    </div>
  )
}

const titleClass = style({ margin: '5px 0' })

const headerClass = style({
  backgroundColor: darkBlue,
  color: white,
  padding: '10px',
})

export const CheatSheetPreGroup: React.FC<{
  title: string
  description: string
  grouplessData?: ICheatSheetDatum[]
}> = ({ title, description, grouplessData }) => {
  return (
    <div className={classes(cheatSheetGroupClass, MASONRY_ITEM_CLASS)}>
      <div className={headerClass}>
        <h2 className={titleClass}>{title}</h2>
        {description && <p>{description}</p>}
      </div>
      {grouplessData && <GrouplessData data={grouplessData} />}
    </div>
  )
}
