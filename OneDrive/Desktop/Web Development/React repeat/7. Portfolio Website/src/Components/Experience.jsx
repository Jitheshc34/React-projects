import React from 'react'
import html from "../assets/html.png"
import css from "../assets/css.png"
import javascript from "../assets/javascript.png"
import reactImage from "../assets/react.png"
import nextjs from "../assets/nextjs.png"
import graphql from "../assets/graphql.png"
import github from "../assets/github.png"
import tailwind from "../assets/tailwind.png"   
import Portfolio from './Portfolio'

const Experience = () => {

    const techskills = [

        {
            id: 1,
            src: html,
            skillname: "HTML",
            style: 'shadow-orange-500',
        },

        
        {
            id: 2,
            src: css,
            skillname: "CSS",
            style: 'shadow-blue-500',
        },

        
        {
            id: 3,
            src: javascript,
            skillname: "Javascript",
            style: 'shadow-yellow-500',
        },

        
        {
            id: 4,
            src: reactImage,
            skillname: "React",
            style: 'shadow-blue-600',
        },

        {
            id: 5,
            src: tailwind,
            skillname: "Tailwind",
            style: 'shadow-sky-400',
        },

    ]
  return (
    <div name='experience' className='bg-gradient-to-b from-gray-800 to-black w-full h-full md:h-screen pt-20'>
    
            <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
            
                <div>

                    <p className='text-4xl font-bold border-b-4 border-gray-500 inline'>Experience</p>
                    <p className='pt-8'>Mainframe Development - COBOL, JCL, DB2, IMS DB, Changeman, Expeditor, Debugger, Fault Analyzer</p>
                    <p className='pt-8'>Technical certifications - AWS Cloud Developer Associate, AWS Cloud Practitioner, Google Cloud Digital Leader</p>
                    <p className='pt-8'>Web Development - These are the web technologies I worked with</p>
        
                </div>
            

                <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>

                    {techskills.map(({id, src, skillname, style}) => (

                        <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                            <img src={src} alt="" className='w-20 mx-auto' />
                            <p className='mt-4'>{skillname}</p> 
                        </div>

                    )

                )}


                </div>

            </div>
        
    </div>
  )
}

export default Experience