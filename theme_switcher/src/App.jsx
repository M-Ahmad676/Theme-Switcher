import './App.css'
import HomePage from './Pages/HomePage/HomePage'
import Navbar from './Components/Navbar/Navbar'
import { useContext } from 'react'
import { themeContext } from './Components/Context/ThemeContext'

function App() {
  
  const {theme} = useContext(themeContext)

  return (
    <>
    <div className={`${theme ? 'dark' : ''}`}>
     <Navbar/>
     <HomePage/>
     </div>
    </>
  )
}

export default App
