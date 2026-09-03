import React from 'react';
import './App.css'
import Header from './Header';

function App() {
  // let name = "sanjay kumar"
  // function greet() {
  //   return "My name is"
  // }
  // let age = 19;

  //  let arr = ["IronMan", "SpiderMan", "wanda", "captain"];

  let alpha = <p>Hellow how {2 + 2} are you</p>
  return (
    <>
      {/* <h1>Hellow JSX = {2 + 2 } {greet()} {name}</h1>
      <p>{age>= 18 ? 'you can drive' : "you can not  drive"}</p> */}



      {/* inline css in React */}
      {/* <h1 style={{"color" : "red",
               "backgroundColor": "white",
                "fontSize": "50px"}}>Hellow Style</h1> */}


      {/* condition rendering */}
      {/* {age > 18 ? <p style={{
        "color": "red"
      }}>You can drive</p> : <p
        style={{
          "color": "blue"
        }}>You can not drive</p>} */}

      {/* JSX with loop */}

      {/* {arr.map(function(element){
             return <p key={element}>{element}</p>
              })} */}

      {/* jsx is an expression */}
        {/* <Header title="Kapoor ji"/>
        <Header title={alpha}/> */}




        {/* Behind the Scens */}

      {/* {React.createElement('h1', null, "helllow how are you")} */}
{/* 
      {React.createElement("h1", {style: {backgroundColor: "red", color: "white"}}, "sanjay kumar")} */}
      
    </>
  )
}

export default App;
