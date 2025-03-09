import { style } from 'typestyle'
import { primaryBlue } from '../../css'

const subMenuTitleClass = style({
  color: primaryBlue,
})

export interface ISubMenuProps {
  subMenuTitle: string
  linkList: JSX.Element[]
}

export const SubMenu: React.FC<ISubMenuProps> = ({
  subMenuTitle,
  linkList,
}) => {
  return (
    <>
      <div className={subMenuTitleClass}>{subMenuTitle}</div>
      {linkList}
    </>
  )
}
