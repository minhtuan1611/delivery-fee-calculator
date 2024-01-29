import React from 'react'
import '../App.css'
import { FeeContainer, FeeText } from '../styles'

interface FeeProps {
  fee: number
}

const Fee: React.FC<FeeProps> = ({ fee }) => {
  const [isTooltipOpen, setIsTooltipOpen] = React.useState(false)

  const handleTooltipToggle = () => {
    setIsTooltipOpen(!isTooltipOpen)
  }

  return (
    <FeeContainer data-test-id="fee">
      <FeeText>Delivery Fee: {fee.toFixed(2)} €</FeeText>
      <button
        className="info-icon"
        onMouseEnter={handleTooltipToggle}
        onMouseLeave={handleTooltipToggle}
      >
        ℹ️
      </button>
      <div className={`tooltip${isTooltipOpen ? ' open' : ''}`}>
        <p>The fee is calculated based on factors like:</p>
        <ul>
          <li>Distance to the delivery location</li>
          <li>Order value</li>
          <li>Time of day</li>
          <li>Number of items in the order</li>
          <li>
            But one thing I can sure that... The more you buy the cheaper
            delivery fee you get 😄
          </li>
        </ul>
      </div>
    </FeeContainer>
  )
}

export default Fee
