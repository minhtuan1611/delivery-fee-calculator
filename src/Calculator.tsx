import React, { useState } from 'react'
import Fee from './Fee'
import Input from './Input'

interface InputValues {
  cartValue: number
  distance: number
  numberOfItems: number
  orderTime: Date
}

const Calculator: React.FC = () => {
  const [values, setValues] = useState<InputValues>({
    cartValue: 0,
    distance: 0,
    numberOfItems: 0,
    orderTime: new Date(),
  })

  const { cartValue, distance, numberOfItems, orderTime } = values

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = event
    setValues((prevValues) => ({ ...prevValues, [name]: parseFloat(value) }))
  }

  const calculateFee = () => {
    // Implement Fee Calculation Logic here based on inputs and rules
    // Return the calculated fee
    // For now, let's just return a placeholder value
    return cartValue * distance * numberOfItems
  }

  return (
    <div>
      <h2
        style={{
          fontWeight: 'bold',
          fontSize: '24px',
          textAlign: 'center', // Assuming you want the header centered
          margin: '20px 0',
        }}
      >
        Delivery Fee Calculator
      </h2>
      <Input
        {...{
          cartValue,
          distance,
          numberOfItems,
          orderTime,
          handleChange,
          calculateFee,
        }}
      />
      <Fee fee={calculateFee()} />
    </div>
  )
}

export default Calculator
