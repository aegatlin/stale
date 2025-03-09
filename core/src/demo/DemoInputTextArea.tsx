import { useState } from 'react'
import { InputTextArea } from '../core/InputTextArea'
import { DemoWrapper } from './DemoWrapper'

export function DemoInputTextArea() {
  const [input, setInput] = useState('')

  return (
    <DemoWrapper title="InputTextArea">
      <div className="space-y-8">
        <InputTextArea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="editable..."
        />
        <p>Note: below fields are not editable</p>

        <InputTextArea
          value={`disabled - ${input}`}
          disabled={true}
          onChange={() => null}
        />
        <InputTextArea
          value={''}
          placeholder={`placeholder - ${input}`}
          onChange={() => null}
        />
      </div>
    </DemoWrapper>
  )
}
