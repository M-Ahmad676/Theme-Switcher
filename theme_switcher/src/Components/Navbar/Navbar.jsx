import React , {useContext} from 'react'
import { IoCart } from "react-icons/io5";
import { themeContext } from '../Context/ThemeContext';

export default function Navbar() {

  const {theme, toggleTheme} = useContext(themeContext)

  return (
    <div className={` ${theme ? 'bg-[#343434]' : ''} flex justify-between w-full items-center h-[5rem] shadow-sm shadow-gray-300 px-10`}>
    
      <div>
        <h3 className={`text-[1.6rem] font-bold text-green-400`}>Groccers</h3>
      </div>

      <ul className={` ${theme ? 'text-white': ''} flex gap-x-10 text-sm font-medium pr-20`}>
        <li><a href=''>Home</a></li>
        <li><a href=''>Categories</a></li>
        <li><a href=''>Services</a></li>
        <li><a href=''>Contact Us</a></li>
        <li><a href=''>About Us</a></li>
      </ul>

      <div className='flex gap-x-10 items-center'>
        <div className={` ${theme ? 'bg-gray-600':''} group w-12 h-6 relative bg-blue-100 rounded-full cursor-pointer`}
        onClick={toggleTheme}
        >
         <span className={`h-4 w-4 bg-amber-300 rounded-full absolute top-1 left-1.5 shadow-sm transition-all duration-300 ease-in-out shadow-gray-300 group-hover:bg-white 
         ${theme ? 'translate-x-5 bg-gray-300' : 'translate-x-0'}`}
         ></span>
        </div>
       <IoCart className={`${theme ? 'text-white': ''} text-[1.6rem]`}/>
      </div>

    </div>
  )
}
