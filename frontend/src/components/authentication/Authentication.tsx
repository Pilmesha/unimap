'use client'
import React, { useState } from 'react'
import { LuEye, LuEyeClosed } from 'react-icons/lu';
interface Props {
  openLoginMoadl: () => void;
}


const Authentication:React.FC<Props>= ({openLoginMoadl}) => {
const[shownPass, setShownPass] = useState<true | false>(false);
const[username,setUsername] = useState<string>('');
const[password,setPassword] = useState<string>('');

const handleTypeChange = (e: React.MouseEvent<HTMLButtonElement>) => {
  e.preventDefault();
  setShownPass((prev) => !prev)
}

  return (
    <main 
    onClick={openLoginMoadl}
    className='fixed inset-0 w-full h-full bg-[var(--blurrer-bg)] backdrop-blur-sm  flex  justify-center items-center z-50'>
        <div 
        onClick={(e) => e.stopPropagation()}
        className='w-[400px]  h-[350px] flex flex-col items-center justify-around bg-[var(--basic)] 
        shadow-lg py-[30px] gap-4 z-50'>
            <div className='flex flex-col items-center justify-center gap-4'>
                <h1 className='text-[var(--background)] font-firago text-[32px] tracking-[0.1rem] font-extralight'>AUTHENTICATE</h1>
                <p 
                className='text-[var(--second-text-color)] font-sans text-[12px]  font-extralight'>
                    Please enter your 
                    <a 
                    href='https://uni.tsu.ge' 
                    target='_blank'
                    className='text-twitter-blue underline italic'
                    > uni.tsu.ge </a> 
                    username and password 
                </p>
            </div>
            <form 
            className='relative text-center w-full flex flex-col items-center gap-4 '>
                <input 
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                type="text"
                placeholder='Username'
                autoComplete='off'
                className='flex items-center justify-center w-[220px] h-[40px] border rounded-full 
                border-blue-400 text-[var(--second-text-color)] text-center placeholder:text-center
                focus:outline-none focus:ring-0'  />

                <input 
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type={shownPass ? 'text' : 'password'}
                placeholder='Password'
                autoComplete='off'
                className='flex items-center justify-center w-[220px] h-[40px] border rounded-full 
                border-blue-400 text-[var(--second-text-color)] text-center placeholder:text-center
                focus:outline-none focus:ring-0 '/>
                <button 
                type='button'
                onClick={handleTypeChange}
                className='absolute bottom-[11px] right-[102px] text-black text-[18px] '>
                  {shownPass ? <LuEye /> : <LuEyeClosed />}
                </button>
            </form>
            <button
            className='h-[40px] w-[110px] flex items-center justify-center border rounded-full 
                border-green-400 text-[var(--text-color)] bg-[var(--background)] cursor-pointer hover:scale-[1.1] transition-transform duration-300'>
                Login
            </button>
        </div>
    </main>
  )
}

export default Authentication