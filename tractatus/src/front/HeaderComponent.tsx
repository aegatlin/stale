import React = require("react");
import { Svg } from "./Svg";

export enum HeaderOption {
  INTRO,
  PREFACE,
  CLAIMS,
  ABOUT
}

export const HeaderComponent: React.FC<{ option: HeaderOption, setOption: any }> = ({ option, setOption }) => {
  const [showMobileOptions, setShowMobileOptions] = React.useState(false)

  document.getElementsByTagName('body')[0].className = showMobileOptions ? 'no-scroll' : ''

  const optionClickHandler = (option: HeaderOption) => {
    setOption(option)
    if (showMobileOptions) setShowMobileOptions(false)
  }

  return (
    <div className="header">
      <div className="header-content">
        <div className="brand">
          <a href="https://www.tractatus.online" aria-label="Tractatus homepage">
            <Svg.BrandLogo />
            <div className="brand-name">Tractatus</div>
          </a>
        </div>
        <Svg.Hamburger {...{ clickHandler: () => setShowMobileOptions(!showMobileOptions) }} />
        <div className={`header-options${showMobileOptions ? ' show-options' : ' hide-options'}`}>
          <div className="intro" onClick={() => optionClickHandler(HeaderOption.INTRO)}>Intro</div>
          <div className="preface" onClick={() => optionClickHandler(HeaderOption.PREFACE)}>Preface</div>
          <div className="claims" onClick={() => optionClickHandler(HeaderOption.CLAIMS)}>Claims</div>
          <div className="about" onClick={() => optionClickHandler(HeaderOption.ABOUT)}>About</div>
        </div>
      </div>
    </div>
  )
}
