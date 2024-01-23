import React from 'react'
import './App.css'

const Header: React.FC = () => {
  return (
    <header>
      <div className="logo-container">
        <img src="/logo.png" alt="Logo" />
      </div>

      <a href="http://google.com" className="primary-button">
        Log in
      </a>

      <a href="http://google.com" className="secondary-button">
        Sign up
      </a>
    </header>
  )
}

export default Header
