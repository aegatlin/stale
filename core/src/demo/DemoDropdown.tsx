import { ChevronDown } from 'lucide-react'
import { Button } from '../core/Button'
import { Dropdown } from '../core/Dropdown'
import { DemoWrapper } from './DemoWrapper'

export function DemoDropdown() {
  return (
    <DemoWrapper title="Dropdown">
      <Dropdown>
        <Dropdown.Input>
          <div className="flex justify-end">
            <Button onClick={() => null}>
              <div className="flex space-x-2">
                <span>Any Input</span>
                <ChevronDown />
              </div>
            </Button>
          </div>
        </Dropdown.Input>
        <Dropdown.Items>
          <div className="rounded-2xl p-4 hover:bg-gray-100">any content</div>
        </Dropdown.Items>
      </Dropdown>
    </DemoWrapper>
  )
}
