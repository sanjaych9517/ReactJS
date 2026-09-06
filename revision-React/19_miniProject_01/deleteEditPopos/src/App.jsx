import { useState } from 'react';
import './App.css'
import Popup from './component/Popup';

function App() {

 const [popup, setPopup] = useState(false);
const [editPopup, setEditPopup] = useState(false);

  return (
    <>
      <div className='flex p-60 justify-around '>

        <button onClick={() =>setPopup(true)} className="   w-32 px-4 py-2 border bg-  rounded-md  ">
          Show Popup
        </button>
        
         <Popup popup={popup} setPopup={setPopup} title={"Delete"} description={"Are you sure to delete this"}/>

          <button onClick={() =>setEditPopup(true)} className="   w-32 px-4 py-2 border rounded-md ">
          Edit
        </button>

        <Popup popup={editPopup} setPopup={setEditPopup} title={"Edit"} description={"Are you sure to Edit this"}/>
      </div>
        

    </>
  )
}

export default App