import { useFormContext } from 'react-hook-form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/fontawesome-common-types'
import { validateProps } from '../utils'
import {
  InputRow,
  InputField,
  InputFieldDate,
  InputError,
  InputLabel,
} from '../styles'

interface FormItemProps {
  name: string
  label: string
  formProps?: any
  [key: string]: any
  type?: 'text' | 'number' | 'date'
  icon?: IconDefinition
}

const InputForm = (props: FormItemProps) => {
  const { name, label, formProps, type = 'text', icon, ...rest } = props
  const {
    register,
    formState: { errors },
  } = useFormContext()

  return (
    <div className="form-item">
      <InputRow>
        <InputLabel htmlFor={name}>{label}</InputLabel>
        <div>
          {type === 'date' ? (
            <InputFieldDate
              className="input-time"
              type="datetime-local"
              {...register(name, {
                required: 'Value is required',
                ...formProps,
              })}
              {...rest}
              data-test-id={name}
            />
          ) : (
            <InputField
              className="input-field"
              {...register(name, { ...validateProps, ...formProps })}
              {...rest}
              data-test-id={name}
            />
          )}
        </div>
        {icon && <FontAwesomeIcon className="input-icon" icon={icon} />}
      </InputRow>
      <InputError>
        {errors[name] && <small>{errors[name]?.message as string}</small>}
      </InputError>
    </div>
  )
}

export default InputForm
