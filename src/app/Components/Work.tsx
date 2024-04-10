
import React from 'react'
import Link from 'next/link'

import Image from 'next/image'

const Work = () => {
  return (
    <div  className='bg-slate-950 flex items-center justify-center'>
<div>
<h1 className='text-5xl lg:text-6xl font-bold text-center py-6 text-white
'>Work</h1>
 
  <div  className='grid sm:grid-cols-1 md:grid-cols-2 gap-8 py-4 w-auto px-4'>
                <Link   href={"https://burger-landing-three.vercel.app/"} target='_main'>
                    <Image  src="/burger_landing.JPG" alt="" width={600} height={600} className='rounded-xl hover:scale-105 '/>
                  
                </Link>
                <Link   href={"https://foodweb-sable.vercel.app"} target='_main'>
                    <Image  src="/food_web.JPG" alt="" width={600} height={600} className='rounded-xl hover:scale-105  '/>
                    
                </Link>
                <Link   href={"https://agencywebsite-xi.vercel.app/"} target='_main'>
                    <Image  src="/webdev.JPG" alt="" width={600} height={600} className='rounded-xl hover:scale-105  '/>
            
                </Link>
                <Link   href={"https://seaside-escape-gateways.vercel.app/"} target='_main'>
                    <Image src="/website2.JPG" alt="" width={600} height={600} className='rounded-xl hover:scale-105 '/>
                    
                </Link>
               
            </div>
</div>

    </div>
  )
}

export default Work