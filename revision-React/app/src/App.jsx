import React from 'react'
import Navbar from './navbar'

const App = () => {
  return (
    <div>
      <Navbar title="name" link="google.com"/>
       <Navbar title="Sanjay" link="amazon.com"/>
        <Navbar number={4} />
        <Navbar title="kapoor ji"/>
    </div>
  )
}

export default App;
