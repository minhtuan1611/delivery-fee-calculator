import React from 'react'
import { ReactComponent as Sun } from './Sun.svg'
import { ReactComponent as Moon } from './Moon.svg'
import './DarkMode.css'

const DarkMode: React.FC = () => {
  const setDarkMode = () => {
    document.querySelector('body')?.setAttribute('data-theme', 'dark')
    localStorage.setItem('selectedTheme', 'dark')
  }
  const setLightMode = () => {
    document.querySelector('body')?.setAttribute('data-theme', 'light')
    localStorage.setItem('selectedTheme', 'light')
  }

  const selectedTheme = localStorage.getItem('selectedTheme')
  if (selectedTheme === 'dark') setDarkMode()

  const toggleTheme = (e: { target: { checked: any } }) => {
    if (e.target.checked) setDarkMode()
    else setLightMode()
  }
  return (
    <div className="dark_mode">
      <input
        className="dark_mode_input"
        type="checkbox"
        id="darkmode-toggle"
        onChange={toggleTheme}
      />
      <label className="dark_mode_label" htmlFor="darkmode-toggle">
        <Sun />
        <Moon />
      </label>
    </div>
  )
}
export default DarkMode
