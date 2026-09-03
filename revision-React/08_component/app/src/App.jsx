import './App.css'
import Card from './component/card'

function square(para1, para2) {
  return (
    <div className='square'>
      <h1>{para1}</h1>
      <h1>{para2}</h1>
    </div>
  )
}

function Square(props) {
  console.log(props)
  return (
    <div className='square'>

      <h1>{props.name}</h1>
      <h1>{props.age}</h1>
    </div>
  )
}


function App() {
  return (
    <>
      {/* <h1>Hellow Components</h1> */}

      {/* function approch */}
      {/* {square("hellow", "world")} */}

      {/* component approch */}

      {/* <Square age="25" name="sanjay" /> */}
       <div className="grid">
      <Card title="first" description="first-description"/>
      <Card title="second" description="second-description"/>
      <Card title="third" description="third-description"/>
      <Card title="fourth" description="fourth-description"/>
      <Card title="fifth" description="fifth-description"/>
      <Card title="six" description="sic-description"/>
      <Card title="seven" description="seven-description"/>
</div>
    </>
  )
}

export default App
