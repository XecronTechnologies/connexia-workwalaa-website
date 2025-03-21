import { useState } from 'react'
import './App.css'
import NavigationBar from './components/Navigation/NavigationBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <NavigationBar />
    </>
  )
}

export default App
