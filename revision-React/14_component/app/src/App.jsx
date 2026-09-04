
import './App.css'
import Button from './component/Button'
import Card from './component/Card'
import Layout from './component/layout'

function App() {

 const buttonOne = () => { 
     console.log("button  1 click hua hai bhai log")
  }  

   const buttonTwo = () => { 
     console.log("button  2 click hua hai bhai log")
}
 

  return (
   <div className='layout'>
     <Card name="Kapoor Ji" age={21}/>
       <Card name="Sanjay kapoor" age={22}/>

      <Button title={"Click mi!"} func={buttonOne}/>
    <Button title={"Join Us"}  func={buttonTwo}/>
        

    <Layout title={"Hellow"}>
       <h1>this is children</h1>
     </Layout>
</div>
     
   

  )
}

export default App
