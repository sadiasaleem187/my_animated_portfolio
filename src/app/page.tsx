
import React  from 'react';
import HeroSection from './Components/HeroSection'
import AboutSection from './Components/AboutSection'
import Skills from './Components/Skills'
import Contact from './Components/Contact'
import Work from './Components/Work';
const page = () => {
  return (
    <div className='flex min-h-screen flex-col bg-slate-950'>
      <div className=' mx-auto px-12 py-4'
      >
     <HeroSection /> 
     </div>
     <AboutSection />
     <Skills />
   <Work/>
    <Contact />
  
    </div>

  )
}

export default page