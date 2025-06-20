'use client'
import { UseUser } from 'app/context/UseProvider';
import ButtonLoader from 'components/loaders/ButtonLoader';
import React, { useState } from 'react'
import { Trans, useTranslation } from 'react-i18next';
import { LuEye, LuEyeClosed } from 'react-icons/lu';
interface Props {
  openLoginMoadl: () => void;
}

const Authentication:React.FC<Props>= ({openLoginMoadl}) => {
const[shownPass, setShownPass] = useState<true | false>(false);
const[personalId,setPersonalId] = useState<string>('');
const[password,setPassword] = useState<string>('');
const[loadingUser, setLoadingUser] = useState<boolean>(false);
const { t } = useTranslation()
const { setUser, isLoginModalOpen} = UseUser()

const handleTypeChange = (e: React.MouseEvent<HTMLButtonElement>) => {
  e.preventDefault();
  setShownPass((prev) => !prev)
}

const handleLogin  = async () => {
  try {
    setLoadingUser(true)
    const response = await fetch('https://unimap-5vf6.onrender.com/schedule', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        personalId,
        password,
      })
    })
    if(!response.ok) {
      throw new Error ('response is not OK')
    }
    const data = await response.json();
    setUser(data)
    openLoginMoadl()
    setLoadingUser(false)   
  } catch (error) {
    console.error('error happaned while logging', error)
  }
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
                <h1 className='text-[var(--background)] font-firago text-[32px] tracking-[0.1rem] font-extralight'>{t('authenticate.heading')}</h1>
                <p 
                className='text-[var(--second-text-color)] font-sans text-[12px]  font-extralight'>
                  <Trans
                  i18nKey='authenticate.mainText'
                  components={{
                    1: (
                        <a
                        href="https://uni.tsu.ge"
                        target="_blank"
                        className="text-twitter-blue underline italic"
                        />
                      ),
                  }}
                  />
                </p>
            </div>
            <form 
            className='relative text-center w-full flex flex-col items-center gap-4 '>
                <input 
                onChange={(e) => setPersonalId(e.target.value)}
                value={personalId}
                type="text"
                placeholder={`${t('authenticate.personalId')}`}
                autoComplete='off'
                className='flex items-center justify-center w-[220px] h-[40px] border rounded-full 
                border-blue-400 text-[var(--second-text-color)] text-center placeholder:text-center
                focus:outline-none focus:ring-0'  />

                <input 
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type={shownPass ? 'text' : 'password'}
                placeholder= {`${t('authenticate.password')}`}
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
            onClick={handleLogin}
            className='h-[40px] w-[110px] flex items-center justify-center border rounded-full 
                border-green-400 text-[var(--text-color)] bg-[var(--background)] cursor-pointer hover:scale-[1.1] transition-transform duration-300'>
                {loadingUser ? <ButtonLoader /> : t('authenticate.log_In')}
            </button>
        </div>
    </main>
  )
}

export default Authentication