import React from 'react'

const Popup = ({popup, setPopup, title, description}) => {

    

  return (
    <div>
       {/* popup */}
        {popup && (
           <div onClick={() =>setPopup(false)} className='absolute top-0 left-0 w-screen h-screen bg-black/50 flex items-center justify-center' > 
       
           <button className='absolute top-[2rem] right-[2rem] border border-gray-400 rounded-md hover:bg-gray-100 '>❌</button>


        <div className='w-full h-full max-w-[20rem] max-h-[20rem] h-full  bg-gray-200 rounded-2xl p-5 flex items-center justify-center flex-col'>
        <h1 className='text-2xl'>⚠️ {title}</h1>
        <p className='text-lg my-5'>{description}</p>

           <div className='flex gap-10'>
             <button className='bg-[tomato] px-3.5 py-1 rounded-2xl'>no</button>
            <button className='bg-green-500 px-3.5 py-1 rounded-2xl'>Yes</button>
           </div>
      </div>
    </div> 
         )}
    </div>
  )
}

export default Popup
