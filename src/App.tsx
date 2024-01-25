import React from 'react'
import './App.css'
import Calculator from './Components/Calculator'
import Nav from './Nav'

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <div className="delivery-fee-calculator">
        <Calculator />
      </div>
    </div>
  )
}

export default App
