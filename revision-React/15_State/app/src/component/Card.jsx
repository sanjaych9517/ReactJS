
import { useState } from 'react'


function Card() {

//  let count = 1
const [count, setCount] = useState(0);

  const increment = () =>{
            // setCount(count +1)
    setCount(prev => prev +1)
       
      }
  
  return  (
  <>
      <h1>{count}</h1>
      <button onClick={increment}>Increment    </button>
    </>
  )
}

export default Card
