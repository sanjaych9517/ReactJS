import React from 'react'

const Toggle = () => {

     const [toggle, setToggle] = useState(false)

  return (
    <div>
      {toggle ? (<h1>Toggle true ho chauka hai</h1>) : (<h1>Toggle False ho chuka hai</h1>)}


     <button onClick={() => setToggle(!toggle)}>Toggle</button>
    </div>
  )
}

export default Toggle
