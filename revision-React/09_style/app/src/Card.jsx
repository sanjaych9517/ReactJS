import React from 'react'
import style from './Card.module.css'
const Card = () => {
  return (
<>
    <button className='btn'>Card</button>
    <p className={style.faltu}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero doloremque, animi debitis quas incidunt eveniet, ab, facere cumque dignissimos quisquam sunt. Iste dolores deleniti vel sequi qui dolore molestiae nesciunt!</p>

    <p style={{"backgroundColor" : "lightblue"}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime quam explicabo nobis doloribus, tempora, magni rerum rem soluta ex dolorum inventore incidunt eveniet assumenda doloremque delectus illum quis similique sit?</p>
</>
  )
}

export default Card
