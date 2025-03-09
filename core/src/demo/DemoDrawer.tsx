import { useState } from 'react'
import { Button } from '../core/Button'
import { Drawer } from '../core/Drawer'
import { DemoWrapper } from './DemoWrapper'

function DrawerItems() {
  const itemsData = [
    { id: 'one', value: 'Item One' },
    { id: 'two', value: 'Item Two' },
    { id: 'three', value: 'Item Three with a long name' },
  ]

  return (
    <div className="">
      {itemsData.map((i) => (
        <div key={i.id} className="flex rounded-2xl p-4 hover:bg-gray-100">
          <span onClick={() => console.log(i)}>{i.value}</span>
        </div>
      ))}
    </div>
  )
}

export function DemoDrawer() {
  const [openLeft, setOpenLeft] = useState(false)
  const [openRight, setOpenRight] = useState(false)

  return (
    <>
      <DemoWrapper title="Drawer">
        <div className="space-y-8">
          <p>Click to open a drawer on the left</p>
          <Button onClick={() => setOpenLeft(true)}>Left</Button>
          <Button onClick={() => setOpenRight(true)}>Right</Button>
        </div>
      </DemoWrapper>
      {openLeft && (
        <Drawer side="left" onBackdropClick={() => setOpenLeft(false)}>
          <DrawerItems />
        </Drawer>
      )}
      {openRight && (
        <Drawer side="right" onBackdropClick={() => setOpenRight(false)}>
          <DrawerItems />
        </Drawer>
      )}
    </>
  )
}
