import './App.css'
import Calculator from './Components/Calculator'
import Nav from './Components/Navbar/Nav'
import DarkMode from './Components/DarkMode/DarkMode'

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <DarkMode />
      <div>
        <Calculator />
      </div>
    </div>
  )
}

export default App
