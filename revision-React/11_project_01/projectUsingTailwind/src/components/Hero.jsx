import React from 'react'
import Button from "./Button"
const Hero = () => {
  return (
   <div className="max-w-[55rem] m-auto text-center py-[8rem]">

        <h1 className="text-7xl font-serif font-bold">The  Best Way To <span className="bg-red-300 rounded-2xl px-3">Review</span >  Created Assets</h1>

        <p className="text-lg my-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat sed at nobis minus non. Possimus suscipit vero, inventore dolores facere hic placeat rem laborum eos. Enim quod veritatis ipsum vero.</p>

        <div className="text-3xl">
          <Button title="Join Subscrition" />
       </div>
      </div>
  )
}

export default Hero
