import React from 'react'
import { useFormContext } from 'react-hook-form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/fontawesome-common-types'
import { validateProps } from '../utils'

interface FormItemProps {
  name: string
  label: string
  formProps?: any
  [key: string]: any
  type?: 'text' | 'number' | 'date'
  suffix?: string
  icon?: IconDefinition
}

const Form = (props: FormItemProps) => {
  const { name, label, formProps, type = 'text', icon, ...rest } = props
  const {
    register,
    formState: { errors },
  } = useFormContext()

  return (
    <div className="form-item">
      <div className="input-row">
        <label htmlFor={name} className="input-label">
          {label}
        </label>
        <div>
          {type === 'date' ? (
            <input
              className="input-field-time"
              type="datetime-local"
              {...register(name, {
                required: 'Value is required',
                ...formProps,
              })}
              {...rest}
            />
          ) : (
            <input
              className="input-field"
              {...register(name, { ...validateProps, ...formProps })}
              {...rest}
            />
          )}
        </div>
        {icon && <FontAwesomeIcon className="input-icon" icon={icon} />}
      </div>
      <div className="form-item__error">
        {errors[name] && <small>{errors[name]?.message as string}</small>}
      </div>
    </div>
  )
}

export default Form
