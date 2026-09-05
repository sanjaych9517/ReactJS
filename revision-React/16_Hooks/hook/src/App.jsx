import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [count, setCount] = useState(0)

 useEffect(() =>{console.log("how are you")}, [count])

  return (
    <>
      <h1>{count}</h1>
      <button
        onClick={ () => setCount(count + 1)}
      >click mi!</button>
    </>
  )
}

export default App
