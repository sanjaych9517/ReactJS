
import { useState } from 'react'
import './App.css'
import Footer from './component/Footer'
import Header from './component/Header'
import Layout from './component/Layout'

function App() {  

const [data, setdata] = useState("Sanjay kapoor Chaudhary");

   const kabutar = (data) => {
     setdata(data)
}
//  
   console.log(data)
  return ( 
    
    <>
      <Header  func={kabutar}/>
      {/* <Layout  data={data}/>
      <Footer  data={data}/> */}
   </>
 )
}

export default App
