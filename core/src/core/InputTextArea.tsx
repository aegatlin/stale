import { ChangeEvent, FocusEvent } from 'react'

interface InputProps {
  value: string
  classes?: string
  placeholder?: string
  disabled?: boolean
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
  onFocus?: (e: FocusEvent<HTMLTextAreaElement>) => void
  onBlur?: (e: FocusEvent<HTMLTextAreaElement>) => void
}

export function InputTextArea({
  value,
  classes,
  placeholder,
  disabled,
  onChange,
  onFocus,
  onBlur,
}: InputProps) {
  return (
    <textarea
      className={`max-w-full rounded-2xl border p-4 enabled:hover:border-gray-300 disabled:cursor-not-allowed disabled:text-gray-400 ${classes}`}
      value={value}
      placeholder={placeholder}
      disabled={disabled}
      onChange={onChange}
      onBlur={onBlur}
      onFocus={onFocus}
    />
  )
}
