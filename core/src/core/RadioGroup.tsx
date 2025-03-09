interface RadioGroupProps {
  options: { name: string }[]
  label: string
  disabled?: boolean
}

export function RadioGroup({ label, disabled, options }: RadioGroupProps) {
  return (
    <fieldset
      disabled={!!disabled}
      className="group flex flex-col rounded-2xl border p-4 hover:enabled:border-gray-300 disabled:text-gray-300"
    >
      <legend className="text-lg">{label}</legend>
      {options.map(({ name }) => (
        <div
          key={name}
          className="flex space-x-2 rounded-2xl p-4 hover:group-enabled:bg-gray-100"
        >
          <input type="radio" id={name} name={label} value={name} />
          <label htmlFor={name}>{name}</label>
        </div>
      ))}
    </fieldset>
  )
}
