import { useState } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { calculateShippingFee, intergerValidateProps } from '../utils'
import Form from './Form'
import { IFormValue } from '../service'
import '../App.css'
import Loading from './Loading'
import Fee from './Fee'
import {
  faEuroSign,
  faTruckFast,
  faCartFlatbed,
} from '@fortawesome/free-solid-svg-icons'

function Calculator() {
  const methods = useForm<IFormValue<string>>()
  const { handleSubmit } = methods
  const [isLoading, setIsLoading] = useState(false)
  const [shippingFee, setShippingFee] = useState<number | undefined>(undefined)
  const [isExpanded, setIsExpanded] = useState(false)

  const handleSubmitButton = async (values: IFormValue<string>) => {
    setIsLoading(true)
    const shipFee = await calculateShippingFee(values)
    setIsLoading(false)
    setShippingFee(shipFee)
    setIsExpanded(true)
  }

  return (
    <div className={`delivery-fee-calculator ${isExpanded ? 'expanded' : ''}`}>
      <h3>Delivery Fee Calculator</h3>

      <FormProvider {...methods}>
        <form
          className="form-wrapper"
          onSubmit={handleSubmit(handleSubmitButton)}
        >
          <Form name="cartValue" label="Cart Value:" icon={faEuroSign} />
          <Form
            name="distance"
            formProps={intergerValidateProps}
            label="Delivery Distance: (m)"
            icon={faTruckFast}
          />
          <Form
            name="amount"
            label="Amount of items:"
            formProps={intergerValidateProps}
            icon={faCartFlatbed}
          />
          <Form name="time" type="date" label="Time:" />
          <button
            disabled={isLoading}
            className="calculate-button"
            type="submit"
          >
            Calculate delivery price
          </button>
          {isLoading && <Loading />}
          {shippingFee !== undefined && !isLoading && <Fee fee={shippingFee} />}
        </form>
      </FormProvider>
    </div>
  )
}

export default Calculator
