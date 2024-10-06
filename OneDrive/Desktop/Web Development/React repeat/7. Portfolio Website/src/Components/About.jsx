import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-3/4 md:w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>    
            </div>
            <p className='md:text-xl mt-5 '>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro esse repellendus ab quisquam doloremque alias culpa, nulla expedita voluptate quos soluta eligendi aliquam sapiente aut asperiores voluptatem assumenda commodi harum consectetur similique ad quae? At, iusto repellat. Dolore quidem ipsa aliquid blanditiis a? Ratione nihil rerum ullam libero esse in.
            </p>
            <br />
            <p className='md:text-xl'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis odit dolorem modi, earum facere impedit nulla iste, repellat ea aut neque? Minus tempore vel temporibus. Commodi, natus ipsam? Optio doloremque id quasi quia quam numquam quaerat illum eveniet, ducimus odit nobis. Placeat repudiandae quos a illo facilis. Aspernatur, magni saepe.
            </p>
        </div>
    </div>

  )
}

export default About