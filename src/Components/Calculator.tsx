import React, { useState } from 'react'
import Fee from './Fee'
import Input from './Input'

const Calculator: React.FC = () => {
  const [inputValues, setInputValues] = useState({
    cartValue: 0,
    distance: 0,
    numberOfItems: 0,
    orderTime: new Date(),
  })

  const [calculatedFee, setCalculatedFee] = useState<number | null>(null)

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    inputName: string
  ) => {
    const value = event.target.value

    // Ensure only numeric values are updated
    if (!isNaN(Number(value))) {
      setInputValues((prevValues) => ({
        ...prevValues,
        [inputName]: parseFloat(value),
      }))
    }
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
  }

  const calculateFee = (
    cartValue: number,
    distance: number,
    numberOfItems: number,
    orderTime: Date
  ) => {
    let fee = 0

    // Rule 5: Delivery is free when the cart value is equal or more than 200€
    if (cartValue >= 200) {
      return fee
    }

    // Rule 4: During the Friday rush (3 - 7 PM), multiply the fee by 1.2x
    const isFridayRush =
      orderTime.getDay() === 5 &&
      orderTime.getHours() >= 15 &&
      orderTime.getHours() < 19
    const rushMultiplier = isFridayRush ? 1.2 : 1

    // Rule 1: Small order surcharge
    if (cartValue < 10) {
      fee += 10 - cartValue // surcharge is the difference between 10 and cartValue
    }

    // Rule 2: Base fee for the first 1000 meters
    fee += 2

    // Rule 2: Additional fee for every 500 meters beyond the first 1000 meters
    const additionalDistance = Math.max(0, distance - 1000)
    fee += Math.ceil(additionalDistance / 500) * 1

    // Rule 3: Surcharge for items
    if (numberOfItems >= 5) {
      const itemSurcharge = (numberOfItems - 5) * 0.5
      fee += itemSurcharge

      // Additional "bulk" fee for more than 12 items
      if (numberOfItems > 12) {
        fee += 1.2
      }
    }

    // Rule 6: Fee cannot be more than 15€, including surcharges
    fee = Math.min(15, fee)

    // Apply rush hour multiplier
    fee *= rushMultiplier

    return fee
  }

  return (
    <div>
      <h2>Delivery Fee Calculator</h2>
      <Input
        cartValue={inputValues.cartValue}
        distance={inputValues.distance}
        numberOfItems={inputValues.numberOfItems}
        orderTime={inputValues.orderTime}
        handleChange={handleChange}
      />

      <button
        className="calculate-button"
        onClick={handleCalculateFee}
        disabled={Object.values(inputValues).some(
          (value) => isNaN(Number(value)) || value === 0
        )}
      >
        Calculate Delivery Price
      </button>

      {calculatedFee !== null && <Fee fee={calculatedFee} />}
    </div>
  )
}

export default Calculator
