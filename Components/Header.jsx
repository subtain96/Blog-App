import { assets } from '@/Assets/assets'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className='py-4 px-4 md:px-10 lg:px-20'>
        <div className="flex justify-between items-center">
            <Image src={assets.logo} width={180} alt='' className='w-[180px] sm:w-auto'/>
            <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black'></button>
        </div>
      
    </div>
  )
}

export default Header
