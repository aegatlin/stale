import { RadioGroup } from '../core/RadioGroup'
import { DemoWrapper } from './DemoWrapper'

export function DemoRadioGroup() {
  return (
    <DemoWrapper title="Radio Group">
      <div className="flex flex-col space-y-4">
        <RadioGroup
          label="Radio Group"
          options={[{ name: 'Option One' }, { name: 'Option Two' }]}
        />
        <RadioGroup
          label="Disabled Radio Group"
          disabled
          options={[
            { name: 'Disabled Option One' },
            { name: 'Disabled Option Two' },
          ]}
        />
      </div>
    </DemoWrapper>
  )
}
