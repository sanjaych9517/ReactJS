import React, { useState } from 'react'
import Navbar from './navbar'
import './App.css'

const App = () => {

  const [count, setCount] =  useState(0); 
  
function increment(){
   setCount(count + 2);
  
}

  return (
    <div>
      <button onClick={increment}>Increment</button>
     {count}
    </div>
  )
}

export default App;
