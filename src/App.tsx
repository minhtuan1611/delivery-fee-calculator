import './App.css'
import Calculator from './Components/Calculator'
import Nav from './Components/Navbar/Nav'

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <div>
        <Calculator />
      </div>
    </div>
  )
}

export default App
