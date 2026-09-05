import React from 'react'

const Variable = () => {

     const option = 'a'
   let  contant = <h1>hellow how are you</h1>
    
   if(option === 'a'){
      contant = <ComponentA />
  }else if(option === 'b'){
      contant = <ComponentB />
  }else if(option === 'c'){
      contant = <ComponentC />
  }else{
          {contant}
}

  return (
    <div>
      {contant}
    </div>
  )
}

export default Variable
