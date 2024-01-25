import React from 'react'
import '../App.css' // Import your CSS file

interface FeeProps {
  fee: number
}

const Fee: React.FC<FeeProps> = ({ fee }) => {
  const [isTooltipOpen, setIsTooltipOpen] = React.useState(false)

  const handleTooltipOpen = () => {
    setIsTooltipOpen(true)
  }

  const handleTooltipClose = () => {
    setIsTooltipOpen(false)
  }

  return (
    <div className="fee-container">
      <p className="fee-text">Delivery Fee: {fee.toFixed(2)} €</p>
      <button
        className="info-icon"
        onClick={handleTooltipOpen}
        onMouseLeave={handleTooltipClose}
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
        </ul>
      </div>
    </div>
  )
}

export default Fee
