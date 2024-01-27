import { useState } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { calculateShippingFee, intergerValidateProps } from '../utils'
import Form from './Form'
import { IFormValue } from '../service'
import '../App.css'
import Loading from './Loading'

function Calculator() {
  const methods = useForm<IFormValue<string>>()
  const { handleSubmit } = methods
  const [isLoading, setIsLoading] = useState(false)
  const [shippingFee, setShippingFee] = useState<number | undefined>(undefined)

  const handleSubmitButton = async (values: IFormValue<string>) => {
    setIsLoading(true)
    const shipFee = await calculateShippingFee(values)
    setIsLoading(false)
    setShippingFee(shipFee)
  }

  return (
    <div className="app">
      <header className="app-header">
        <h3>Delivery Fee Calculator</h3>
      </header>

      <FormProvider {...methods}>
        <form
          className="form-wrapper"
          onSubmit={handleSubmit(handleSubmitButton)}
        >
          <Form suffix="€" name="cartValue" label="Cart Value" />
          <Form
            suffix="m"
            name="distance"
            formProps={intergerValidateProps}
            label="Delivery Distance"
          />
          <Form
            name="amount"
            label="Amount of items"
            formProps={intergerValidateProps}
          />
          <Form name="time" type="date" label="Time" />

          <button disabled={isLoading} className="submit-btn" type="submit">
            Calculate delivery price
          </button>

          <div className="shipping-fee">
            {isLoading && <Loading />}
            {shippingFee !== undefined && !isLoading && (
              <p> Delivery price: {shippingFee}€ </p>
            )}
          </div>
        </form>
      </FormProvider>
    </div>
  )
}

export default Calculator
