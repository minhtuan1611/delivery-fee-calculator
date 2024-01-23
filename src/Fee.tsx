import React from 'react'

interface FeeProps {
  fee: number
}

const Fee: React.FC<FeeProps> = ({ fee }) => (
  <div>
    <p>Delivery Fee: {fee.toFixed(2)} €</p>
  </div>
)

export default Fee
