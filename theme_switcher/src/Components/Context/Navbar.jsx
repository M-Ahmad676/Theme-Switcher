import React from 'react'
import { IoCart } from "react-icons/io5";

export default function Navbar() {
  return (
    <div className='flex justify-between w-full items-center h-[5rem] shadow-sm shadow-gray-300 px-10'>
    
      <div>
        <h3 className='text-[1.4rem] font-bold text-green-400'>Groccers</h3>
      </div>

      <ul className='flex gap-x-10 text-sm font-medium pr-20'>
        <li><a herf=''>Home</a></li>
        <li><a herf=''>Categories</a></li>
        <li><a herf=''>Services</a></li>
        <li><a herf=''>Contact Us</a></li>
        <li><a herf=''>About Us</a></li>
      </ul>

      <div className='flex gap-x-10 items-center'>
        <div className='group w-12 h-6 relative bg-blue-100 rounded-full cursor-pointer'>
         <span className='h-4 w-4 bg-amber-300 rounded-full absolute top-1 left-1.5 shadow-sm shadow-gray-300 group-hover:bg-white'></span>
        </div>
       <IoCart className='text-[1.6rem]'/>
      </div>

    </div>
  )
}
