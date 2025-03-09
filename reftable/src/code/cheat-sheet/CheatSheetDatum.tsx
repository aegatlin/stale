import { style } from 'typestyle'

export enum DescriptionType {
  String,
  Code,
}

interface IDescription {
  type: DescriptionType
  text: string
}

export interface ICheatSheetDatum {
  title: string
  description: IDescription
}

const datumClass = style({
  display: 'flex',
  flexDirection: 'column',
})

const datumTitleClass = style({
  padding: '5px',
})

const String: React.FC<{ datum: ICheatSheetDatum }> = ({ datum }) => {
  const stringClass = style({ padding: '10px' })
  const stringTitleClass = style({
    fontWeight: 'bold',
  })
  const { title, description } = datum

  return (
    <div className={stringClass}>
      <span className={stringTitleClass}>{title}</span>
      <span> - {description.text}</span>
    </div>
  )
}

export const CheatSheetDatum: React.FC<{
  datum: ICheatSheetDatum
}> = ({ datum }) => {
  const { title, description } = datum

  if (description.type === DescriptionType.String) {
    return <String datum={datum} />
  }

  return (
    <div className={datumClass}>
      <div className={datumTitleClass}>{title}</div>
      <Description description={description} />
    </div>
  )
}

const all = {
  padding: '5px',
}

const codeClass = style(all, {
  backgroundColor: 'lightgrey',
})

const stringClass = style(all)

const Description: React.FC<{ description: IDescription }> = ({
  description,
}) => {
  const { type, text } = description

  if (type === DescriptionType.Code) {
    return <code className={codeClass}>{`$ ${text}`}</code>
  }

  return <div className={stringClass}>{text}</div>
}
