import React, { useState } from 'react'

const Header = (props) => {
    //  console.log(props)  
 
  const [headerData, setheaderData] = useState("header ka data hai ye")

  function changeData() {
   props.func(headerData) 
}

    
  return (
    <div className='bg-red-500' onClick={changeData}>Header</div>
  )
}

export default Header
