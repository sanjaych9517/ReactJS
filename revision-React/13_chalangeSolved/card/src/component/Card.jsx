
 import { FaYoutube, FaFacebook, FaInstagramSquare, FaHeart, FaComment, FaShare} from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import Button from "./Button";

const Card = ({title, role, likeCount, commentCount, shareCount, imgUrl}) => {
  return (
    <div className=" shadow-xl rounded-xl overflow-hidden">
        {/* Top part */}
      <div  className='relative w-full h-[10rem] bg-blue-400 aspect-video'>
         <img  className=' absolute h-full aspect-square object-cover rounded-full left-1/2 -translate-x-1/2 object-top  translate-y-1/4 border-4 border-blue-400 p-1 bg-white' src={imgUrl} />
      </div>

       {/* bottom part */}

       <div className='flex flex-col items-center pt-[5rem] pb-[3rem]'>
         <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-lg my-2">{role}</p>
         <div className="flex gap-[1rem] ">
           <FaFacebook className="bg-gray-400 p-1.5 text-white text-4xl rounded-full"/>
           <AiFillTwitterCircle className="bg-blue-400 p-1.5 text-white text-4xl rounded-full"/>
            <FaInstagramSquare className="bg-red-300 p-1.5 text-white text-4xl rounded-full"/>
           <FaYoutube className="bg-red-400 p-1.5 text-white text-4xl rounded-full"/>
         </div>
         
        <div className="flex gap-[2rem] my-[2rem] ">
            <Button text="Subscribe"/>
            <Button text="Message"/>
         </div>


         <div className="flex items-center gap-[1rem] ">
            <div className="flex items-center text-xl ">
              <FaHeart  /><span>{likeCount}</span>
            </div>

            <Line/>

            <div className="flex items-center text-xl">
                <FaComment /><span>{commentCount}</span>
            </div>

             <Line/>

            <div className="flex items-center text-xl">
               <FaShare /><span>{shareCount}</span>
            </div>
            
        </div>
      </div>
       
       

        
    </div>
  )
}

  
  
  const Line = () => {
    return (
      <div className="bg-black h-[1rem] w-[1px]"></div>
    )
  }
  
  
  

export default Card