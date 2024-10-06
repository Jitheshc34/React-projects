import React, { useState } from 'react';
import {FaBars,FaTimes} from "react-icons/fa";
import {Link} from "react-scroll";

let NavLinks = [
  {id: 1,linkname: "home"},
  {id: 2,linkname: "about"},
  {id: 3,linkname: "portfolio"},
  {id: 4,linkname: "experience"},
  {id: 5,linkname: "contact"}
]

const NavBar = () => {
  
  const [nav,setNav] = useState(true);

  return (
    <div className='flex justify-between bg-black w-full h-20 fixed items-center'>
       <div className=' text-white font-signature text-5xl px-4 cursor-pointer'>
        <Link to={"home"} smooth duration={500}>Jithesh</Link> 
        </div>
       <ul className='hidden md:flex'>
        {
          NavLinks?.map(({id,linkname}) =>  (
            <li key={id} className='text-gray-500 px-4 cursor-pointer font-medium hover:scale-105 duration-200 capitalize'>
              <Link to={linkname} smooth duration={500}>{linkname}</Link>
            </li>
          ))
        }
       </ul>
       <div onClick={() => setNav(!nav)}   className='cursor-pointer text-gray-500 pr-4 z-10 md:hidden'>
            {nav ? <FaBars  size={30}/> : <FaTimes  size={30}/> }      
       </div>

       {!nav && (
        <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black
        to-gray-800 text-gray-500'>
       {NavLinks?.map(({id,linkname}) =>  (
            <li key={id} className='cursor-pointer capitalize text-4xl px-4 py-6'>
              <Link onClick={() => setNav(!nav)} to={linkname} smooth duration={500}>{linkname}</Link>
              
            </li>
          ))}
        </ul>
      )}
       
    </div>
  )
}

export default NavBar