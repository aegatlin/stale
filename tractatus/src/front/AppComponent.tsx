import React = require("react");
import { HeaderComponent, HeaderOption } from "./HeaderComponent";
import { Claim } from "../Claim";
import { ClaimComponent } from "./ClaimComponent";
import { ParagraphComponent } from "./ParagraphComponent";
import { AboutComponent } from "./AboutComponent";

export const AppComponent: React.FC<{}> = () => {
  const [introduction, setIntroduction]: [string[], any] = React.useState([])
  const [preface, setPreface]: [string[], any] = React.useState([])
  const [claims, setClaims]: [Claim[], any] = React.useState([])
  React.useEffect(() => { getBook(setIntroduction, setPreface, setClaims) }, [])
  const [option, setOption]: [HeaderOption, any] = React.useState(HeaderOption.CLAIMS)

  const INTRO = (
    <div>
      <h2>Introduction by Bertrand Russell</h2>
      {introduction.map((paragraph, index) => <ParagraphComponent paragraph={paragraph} key={index} />)}
    </div>
  )

  const PREFACE = (
    <div>
      <h2>Preface</h2>
      {preface.map((paragraph, index) => <ParagraphComponent paragraph={paragraph} key={index} />)}
    </div>
  )

  const CLAIMS = (
    <div>
      <h2>Tractatus Logico-Philosophicus</h2>
      {claims.map((claim, index) => <ClaimComponent claim={claim} key={index} />)}
    </div>
  )

  const ABOUT = <AboutComponent />

  let component = CLAIMS
  if (option == HeaderOption.INTRO) component = INTRO
  if (option == HeaderOption.PREFACE) component = PREFACE
  if (option == HeaderOption.ABOUT) component = ABOUT

  return (
    <div className="app">
      <HeaderComponent {...{ option, setOption }} />
      <div className="main">
        {component}
      </div>
    </div>
  )
}

const getBook = async (setIntroduction: any, setPreface: any, setClaims: any) => {
  const res = await fetch('api/book')
  const json = await res.json()

  const introduction: string[] = json.data.introduction
  setIntroduction(introduction)

  const preface: string[] = json.data.preface
  setPreface(preface)

  const claims: Claim[] = json.data.claims
  setClaims(claims)
}
