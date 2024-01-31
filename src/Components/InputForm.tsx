import { useFormContext } from 'react-hook-form'
import { IconDefinition } from '@fortawesome/fontawesome-common-types'
import { commonValidationProps } from '../utils'
import {
  InputRow,
  InputField,
  InputFieldDate,
  InputError,
  InputLabel,
  InputIcon,
} from '../styles'

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
                ...commonValidationProps,
                ...formProps,
              })}
              {...rest}
              data-test-id={name}
            />
          ) : (
            <InputField
              className="input-field"
              {...register(name, { ...commonValidationProps, ...formProps })}
              {...rest}
              data-test-id={name}
            />
          )}
        </div>
        {icon && <InputIcon className="input-icon" icon={icon} />}
      </InputRow>
      <InputError>
        {errors[name] && <small>{errors[name]?.message as string}</small>}
      </InputError>
    </div>
  )
}

export default InputForm
