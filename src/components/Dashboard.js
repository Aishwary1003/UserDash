import React from 'react'
import { FaCamera } from "react-icons/fa";
import { Link } from 'react-router-dom';
function Dashboard() {
  return (
    <div className='border w-1/5 h-screen flex flex-col items-center rounded-md '>

        <div className='flex flex-col items-center gap-2 border-b-2 border-black pt-6 pb-2 w-full'>
            <div className='relative  rounded-full '>
               <img src="https://aws.astrotalk.com/assets/images/profile_pic.webp" height={100} width={100}
               className='rounded-full'/>

               <div className='absolute bottom-2 right-2 p-1 rounded-full bg-white'>
               <FaCamera  />
               </div>
            </div>
             
              <p className='font-semibold text-blue-400'>Aishwary Pratap</p>
              <p className='font-semibold'> +91 9595959595</p>

        </div>

        <div className='flex flex-col items-center gap-4 pt-4  '>
          
                 <div className='py-2 px-3 rounded-full border hover:bg-yellow-400 transition hover:cursor-pointer hover:text-white text-sm w-full bg-slate-100  '>  <Link to="/Transactions"> Wallet Transactions  </Link> </div>
          

        
            <div className='py-2 px-3 rounded-full border hover:bg-yellow-400 transition hover:cursor-pointer hover:text-white text-sm w-full  bg-slate-100 '>    <Link to="/OrderHistory">Order History </Link></div>
           

          
            <div className='py-2 px-3 rounded-full border hover:bg-yellow-400 transition hover:cursor-pointer hover:text-white text-sm w-full bg-slate-100  '>  <Link to="/Support">Customer Support Chat  </Link></div>
          

           
            <div className='py-2 px-3 rounded-full border hover:bg-yellow-400 transition hover:cursor-pointer hover:text-white text-sm w-full  bg-slate-100'> <Link to="/ChatHistory">Chat History </Link></div>
           

         
            <div className='py-2 px-3 rounded-full border hover:bg-yellow-400 transition hover:cursor-pointer hover:text-white text-sm w-full  bg-slate-100 '>Logout </div>
            <div className='py-2 px-3 rounded-full border hover:bg-yellow-400 transition hover:cursor-pointer hover:text-white text-sm w-full  bg-slate-100 '>Logout From Other Devices</div>
        </div>


    </div>
  )
}

export default Dashboard