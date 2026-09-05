import React from 'react'
 
const Select = () => {

 const option = 'b'

 const Component = option === 'a' ? ComponentA : ComponentB
  return (
    <div>
       <Component/>
    </div>
  )
}

export default Select
