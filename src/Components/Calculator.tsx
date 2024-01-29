import { useState } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { calculateShippingFee, intergerValidateProps } from '../utils'
import InputForm from './InputForm'
import { IFormValue } from '../types'
import '../App.css'
import Fee from './Fee'
import {
  faEuroSign,
  faTruckFast,
  faCartFlatbed,
} from '@fortawesome/free-solid-svg-icons'
import { FormWrapper, CalculateButton } from '../styles'

function Calculator() {
  const methods = useForm<IFormValue<string>>()
  const { handleSubmit, formState } = methods
  const { isSubmitting } = formState
  const [shippingFee, setShippingFee] = useState<number | undefined>(undefined)
  const [isExpanded, setIsExpanded] = useState(false)

  const handleSubmitButton = async (values: IFormValue<string>) => {
    const shipFee = await calculateShippingFee(values)
    setShippingFee(shipFee)
    setIsExpanded(true)
  }

  return (
    <div className={`delivery-fee-calculator ${isExpanded ? 'expanded' : ''}`}>
      <h3>Delivery Fee Calculator</h3>

      <FormProvider {...methods}>
        <FormWrapper onSubmit={handleSubmit(handleSubmitButton)}>
          <InputForm name="cartValue" label="Cart Value:" icon={faEuroSign} />
          <InputForm
            name="distance"
            formProps={intergerValidateProps}
            label="Delivery Distance: (m)"
            icon={faTruckFast}
          />
          <InputForm
            name="amount"
            label="Amount of items:"
            formProps={intergerValidateProps}
            icon={faCartFlatbed}
          />
          <InputForm name="time" type="date" label="Time:" />
          <CalculateButton
            disabled={isSubmitting}
            className="calculate-button"
            type="submit"
          >
            {isSubmitting ? 'Loading...' : ' Calculate delivery price'}
          </CalculateButton>
          {isSubmitting}
          {shippingFee !== undefined && <Fee fee={shippingFee} />}
        </FormWrapper>
      </FormProvider>
    </div>
  )
}

export default Calculator
