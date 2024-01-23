import React from 'react'

interface InputProps {
  cartValue: number
  distance: number
  numberOfItems: number
  orderTime: Date
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  calculateFee: () => void
}

const Input: React.FC<InputProps> = ({
  cartValue,
  distance,
  numberOfItems,
  orderTime,
  handleChange,
  calculateFee,
}) => (
  <div
    style={{
      margin: '0 0 10px 0',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}
  >
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <label htmlFor="cartValue">Cart Value:</label>
      <input
        type="number"
        id="cartValue"
        data-test-id="cartValue"
        value={cartValue}
        onChange={handleChange}
      />
    </div>
    <br />

    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <label htmlFor="distance">Delivery Distance:</label>
      <input
        type="number"
        id="distance"
        data-test-id="distance"
        value={distance}
        onChange={handleChange}
      />
    </div>
    <br />

    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <label htmlFor="numberOfItems">Amount of Items:</label>
      <input
        type="number"
        id="numberOfItems"
        data-test-id="numberOfItems"
        value={numberOfItems}
        onChange={handleChange}
      />
    </div>
    <br />

    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <label htmlFor="orderTime">Order Time:</label>
      <input
        type="datetime-local"
        id="orderTime"
        data-test-id="orderTime"
        value={orderTime.toISOString().slice(0, 16)}
        onChange={handleChange}
      />
    </div>
    <br />

    <button onClick={calculateFee}>Calculate Delivery Price</button>
  </div>
)

export default Input
