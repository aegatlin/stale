import React = require("react");
import { useMathJax } from "./useMathJax";

export const ParagraphComponent: React.FC<{ paragraph: string }> = ({ paragraph }) => {
  useMathJax()
  return (
    <div className="paragraph">{paragraph}</div>
  )
}
