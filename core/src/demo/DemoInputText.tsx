import { useState } from 'react'
import { InputText } from '../core/InputText'
import { DemoWrapper } from './DemoWrapper'

export function DemoInputText() {
  const [input, setInput] = useState('')

  return (
    <DemoWrapper title="InputText">
      <div className="space-y-8">
        <InputText
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="editable..."
        />
        <p>Note: below fields are not editable</p>

        <InputText
          value={`disabled - ${input}`}
          disabled={true}
          onChange={() => null}
        />
        <InputText
          value={''}
          placeholder={`placeholder - ${input}`}
          onChange={() => null}
        />
      </div>
    </DemoWrapper>
  )
}
