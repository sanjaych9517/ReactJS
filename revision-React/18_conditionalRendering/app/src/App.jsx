import { useState } from 'react'
import ComponentA from './component/ComponentA'
import ComponentB from './component/ComponentB'
import ComponentC from './component/ComponentC'


function App() {
   
  const statusOption = 'error' 

   const status = {
    loading : <h1>Loading</h1>,
    error : <h1>Error ho gaya hai </h1>,
    success : <h1>Load ho gaya hai</h1>
  }

  return (
  <>
   {status[statusOption]}
  </>
  )
}

export default App
