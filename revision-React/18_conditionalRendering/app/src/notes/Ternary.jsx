import React from 'react'

const Ternary = () => {

   const isLogdin = false

  return (
  <>
   {
       
      isLogdin
        ?
        <h1>welcome back</h1>
        :
        <h1>please logdin</h1>
   
   }
  </>
  )
}

export default Ternary
