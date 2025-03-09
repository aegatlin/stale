import { style, cssRule, media } from 'typestyle'
import {
  darkBlue,
  mobile,
  mobileMarginLeft,
  fontSizeH1,
  fontSizeH3,
  fontSizeH4,
  fontSizeH2,
} from './css'

cssRule('h1, h2, h3, h4, h5, h6', {
  fontWeight: 'normal',
})

cssRule('h1', {
  fontSize: fontSizeH1,
})

cssRule('h2', {
  fontSize: fontSizeH2,
})

cssRule('h3', {
  fontSize: fontSizeH3,
})

cssRule('h4', {
  fontSize: fontSizeH4,
})

const articleClass = style(
  {
    maxWidth: '550px',
    color: darkBlue,
  },
  media(mobile, {
    padding: `0px ${mobileMarginLeft}px`,
  })
)

const articleWrapperClass = style({
  display: 'flex',
  flexDirection: 'column',
})

export const Article: React.FC = (props) => {
  return (
    <div className={articleWrapperClass}>
      <article className={articleClass}>{props.children}</article>
    </div>
  )
}
