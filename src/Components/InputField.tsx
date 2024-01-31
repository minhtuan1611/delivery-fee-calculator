import React from 'react'
import { useFormContext } from 'react-hook-form'
import { IconDefinition } from '@fortawesome/fontawesome-common-types'
import { commonValidationProps } from '../utils'
import {
  InputRow,
  InputField as StyledInputField,
  InputFieldDate as StyledInputFieldDate,
  InputError,
  InputLabel,
  InputIcon,
} from '../styles'

interface ValidationProps {
  required?: string
  min?: { value: number; message: string }
  pattern?: { value: RegExp; message: string }
}

interface InputFieldProps {
  name: string
  label: string
  formProps?: ValidationProps
  type?: 'text' | 'number' | 'date'
  icon?: IconDefinition
}

const InputField: React.FC<InputFieldProps> = (props) => {
  const { name, label, formProps, type = 'text', icon, ...rest } = props
  const {
    register,
    formState: { errors },
  } = useFormContext()

  return (
    <>
      <InputRow>
        <InputLabel htmlFor={name}>{label}</InputLabel>
        {type === 'date' ? (
          <StyledInputFieldDate
            className="input-time"
            type="datetime-local"
            {...register(name, {
              ...commonValidationProps,
              ...formProps,
            })}
            {...rest}
            data-test-id={name}
          />
        ) : (
          <StyledInputField
            className="input-field"
            {...register(name, { ...commonValidationProps, ...formProps })}
            {...rest}
            data-test-id={name}
          />
        )}
        {icon && <InputIcon className="input-icon" icon={icon} />}
      </InputRow>
      <InputError>
        {errors[name] && <small>{errors[name]?.message as string}</small>}
      </InputError>
    </>
  )
}

export default InputField
