import React, { useState } from 'react'

const Card = (props) => {

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    return (
        <div className='card'>
            <h1>{count}</h1>
            <button onClick={increment}>Incerment</button>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
        </div>
    )
}

export default Card
