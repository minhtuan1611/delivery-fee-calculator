import React, { useState, ChangeEvent } from 'react'
import Fee from './Fee'
import Input from './Input'
import '../App.css'

interface InputValues {
  cartValue: number
  distance: number
  numberOfItems: number
  orderTime: Date
}

const Calculator: React.FC = () => {
  const [inputValues, setInputValues] = useState<InputValues>({
    cartValue: 0,
    distance: 0,
    numberOfItems: 0,
    orderTime: new Date(),
  })

  const [calculatedFee, setCalculatedFee] = useState<number | null>(null)
  const [isExpanded, setIsExpanded] = useState(false)

  const handleChange = (
    event: ChangeEvent<HTMLInputElement>,
    inputName: keyof InputValues
  ) => {
    const value = event.target.value

    setInputValues((prevValues) => ({
      ...prevValues,
      [inputName]: parseFloat(value),
    }))
  }

  const handleCalculateFee = () => {
    const { cartValue, distance, numberOfItems, orderTime } = inputValues
    const fee = calculateFee(
      cartValue,
      distance,
      numberOfItems,
      new Date(orderTime)
    )
    setCalculatedFee(fee)
    setIsExpanded(true)
  }

  const calculateFee = (
    cartValue: number,
    distance: number,
    numberOfItems: number,
    orderTime: Date
  ) => {
    let fee = 0
    if (cartValue >= 200) {
      return fee
    }
    const isFridayRush =
      orderTime.getDay() === 5 &&
      orderTime.getHours() >= 15 &&
      orderTime.getHours() < 19
    const rushMultiplier = isFridayRush ? 1.2 : 1
    if (cartValue < 10) {
      fee += 10 - cartValue
    }
    fee += 2
    const additionalDistance = Math.max(0, distance - 1000)
    fee += Math.ceil(additionalDistance / 500) * 1
    if (numberOfItems >= 5) {
      const itemSurcharge = (numberOfItems - 5) * 0.5
      fee += itemSurcharge
      if (numberOfItems > 12) {
        fee += 1.2
      }
    }
    fee = Math.min(15, fee)
    fee *= rushMultiplier
    return fee
  }

  return (
    <div className={`delivery-fee-calculator ${isExpanded ? 'expanded' : ''}`}>
      <h2>Delivery Fee Calculator</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <Input inputValues={inputValues} handleChange={handleChange} />

        <button
          className="calculate-button"
          onClick={handleCalculateFee}
          disabled={Object.values(inputValues).some(
            (value) => isNaN(Number(value)) || value === 0
          )}
        >
          Calculate Delivery Price
        </button>
      </form>

      {calculatedFee !== null && <Fee fee={calculatedFee} />}
    </div>
  )
}

export default Calculator
