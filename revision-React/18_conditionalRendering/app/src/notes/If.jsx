import React from 'react'

const If = () => {

 // const isLogin = false;

  const option = 'b'



  // if (isLogin) {

  //   return (
  //     <div>
  //       <h1>Welcome back! you are logdin</h1>
  //     </div>
  //   )
  // }

if (option === 'a') {

    return (
      <div>
        <h1> component A</h1>
      </div>
    )
  }

if (option === 'b') {

    return (
      <div>
        <h1>component B</h1>
      </div>
    )
  }

return(
  <h1>Other component</h1>
)
}

export default If
