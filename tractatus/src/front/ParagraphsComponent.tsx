import React = require("react");
import { makeParagraphs, IMG_REGEX } from "./makeParagraphs";
import { ParagraphComponent } from "./ParagraphComponent";

interface ParagraphsProps {
  text: string
  footnote: string | undefined
}

export const ParagraphsComponent: React.FC<ParagraphsProps> = ({ text, footnote }) => {
  const [showFootnote, setShowFootnote] = React.useState(false)

  const paragraphs = makeParagraphs(text)
  const jsxParagraphs = paragraphs.map((paragraph, index) => {
    if (!IMG_REGEX.test(paragraph)) return <ParagraphComponent paragraph={paragraph} key={index} />;

    const [_, cg, ...__] = paragraph.match(IMG_REGEX)
    return <img src={`/images/${cg}.png`} key={index} />
  })

  if (footnote) {
    const footnoteSpan = <span onClick={() => setShowFootnote(!showFootnote)}>{showFootnote ? ` (${footnote})` : '*'}</span>
    jsxParagraphs[0] = <div className="paragraph" key={-1}>{paragraphs[0]}{footnoteSpan}</div>
  }

  return (
    <div className="paragraphs">
      {jsxParagraphs}
    </div>
  )
}
