import React from 'react'
import heroimage from "../assets/heroImage.jpg"
import { IoIosArrowRoundForward } from "react-icons/io";
import {Link} from "react-scroll";

const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
      
        <div className='max-w-screen-lg mx-auto flex flex-col md:flex-row justify-center items-center'>
          <div className='text-white px-4'>
            <h2 className='mt-20 md:mt-40 text-2xl font-bold md:text-5xl py-4'>I'm a full stack developer</h2>
            <p className='pb-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium cum repellat id perferendis, architecto, laboriosam impedit rem aut eveniet esse pariatur, quam debitis! Veritatis, quae facilis perferendis provident officia velit!
            </p>
            
            <Link to="portfolio" smooth duration={500} className='bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-2 mb-4 rounded-md font-bold cursor-pointer group'>
              Portfolio
                <IoIosArrowRoundForward size={25}className='inline-block group-hover:rotate-90 duration-300'/>
            </Link>
            
          </div>
          
              <img className='md:mt-40  mx-auto w-[50%] md:w-1/4 rounded-2xl' src={heroimage} alt="my profile" />
        
        </div>
        
    </div>
  )
}

export default Home