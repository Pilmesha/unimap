'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaSun } from 'react-icons/fa'
import Authentication from '@/components/authentication/Authentication'
import Image from 'next/image'
import { BsMoonStarsFill } from 'react-icons/bs'
import { UseUser } from '@/app/context/UseProvider'
import { TiThMenu } from 'react-icons/ti'

const Navigation = () => {
const {isLoginModalOpen, setIsLoginModalOpen} = UseUser();
const[theme, setTheme] = useState('dark');
const[showMenu, setShowMenu] = useState(false)

const handleMenu = () => {
    setShowMenu((prev) => !prev);
    setIsLoginModalOpen(false)
} 
const removeShowMenu = () => {
    setShowMenu(false)
}

const handleThemeToggle = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
    setShowMenu(false)
}
useEffect(() => {
    document.body.classList.remove('light-mode', 'dark-mode');
    document.body.classList.add(`${theme}-mode`)
},[theme])

const openLoginMoadl = () => {
    setIsLoginModalOpen((prevState) => !prevState);
    setShowMenu(false)
}


  return (
    <section className='w-full h-[40px] mt-6 relative'>
        <div className='w-full h-full flex justify-between items-center'>
            <Link href={'/'} >
                <div className='flex gap-2 items-center'>
                    <div className='w-[40px] h-[40px] overflow-hidden bg-white rounded-full'>
                        <Image
                        src={'/images/icon.png'}
                        alt='logo'
                        width={1200}
                        height={1200}
                        className='w-full h-full object-cover object-center rounded-full'
                        />
                    </div>
                    <h1
                    onClick={removeShowMenu}
                    className='relative inline-block font-firago font-semibold text-[24px] tracking-[1.2] cursor-pointer group whitespace-nowrap'>
                        GANIVI-PLAN
                        <span className='absolute left-0 bottom-[-5px] h-[2px] w-0 bg-[var(--foreground)] transition-all duration-300 group-hover:w-full'></span>
                    </h1>

                </div>
            </Link>

            <div className='md:hidden block relative z-30'> 
                <TiThMenu 
                onClick={handleMenu}
                className='cursor-pointer text-[30px] text-[var(--foreground)] hover:text-[var(--color-twitter-blue)]'
                 />
                 {showMenu && (
                    <div className='absolute top-[30px] right-[3px] w-[150px] h-[200px] bg-[var(--foreground)] p-[20px] rounded-l-[8px] z-20 '>
                        <ul className='w-full h-full flex flex-col justify-between'>
                            <li 
                            title={`change theme to ${theme === 'light' ? 'dark' : 'light'} mode`}
                                onClick={handleThemeToggle}
                                className='flex items-center justify-start text-[var(--background)] px-[10px] cursor-pointer hover:text-[var(--hover-color-toggle)] transition-color duration-300'>
                                {theme === 'light' ? <BsMoonStarsFill /> : <FaSun />}
                            </li>
                            <li>
                                <Link href={'/indoor-map'}>
                                    <h1
                                    onClick={handleMenu}
                                     className='relative inline-block font-firago font-semibold text-[16px] cursor-pointer tracking-[1.2] group text-[var(--background)]'>
                                    Indoor Map
                                    <span className='absolute left-0 bottom-[-5px] h-[2px] bg-[var(--background)] w-0 transition-all duration-300 group-hover:w-full'></span>
                                    </h1> 
                                 </Link>
                            </li>
                            <li>
                                <Link href={'/about'}>
                                    <h1
                                    onClick={handleMenu}
                                    className='relative inline-block font-firago font-semibold text-[16px] cursor-pointer tracking-[1.2] group text-[var(--background)]'>
                                        About Us
                                        <span className='absolute left-0 bottom-[-5px] h-[2px] bg-[var(--background)] w-0 transition-all duration-300 group-hover:w-full'></span>
                                    </h1> 
                                </Link>
                            </li>
                            <li>
                                <div 
                                title='Login to see your subjects table'
                                onClick={openLoginMoadl}
                                className=' flex justify-center items-center w-[100px] h-[30px] rounded-full text-white bg-twitter-blue 
                                font-firago text-[16px] cursor-pointer shadow-md hover:shadow-lg hover:shadow-twitter-blue/50 transition-all duration-300'>
                                    Log In
                                </div>
                            </li>
                        </ul>
                    </div>
                 )}
            </div>

            <div className='md:w-[24rem] md:block hidden '>
                <div className='flex justify-between items-center h-full'>
                    <div
                    title={`change theme to ${theme === 'light' ? 'dark' : 'light'} mode`}
                    onClick={handleThemeToggle}
                    className='cursor-pointer hover:text-[var(--hover-color-toggle)] transition-color duration-300'>
                    {theme === 'light' ? <BsMoonStarsFill /> : <FaSun />}
                    </div>
                    <Link href={'/indoor-map'}>
                        <div>
                           <h1 className='relative inline-block font-firago font-semibold text-[16px] cursor-pointer tracking-[1.2] group'>
                            Indoor Map
                            <span className='absolute left-0 bottom-[-5px] h-[2px] bg-[var(--foreground)] w-0 transition-all duration-300 group-hover:w-full'></span>
                           </h1> 
                        </div>
                    </Link>
                    <Link href={'/about'}>
                        <div>
                           <h1
                            className='relative inline-block font-firago font-semibold text-[16px] cursor-pointer tracking-[1.2] group'>
                            About Us
                            <span className='absolute left-0 bottom-[-5px] h-[2px] bg-[var(--foreground)] w-0 transition-all duration-300 group-hover:w-full'></span>
                           </h1> 
                        </div>
                    </Link>
                    <div 
                    title='Login to see your subjects table'
                    onClick={openLoginMoadl}
                    className=' flex justify-center items-center w-[100px] h-[30px] rounded-full text-white bg-twitter-blue 
                    font-firago text-[16px] cursor-pointer shadow-md hover:shadow-lg hover:shadow-twitter-blue/50 transition-all duration-300'>
                    Log In
                    </div>
                </div>
            </div>
        </div>
        {isLoginModalOpen && 
        <Authentication
        openLoginMoadl={openLoginMoadl}/>
        }
    </section>
  )
}

export default Navigation