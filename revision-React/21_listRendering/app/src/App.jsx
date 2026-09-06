import UserCard from "./component/UserCard"

function App() {

  //  const arr = ["abc", "def", "ghi", "jkl", 'mno', 'pqr', 'stu', 'vwxyz']

  const arr = [
    { id: 1, name: "Sanjay", age: 21 },
    { id: 2, name: "anju", age: 27 },
    { id: 3, name: "manas", age: 23 },
    { id: 4, name: "muskan", age: 19 },
    { id: 5, name: "mukesh", age: 29 }
  ]

  // const arr = [
  //   ['html', 'css', 'react', 'js'],
  //   ['nodeJs', 'nextJs', 'MongoDB', 'ExpressJs'],

  // ]

  return (
    <>

      {/* normal array */}
      <h1>Hellow Sanjay</h1>
      {/* {arr.map((item,idx) => {
         return <h1 key={idx}>{item}</h1> 
 
      })} */}



      {/* array of object */}
      {/* {
       arr.map((user, idx) => {
          console.log(user);
          return(
             <div className="bg-blue-300 mt-2 pt-2.5">
               <p> id: {user.id} </p>
               <h1> name:{user.name}</h1>
               <p> age:{user.age}</p>
            </div>  
          )
       })
     } */}



      {/* Array of object */}
      {/* {
        arr.map((item, idx) => {
          console.log(item)
          return (
            <div key={idx}>
              {item.map((items, idx) => {
                return (
                  <p key={idx}>{items}</p>
                )
              })}
            </div>
          )
        })
      } */}


      {arr.map((user) => {
        return (
          <UserCard key={user.id} name={user.name}  age={user.age} id={user.id}/>
        )
      })}
    </>
  )
}

export default App
