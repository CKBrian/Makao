import { useState } from 'react'
import Login from './components/Login'
import NewProperty from './components/NewProperty'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NewProperty />
    </>
  )
}

export default App
