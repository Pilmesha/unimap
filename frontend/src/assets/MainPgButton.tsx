'use client'
import React, { useEffect, useState } from 'react'
import { PiCursorBold, PiCursorClickFill} from 'react-icons/pi';

const MainPgButton:React.FC = () => {
const[isClicked, setIsClicked] = useState<true | false>(true);

useEffect(() => {
    const interval = setInterval(() => {
       setIsClicked((prev) => !prev) 
    }, 1000);

    return () => clearInterval(interval)
},[])

  return (
    <div className='w-full h-full bg-green-400 border border-green-500 rounded-full flex items-center 
        justify-center gap-[1rem] cursor-pointer hover:scale-[1.1] transition-all duration-300 hover:shadow-2xl hover:bg-green-500'>
        <p className='font-firago text-[18px] font-semibold text-white'>Explore</p>
        {isClicked ? (
        <PiCursorClickFill className='text-[22px] text-white'/>
        ) : (
        <PiCursorBold  className='text-[22px] text-white'/>
        )}
    </div>
  )
}

export default MainPgButton