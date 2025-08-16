import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Livenews } from './news'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Livenews></Livenews>

  </>
      
  )
}

export default App
