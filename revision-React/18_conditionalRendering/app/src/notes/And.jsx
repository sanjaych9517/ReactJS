import React from 'react'

const And = () => {
  
     const message = "Hi sanjay kaise ho"

  
  return (
    <div>
        {/* {
      message
        ? 
          <h1>{message} </h1>
        :  ""
    } */}

 {
  message && <h1>{message}</h1>
}
    </div>
  )
}

export default And
