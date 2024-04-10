
import Image from 'next/image'
import React from 'react'


const About = () => {
  return (
    <div className='md:grid bg-slate-950   md:grid-cols-2  gap-8 py-8 px-4 sm:py-16 xl:px-16 items-center '>
        <div className=''>
            <Image  src='/imggg.jpg' alt='about' width={500} height={500} /> 
        </div>
        <div className='mb-8'>
            <h1  className='font-bold text-5xl mt-4  text-white mb-6'>About Me</h1>
            <p  className='text-base text-white lg:text-lg'>I am frontend web developer, I am proficient in  front-end  technology, capable of building complete web applications from start to finish. My skill set likely includes languages and frameworks like HTML, CSS, JavaScript,Typescript (and popular libraries like React and Next), as well as server-side language like Node.js.I thrive on bringing ideas to life through clean, efficient code</p>
           
        
        </div>
       
    </div>
  )
}

export default About