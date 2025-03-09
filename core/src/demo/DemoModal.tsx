import { useState } from 'react'
import { Modal as Modal } from '../core/Modal'
import { Button } from '../core/Button'
import { Card } from '../core/Card'
import { DemoWrapper } from './DemoWrapper'

export function DemoModal() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <DemoWrapper title="Modal">
      <Button onClick={() => setIsOpen(true)}>Show Modal</Button>
      {isOpen && (
        <Modal onBackdropClick={() => setIsOpen(false)}>
          <Card>
            <div className="flex flex-col items-center space-y-8 bg-white p-8">
              <Button onClick={() => null}>Clicking here does nothing</Button>
            </div>
          </Card>
        </Modal>
      )}
    </DemoWrapper>
  )
}
