import React from 'react'
import { IconDefinition } from '@fortawesome/fontawesome-common-types'
import InputField from './InputField'

interface ValidationProps {
  required?: string
  min?: { value: number; message: string }
  pattern?: { value: RegExp; message: string }
}

interface FormItemProps {
  name: string
  label: string
  formProps?: ValidationProps
  type?: 'text' | 'number' | 'date'
  icon?: IconDefinition
}

const InputFields: React.FC<FormItemProps> = (props) => {
  const { name, label, formProps, type = 'text', icon, ...rest } = props

  return (
    <>
      <InputField
        name={name}
        label={label}
        formProps={formProps}
        type={type}
        icon={icon}
        {...rest}
      />
    </>
  )
}

export default InputFields
