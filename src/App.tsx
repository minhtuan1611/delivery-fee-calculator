import Calculator from './Components/Calculator'
import Nav from './Components/Navbar/Nav'
import DarkMode from './Components/DarkMode/DarkMode'
import { GlobalStyles } from './styles'

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Nav></Nav>
      <DarkMode />
      <Calculator />
    </div>
  )
}

export default App
