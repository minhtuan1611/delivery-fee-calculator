import React from 'react'
import './App.css'
import Calculator from './Calculator'
import Header from './Header'
function App() {
  return (
    <div className="App">
      <Header />
      <div className="delivery-fee-calculator">
        <Calculator />
      </div>
    </div>
  )
}

export default App
