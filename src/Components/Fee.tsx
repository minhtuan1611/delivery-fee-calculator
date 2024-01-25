import React from 'react'
import '../App.css'

interface FeeProps {
  fee: number
}

const Fee: React.FC<FeeProps> = ({ fee }) => {
  const [isTooltipOpen, setIsTooltipOpen] = React.useState(false)

  const handleTooltipToggle = () => {
    setIsTooltipOpen(!isTooltipOpen)
  }

  return (
    <div className="fee-container">
      <p className="fee-text">Delivery Fee: {fee.toFixed(2)} €</p>
      <button
        className="info-icon"
        onClick={handleTooltipToggle}
        style={{ top: '10px' }}
      >
        ℹ️
      </button>
      <div className={`tooltip${isTooltipOpen ? ' open' : ''}`}>
        <p>Delivery fees are calculated based on factors such as:</p>
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
    </div>
  )
}

export default Fee
