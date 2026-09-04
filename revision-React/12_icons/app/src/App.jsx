
import './App.css'
import { IoMdHome } from "react-icons/io";
import { TiHome } from "react-icons/ti";
import { GrLogout } from "react-icons/gr";
import { RiAddLargeLine,  RiFolderUserFill } from "react-icons/ri";

function App() {
  

  return (
    <>
     <h1>Icons</h1>
<IoMdHome />
<TiHome />
<GrLogout />
<RiAddLargeLine />
<RiFolderUserFill style={{color: "red", fontSize: "1.5rem"}}/>
    </>
  )
}

export default App
