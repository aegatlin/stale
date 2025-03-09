import { Button } from '../src/core/Button'
import { Card } from '../src/core/Card'
import { Header } from '../src/core/Header'
import { DemoDrawer } from '../src/demo/DemoDrawer'
import { DemoDropdown } from '../src/demo/DemoDropdown'
import { DemoInputText } from '../src/demo/DemoInputText'
import { DemoInputTextArea } from '../src/demo/DemoInputTextArea'
import { DemoModal } from '../src/demo/DemoModal'
import { DemoRadioGroup } from '../src/demo/DemoRadioGroup'
import { DemoSearch } from '../src/demo/DemoSearch'
import { DemoWrapper } from '../src/demo/DemoWrapper'

function DemoButton() {
  return (
    <DemoWrapper title="Button">
      <div className="flex flex-col space-y-8">
        <Button onClick={() => null}>Button</Button>
        <Button disabled onClick={() => null}>
          Disabled Button
        </Button>
      </div>
    </DemoWrapper>
  )
}

function DemoCard() {
  return (
    <DemoWrapper title="Card">
      <Card>
        <p className="p-8">card content</p>
      </Card>
    </DemoWrapper>
  )
}

export default function Index() {
  return (
    <>
      <Header />
      <div className="my-16 mx-4 flex flex-wrap justify-center gap-8 md:mx-32">
        <DemoDrawer />
        <DemoInputTextArea />
        <DemoModal />
        <DemoCard />
        <DemoButton />
        <DemoDropdown />
        <DemoRadioGroup />
        <DemoSearch />
        <DemoInputText />
      </div>
    </>
  )
}
