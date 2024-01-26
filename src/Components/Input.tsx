import React, { ChangeEvent } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEuroSign,
  faCartFlatbed,
  faTruckFast,
} from '@fortawesome/free-solid-svg-icons'

interface InputProps {
  inputValues: InputValues
  handleChange: (
    event: ChangeEvent<HTMLInputElement>,
    inputName: keyof InputValues
  ) => void
}
interface InputValues {
  cartValue: number
  distance: number
  numberOfItems: number
  orderTime: Date
}

const Input: React.FC<InputProps> = ({ inputValues, handleChange }) => (
  <div className="input-container">
    <div className="input-section">
      {Object.entries(inputValues).map(([name, value]) => (
        <div className="input-row" key={name}>
          <label className="input-label" htmlFor={name}>
            {name === 'orderTime'
              ? 'Order Time'
              : ` ${name.charAt(0).toUpperCase() + name.slice(1)}`}
            :
          </label>
          <input
            className={`input-field${name === 'orderTime' ? '-time' : ''}`}
            type={name === 'orderTime' ? 'datetime-local' : 'number'}
            required
            id={name}
            data-test-id={name}
            value={
              name === 'orderTime' ? value.toISOString().slice(0, 16) : value
            }
            onChange={(e) => handleChange(e, name as keyof InputValues)}
          />
          {name !== 'orderTime' && (
            <FontAwesomeIcon
              className="input-icon"
              icon={
                name === 'cartValue'
                  ? faEuroSign
                  : name === 'distance'
                  ? faTruckFast
                  : faCartFlatbed
              }
            />
          )}
        </div>
      ))}
    </div>
  </div>
)

export default Input
