
import Hero from './Hero'
import About from './About.jsx'
import { useState } from 'react'


const Layout = (props) => {
   console.log(props)

   const [count, setcount] = useState(55);
  return (
    <div className='h-[30vh] bg-gray-400 p-[2rem]'>Layout
      <Hero data={props.data} count={count}/>
      <About data={props.data} count={count} />
    </div>
  )
}

export default Layout
