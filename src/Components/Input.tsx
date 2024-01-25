import React, { ChangeEvent } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEuroSign,
  faCartFlatbed,
  faTruckFast,
} from '@fortawesome/free-solid-svg-icons'

interface InputProps {
  cartValue: number
  distance: number
  numberOfItems: number
  orderTime: Date
  handleChange: (
    event: ChangeEvent<HTMLInputElement>,
    inputName: string
  ) => void
}

const Input: React.FC<InputProps> = ({
  cartValue,
  distance,
  numberOfItems,
  orderTime,
  handleChange,
}) => (
  <div className="input-container">
    <div className="input-section">
      <div className="input-row">
        <label className="input-label" htmlFor="cartValue">
          Cart Value:
        </label>
        <input
          className="input-field"
          type="text"
          id="cartValue"
          data-test-id="cartValue"
          value={cartValue}
          onChange={(e) => handleChange(e, 'cartValue')}
        />
        <FontAwesomeIcon className="input-icon" icon={faEuroSign} />
      </div>

      <div className="input-row">
        <label className="input-label" htmlFor="distance">
          Delivery Distance:
        </label>
        <input
          className="input-field"
          type="text"
          id="distance"
          data-test-id="distance"
          value={distance}
          onChange={(e) => handleChange(e, 'distance')}
        />
        <FontAwesomeIcon icon={faTruckFast} className="input-icon" />
      </div>
    </div>

    <div className="input-section">
      <div className="input-row">
        <label className="input-label" htmlFor="numberOfItems">
          Amount of Items:
        </label>
        <input
          className="input-field"
          type="text"
          id="numberOfItems"
          data-test-id="numberOfItems"
          value={numberOfItems}
          onChange={(e) => handleChange(e, 'numberOfItems')}
        />
        <FontAwesomeIcon icon={faCartFlatbed} className="input-icon" />
      </div>

      <div className="input-row">
        <label className="input-label" htmlFor="orderTime">
          Order Time:
        </label>
        <input
          className="input-field-time"
          type="datetime-local"
          id="orderTime"
          data-test-id="orderTime"
          value={orderTime.toISOString().slice(0, 16)}
          onChange={(e) => handleChange(e, 'orderTime')}
        />
      </div>
    </div>
  </div>
)

export default Input
